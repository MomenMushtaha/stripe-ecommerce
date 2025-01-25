"use client"

import { useState } from "react"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import * as z from "zod"
import { Loader2, ArrowLeft, Send } from "lucide-react"
import { toast } from "sonner"
import Image from "next/image"
import Link from "next/link"

import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"

const formSchema = z.object({
  name: z.string().min(2, {
    message: "Name must be at least 2 characters.",
  }),
  email: z.string().email({
    message: "Please enter a valid email address.",
  }),
  subject: z.string().min(5, {
    message: "Subject must be at least 5 characters.",
  }),
  message: z.string().min(10, {
    message: "Message must be at least 10 characters.",
  }),
})

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false)

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
    },
  })

  // This function handles form submission
  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsSubmitting(true)
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Here, you would typically send the form data to your backend
    console.log({
      to: "info@faresanbar.co",
      ...values,
    })

    // TODO: Implement actual email sending logic here
    // For example:
    // await sendEmail({
    //   to: "info@faresanbar.co",
    //   subject: values.subject,
    //   body: `From: ${values.name} (${values.email})
    //          Message: ${values.message}`
    // })

    setIsSubmitting(false)
    toast.success("Message sent successfully!")
    form.reset()
  }

  return (
    <div className="bg-premium-gradient min-h-screen" id="contact">
      <div className="container mx-auto px-4 py-24">
        <Link
          href="/"
          className="inline-flex items-center text-premium-gold hover:text-premium-white transition-colors duration-300 mb-8"
        >
          <ArrowLeft className="mr-2" size={20} />
          Back to Home
        </Link>
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="w-full md:w-1/2">
            <h1 className="font-playfair text-5xl font-light uppercase mb-8 text-premium-gradient">Get in Touch</h1>
            <p className="text-premium-white text-lg mb-8">
              Have questions or want to collaborate? We'd love to hear from you. Fill out the form, and we'll get back
              to you as soon as possible.
            </p>
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg mb-8">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-24%20at%203.42.45%E2%80%AFAM.jpg-zh9RmmkSCKSPOu150etjl1yPIxJtGA.jpeg"
                alt="Fares Anbar in a casual setting"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <div className="bg-premium-black bg-opacity-50 p-8 rounded-lg border border-premium-gold shadow-lg">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <FormField
                    control={form.control}
                    name="name"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-premium-gold">Name</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your name"
                            {...field}
                            className="bg-premium-black text-black border-premium-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-premium-gold">Email</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Your email"
                            {...field}
                            className="bg-premium-black text-black border-premium-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="subject"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-premium-gold">Subject</FormLabel>
                        <FormControl>
                          <Input
                            placeholder="Subject"
                            {...field}
                            className="bg-premium-black text-black border-premium-gold"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-premium-gold">Message</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Your message"
                            {...field}
                            className="bg-premium-black text-black border-premium-gold"
                            rows={5}
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                  <div className="flex justify-between items-center pt-4">
                    <Link href="/">
                      <Button
                        type="button"
                        variant="outline"
                        className="bg-transparent text-premium-gold border-premium-gold hover:bg-premium-gold hover:text-premium-black transition-all duration-300"
                      >
                        Cancel
                      </Button>
                    </Link>
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-premium-gold text-premium-black hover:bg-premium-light-gold transition-all duration-300 flex items-center justify-center"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="mr-2 h-4 w-4" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </div>
                </form>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

