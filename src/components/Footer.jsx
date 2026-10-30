import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/10 text-white mt-20">

      <div className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand */}
        <div>
          <h2 className="text-2xl font-bold tracking-tight">
            Khan Autos
          </h2>
          <p className="text-white/60 mt-3 leading-relaxed">
            Premium automotive parts built for performance, durability, and trust.
            We keep your journey moving forward.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2 text-white/60">
            <li className="hover:text-white transition cursor-pointer"><a href="#">Home</a></li>
            <li className="hover:text-white transition cursor-pointer"><a href="#buy">Shop</a></li>
            <li className="hover:text-white transition cursor-pointer"><a href="#whyUs">About Us</a></li>
            <li className="hover:text-white transition cursor-pointer"><a href="https://wa.me/923134307889" target="_blank">Contact</a></li>
          </ul>
        </div>

        {/* Contact */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Contact</h3>
          <p className="text-white/60">Email: support@khanautos.com</p>
          <p className="text-white/60 mt-2"><a href="https://wa.me/923134307889" target="_blank">Phone: +92 313 4307889</a></p>
          <p className="text-white/60 mt-2">Location: Pakistan</p>
        </div>

      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10 py-4 text-center text-white/40 text-sm bg-[#070707]">
        © {new Date().getFullYear()} Khan Autos. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;
