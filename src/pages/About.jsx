import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function About() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl font-bold text-brand-brown mb-6">About Us</h1>
        <p className="text-gray-600 leading-relaxed mb-4">
          For over 40 years, the Yordy family has been raising premium, pasture-grown turkeys
          right here in Morton, Illinois. We believe you can truly taste the difference when
          an animal is raised with care, space, and clean feed.
        </p>
        <p className="text-gray-600 leading-relaxed">
          Our family is committed to humane farming practices and bringing the freshest possible
          turkeys to your Thanksgiving table.
        </p>
      </main>
      <Footer />
    </div>
  )
}
