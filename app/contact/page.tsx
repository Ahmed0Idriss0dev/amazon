export const metadata = {
  title: 'Contact Us | Amazon Product Recommendations',
  description: 'Get in touch with us for inquiries, feedback, or partnership opportunities.',
};

export default function ContactPage() {
  return (
    <main className="max-w-2xl mx-auto px-4 py-16">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">Contact Us</h1>
      <p className="text-gray-600 mb-8">
        Have a question, suggestion, or partnership inquiry? We'd love to hear from you. Fill out the form below or send us an email.
      </p>

      <form className="space-y-6" action="https://formspree.io/f/YOUR_FORM_ID" method="POST">
        <div>
          <label htmlFor="name" className="block mb-1 font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            className="w-full px-4 border-neutral-200 py-2 border rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="email" className="block mb-1 font-medium text-gray-700">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        <div>
          <label htmlFor="message" className="block mb-1 font-medium text-gray-700">Message</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            required
            className="w-full px-4 py-2 border border-neutral-200 rounded-md focus:outline-none focus:ring focus:ring-blue-300"
          ></textarea>
        </div>

        <button
          type="submit"
          className="bg-dark-950  text-white px-6 py-2 rounded-md hover:bg-dark-950 transition"
        >
          Send Message
        </button>
      </form>

      <p className="text-sm text-gray-500 mt-6">
        Or email us directly at <a href="mailto:webocamw224@gmail.com" className="text-amazon-600 hover:underline">webocamw224@gmail.com</a>
      </p>
    </main>
  );
}
