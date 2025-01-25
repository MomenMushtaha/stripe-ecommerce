"use client"

import { useState, useEffect, useRef } from "react"
import MuxPlayer from "@mux/mux-player-react"
import { Volume2, VolumeX, Pause, Play, AlertTriangle, Loader2 } from "lucide-react"
import { toast } from "@/components/ui/use-toast"

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isPaused, setIsPaused] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const [retryCount, setRetryCount] = useState(0)
  const [audioError, setAudioError] = useState(false)
  const [isBuffering, setIsBuffering] = useState(false)
  const playerRef = useRef<any>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  const toggleMute = () => {
    if (playerRef.current) {
      const newMutedState = !isMuted
      playerRef.current.muted = newMutedState
      setIsMuted(newMutedState)
      if (!newMutedState && audioError) {
        resetPlayer()
      }
    }
  }

  const togglePlay = () => {
    if (playerRef.current) {
      if (isPaused) {
        playerRef.current.play()
      } else {
        playerRef.current.pause()
      }
      setIsPaused(!isPaused)
    }
  }

  const handleStalled = () => {
    console.log("Video stalled")
    setIsBuffering(true)
    if (playerRef.current) {
      playerRef.current.load()
    }
  }

  const handleWaiting = () => {
    console.log("Video is buffering...")
    setIsBuffering(true)
  }

  const handleVolumeChange = () => {
    if (!isMuted && audioError) {
      resetPlayer()
    }
  }

  const handleError = (e: any) => {
    console.error("Video playback error:", e)
    if (e.detail && e.detail.message) {
      console.error("Error details:", e.detail.message)
    }

    if (e.detail && e.detail.type === "mediaError" && !isMuted) {
      setAudioError(true)
      setIsMuted(true)
      if (playerRef.current) {
        playerRef.current.muted = true
      }
      toast.error("Audio playback error. Please try again.")
    } else {
      setRetryCount((prevCount) => prevCount + 1)
      if (retryCount > 3) {
        setVideoError(true)
      } else {
        resetPlayer()
      }
    }
  }

  const retryVideoLoad = () => {
    resetPlayer()
  }

  const resetPlayer = () => {
    setRetryCount(0)
    setVideoError(false)
    setAudioError(false)
    setIsBuffering(false)
    if (playerRef.current) {
      playerRef.current.load()
    }
  }

  return (
    <div id="hero" className="relative w-full h-[100vh] overflow-hidden flex items-center justify-center bg-pattern">
      <div className="absolute inset-0 w-full h-full">
        {!videoError ? (
          <MuxPlayer
            ref={playerRef}
            streamType="on-demand"
            playbackId="02nmRyNcDjRb9CSKHs02kxpVgV02r3pkL3YA1DbnSsw5Aw"
            metadataVideoTitle="Fares Anbar - Professional Percussionist"
            metadata-viewer-user-id="anonymous"
            primaryColor="#ffffff"
            secondaryColor="#000000"
            accentColor="#D4AF37"
            autoPlay
            muted
            loop
            preload="auto"
            maxResolution="720p"
            minBufferDuration={2}
            bufferTarget={10}
            maxBufferLength={30}
            preferPlayback="mse"
            onError={handleError}
            onCanPlay={() => setVideoError(false)}
            onStalled={handleStalled}
            onWaiting={handleWaiting}
            onVolumeChange={handleVolumeChange}
            className="w-full h-full object-cover"
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              minWidth: "100%",
              minHeight: "100%",
              width: "auto",
              height: "auto",
              aspectRatio: "2.35/1",
            }}
          />
        ) : (
          <div className="w-full h-full bg-premium-black flex items-center justify-center">
            <div className="text-center">
              <AlertTriangle size={48} className="text-premium-gold mx-auto mb-4" />
              <p className="text-premium-white text-xl mb-4">Video playback error. Please try again later.</p>
              <button
                onClick={retryVideoLoad}
                className="px-4 py-2 bg-premium-gold text-premium-black rounded hover:bg-premium-light-gold transition-colors"
              >
                Retry
              </button>
            </div>
          </div>
        )}
        <div className="absolute inset-0 flex flex-col">
          <div className="flex-grow" style={{ paddingBottom: "50%" }}>
            <div className="absolute inset-0 bg-gradient-to-b from-premium-black/70 via-transparent to-premium-black/70"></div>
            {/* Custom Video Controls */}
            {!videoError && (
              <div className="absolute bottom-8 left-8 flex gap-4 z-30">
                <button
                  onClick={toggleMute}
                  className="w-12 h-12 rounded-full bg-premium-gold bg-opacity-50 flex items-center justify-center text-premium-black hover:bg-opacity-70 transition-all hover:scale-105"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                </button>
                <button
                  onClick={togglePlay}
                  className="w-12 h-12 rounded-full bg-premium-gold bg-opacity-50 flex items-center justify-center text-premium-black hover:bg-opacity-70 transition-all hover:scale-105"
                  aria-label={isPaused ? "Play" : "Pause"}
                >
                  {isPaused ? <Play size={20} /> : <Pause size={20} />}
                </button>
                {isBuffering && (
                  <div className="w-12 h-12 rounded-full bg-premium-gold bg-opacity-50 flex items-center justify-center text-premium-black">
                    <Loader2 className="animate-spin" size={20} />
                  </div>
                )}
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Center content */}
      <div
        className={`relative z-10 text-center px-4 transition-opacity duration-1000 ${
          isVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="flex flex-col items-center gap-8">
          <h2 className="font-playfair text-xs sm:text-sm md:text-base lg:text-xl text-premium-white tracking-[0.25em] uppercase">
            P R O F E S S I O N A L&nbsp;&nbsp;P E R C U S S I O N I S T
          </h2>
          <p className="font-roboto text-lg sm:text-xl md:text-2xl lg:text-3xl text-premium-gold tracking-[0.2em] uppercase shimmer">
            INSTRUCTOR & PERFORMER
          </p>
          <div className="mt-8 space-y-4">
            <h3 className="font-playfair text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-premium-gradient">
              FARES
            </h3>
            <p className="font-arabic text-xl sm:text-2xl md:text-3xl lg:text-4xl text-premium-white tracking-wider">
              فارس عنبر
            </p>
          </div>
          <a
            href="#about"
            className="mt-8 inline-block px-8 py-3 text-xs sm:text-sm uppercase tracking-widest border border-premium-gold text-premium-gold hover:bg-premium-gold hover:text-premium-black transition-all duration-300 ease-in-out hover:scale-105"
          >
            Discover More
          </a>
        </div>
      </div>
    </div>
  )
}

