export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white px-6 py-24 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-3xl font-bold tracking-tight text-purple-700 sm:text-4xl">
          Get in Touch
        </h2>
        <p className="mt-2 text-lg leading-8 text-gray-600">
          We'd love to hear from you. Fill out the form below and we’ll respond as soon as possible.
        </p>
      </div>

      <form className="mx-auto mt-16 max-w-xl space-y-6">
        <div>
          <label htmlFor="name" className="block text-sm font-semibold leading-6 text-gray-900">
            Name
          </label>
          <input
            type="text"
            name="name"
            id="name"
            autoComplete="name"
            required
            className="mt-2 w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            autoComplete="email"
            required
            className="mt-2 w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-semibold leading-6 text-gray-900">
            Message
          </label>
          <textarea
            name="message"
            id="message"
            rows="4"
            required
            className="mt-2 w-full rounded-md border-0 bg-gray-100 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-purple-500 sm:text-sm"
          />
        </div>

        <div>
          <button
            type="submit"
            className="w-full rounded-md bg-purple-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-purple-700 transition"
          >
            Send Message
          </button>
        </div>
      </form>
    </div>
  );
}
