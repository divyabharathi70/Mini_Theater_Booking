
import { Component } from "react";

class Contact extends Component {
  render() {
    return (
      <section className="bg-gray-100 py-16">
        <div className="max-w-6xl mx-auto px-6">

          {/* Heading */}
          <div className="text-center mb-10">
            <h2 className="text-4xl font-bold text-gray-800">
              Contact Us
            </h2>

            <p className="text-gray-600 mt-3">
              Get in touch with us for more information.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* Contact Details */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Contact Details
              </h3>

              <div className="space-y-5">

                <div>
                  <h4 className="font-semibold text-gray-800">
                    📍 Address
                  </h4>
                  <p className="text-gray-600">
                    Chennai, Tamil Nadu, India
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    📞 Phone
                  </h4>
                  <p className="text-gray-600">
                    +91 98765 43210
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    📧 Email
                  </h4>
                  <p className="text-gray-600">
                    info@example.com
                  </p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800">
                    🕐 Working Hours
                  </h4>
                  <p className="text-gray-600">
                    Monday - Saturday: 9:00 AM - 6:00 PM
                  </p>
                </div>

              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 rounded-2xl shadow-lg">
              <h3 className="text-2xl font-bold text-blue-600 mb-6">
                Send Message
              </h3>

              <form className="space-y-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                />

                <textarea
                  rows="5"
                  placeholder="Your Message"
                  className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-blue-500"
                ></textarea>

                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
                >
                  Send Message
                </button>

              </form>
            </div>

          </div>
        </div>
      </section>
    );
  }
}

export default Contact;

