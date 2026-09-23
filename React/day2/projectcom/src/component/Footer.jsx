const Footer=()=>{
  return (

    <>
    <footer className="bg-slate-950 text-white">

      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Brand */}
          <div>
            <h2 className="text-3xl font-bold text-cyan-400">
              Nova<span className="text-white">Tech</span>
            </h2>

            <p className="text-gray-400 mt-4 leading-7">
              We create modern, responsive and user-friendly
              digital experiences using the latest technologies.
            </p>

            <button
              className="mt-6 px-6 py-3 bg-cyan-500
              hover:bg-cyan-400 text-slate-950
              font-semibold rounded-full transition duration-300"
            >
              Get Started →
            </button>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Quick Links
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer">
                Home
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                About Us
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Services
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Projects
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Contact
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Our Services
            </h3>

            <ul className="space-y-3 text-gray-400">
              <li className="hover:text-cyan-400 cursor-pointer">
                Web Development
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                UI / UX Design
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Mobile Applications
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Digital Marketing
              </li>
              <li className="hover:text-cyan-400 cursor-pointer">
                Cloud Solutions
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-lg font-semibold mb-5">
              Contact Us
            </h3>

            <div className="space-y-4 text-gray-400">
              <p>📍 Chennai, Tamil Nadu</p>
              <p>📞 +91 98765 43210</p>
              <p>✉️ hello@novatech.com</p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-3 mt-6">

              <div className="w-10 h-10 flex items-center justify-center
                rounded-full bg-slate-800 hover:bg-cyan-500
                hover:text-slate-950 cursor-pointer transition">
                f
              </div>

              <div className="w-10 h-10 flex items-center justify-center
                rounded-full bg-slate-800 hover:bg-cyan-500
                hover:text-slate-950 cursor-pointer transition">
                X
              </div>

              <div className="w-10 h-10 flex items-center justify-center
                rounded-full bg-slate-800 hover:bg-cyan-500
                hover:text-slate-950 cursor-pointer transition">
                in
              </div>

              <div className="w-10 h-10 flex items-center justify-center
                rounded-full bg-slate-800 hover:bg-cyan-500
                hover:text-slate-950 cursor-pointer transition">
                ◎
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto px-6 py-5
          flex flex-col md:flex-row
          justify-between items-center gap-3">

          <p className="text-gray-500 text-sm">
            © 2026 NovaTech. All rights reserved.
          </p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span className="hover:text-cyan-400 cursor-pointer">
              Privacy Policy
            </span>

            <span className="hover:text-cyan-400 cursor-pointer">
              Terms & Conditions
            </span>
          </div>

        </div>

      </div>

    </footer>

    </>
  );
}

export default Footer;



