import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function OrderForm() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-2xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl font-bold text-brand-brown mb-4">Order Form</h1>
        <p className="text-gray-600 mb-8">
          Reserve your Thanksgiving turkey below. We will contact you to confirm your order
          and arrange pickup details.
        </p>
        <form className="space-y-5" aria-label="Turkey order form">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
              Full Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              autoComplete="name"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              autoComplete="email"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              autoComplete="tel"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <div>
            <label htmlFor="size" className="block text-sm font-medium text-gray-700 mb-1">
              Turkey Size
            </label>
            <select
              id="size"
              name="size"
              required
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange bg-white"
            >
              <option value="">Select a size…</option>
              <option value="small">Small (8–12 lbs)</option>
              <option value="medium">Medium (12–18 lbs)</option>
              <option value="large">Large (18–24 lbs)</option>
              <option value="xlarge">Extra Large (24+ lbs)</option>
            </select>
          </div>
          <div>
            <label htmlFor="notes" className="block text-sm font-medium text-gray-700 mb-1">
              Additional Notes
            </label>
            <textarea
              id="notes"
              name="notes"
              rows={3}
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-brand-orange"
            />
          </div>
          <button
            type="submit"
            className="btn-primary w-full text-center"
          >
            Submit Order Request
          </button>
        </form>
      </main>
      <Footer />
    </div>
  )
}
