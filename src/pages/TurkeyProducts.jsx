import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function TurkeyProducts() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl font-bold text-brand-brown mb-6">Turkey Products</h1>
        <p className="text-gray-600 leading-relaxed mb-6">
          We raise whole turkeys in a variety of sizes to fit any Thanksgiving gathering.
          All birds are fresh—never frozen—and available for pickup at our Morton, IL farm.
        </p>
        <ul className="space-y-3 text-gray-700 list-disc list-inside">
          <li>Small (8–12 lbs) – great for smaller gatherings</li>
          <li>Medium (12–18 lbs) – our most popular size</li>
          <li>Large (18–24 lbs) – perfect for big family dinners</li>
          <li>Extra Large (24+ lbs) – for the biggest tables</li>
        </ul>
      </main>
      <Footer />
    </div>
  )
}
