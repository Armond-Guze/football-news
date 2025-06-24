"use client";

import { useForm, ValidationError } from "@formspree/react";

export default function ContactPage() {
  const [state, handleSubmit] = useForm("xvgrgqzd");

  return (
    <div className="min-h-screen bg-background text-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-4xl font-bold tracking-tight text-indigo-400 sm:text-5xl">
          Get in Touch
        </h2>
        <p className="mt-4 text-lg text-gray-300">
          We'd love to hear from you. Fill out the form below and we’ll respond as soon as possible.
        </p>
      </div>

      {state.succeeded ? (
        <p className="text-center text-green-400 mt-12 text-lg font-medium">
          Thanks for reaching out! We'll get back to you soon.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="mx-auto mt-16 max-w-xl space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-semibold leading-6 text-indigo-300">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="mt-2 w-full rounded-md border-0 bg-gray-800 text-white px-4 py-3 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-indigo-300">
              Email
            </label>
            <input
              id="email"
              type="email"
              name="email"
              required
              className="mt-2 w-full rounded-md border-0 bg-gray-800 text-white px-4 py-3 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
            <ValidationError prefix="Email" field="email" errors={state.errors} />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-semibold leading-6 text-indigo-300">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              rows="4"
              required
              className="mt-2 w-full rounded-md border-0 bg-gray-800 text-white px-4 py-3 shadow-sm ring-1 ring-gray-600 placeholder:text-gray-400 focus:ring-2 focus:ring-indigo-500 sm:text-sm"
            />
            <ValidationError prefix="Message" field="message" errors={state.errors} />
          </div>

          <div>
            <button
              type="submit"
              disabled={state.submitting}
              className="w-full rounded-md bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 transition"
            >
              {state.submitting ? "Sending..." : "Send Message"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
