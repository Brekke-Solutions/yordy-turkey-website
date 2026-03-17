import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'

export default function HoursContact() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main id="main-content" className="flex-1 max-w-4xl mx-auto px-4 py-16">
        <h1 className="font-serif text-4xl font-bold text-brand-brown mb-8">
          Hours &amp; Contact
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Hours */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-brand-brown mb-4">
              Seasonal Hours
            </h2>
            <p className="text-gray-600 mb-4">
              We are open seasonally during the Thanksgiving ordering period. Contact us
              for current availability and pickup scheduling.
            </p>
            <table className="text-sm text-gray-700 w-full">
              <tbody>
                <tr className="border-b border-gray-200">
                  <td className="py-2 font-medium pr-8">October – November</td>
                  <td className="py-2">By appointment</td>
                </tr>
                <tr>
                  <td className="py-2 font-medium pr-8">All other times</td>
                  <td className="py-2">Call for availability</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-serif text-2xl font-semibold text-brand-brown mb-4">
              Get in Touch
            </h2>
            <address className="not-italic text-gray-600 space-y-2">
              <p className="font-semibold text-gray-800">Yordy Turkey Farm</p>
              <p>2000 S. Main Street</p>
              <p>Morton, IL 61550</p>
              <p className="mt-3">
                <a
                  href="tel:3092632891"
                  className="text-brand-brown hover:text-brand-orange transition-colors font-medium"
                >
                  309-263-2891
                </a>
              </p>
              <p>
                <a
                  href="mailto:info@yordyturkey.com"
                  className="text-brand-brown hover:text-brand-orange transition-colors font-medium"
                >
                  info@yordyturkey.com
                </a>
              </p>
              <p className="mt-3">
                <a
                  href="https://www.facebook.com/YordyTurkeyFarm"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-brand-brown hover:text-brand-orange transition-colors font-medium"
                >
                  Facebook
                </a>
              </p>
            </address>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}
