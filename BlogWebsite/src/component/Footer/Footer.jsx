import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../Logo'

function Footer() {
  return (
  <section className="relative bg-gray-900 text-gray-300">
  <div className="relative z-10 mx-auto max-w-7xl px-2 py-1">
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">

      {/* Logo + Copyright */}
      <div className="flex flex-col justify-between">
        <div className="mb-3 inline-flex items-center">
          <Logo width="110px" />
        </div>
        <p className="text-xs text-gray-400">
          © 2023 DevUI. All Rights Reserved.
        </p>
      </div>

      {/* Company */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase text-gray-400 tracking-wide">
          Company
        </h3>
        <ul className="space-y-2 text-sm">
          <li><Link className="hover:text-white transition-colors" to="/">Features</Link></li>
          <li><Link className="hover:text-white transition-colors" to="/">Pricing</Link></li>
          <li><Link className="hover:text-white transition-colors" to="/">Affiliate</Link></li>
          <li><Link className="hover:text-white transition-colors" to="/">Press</Link></li>
        </ul>
      </div>

      {/* Support */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase text-gray-400 tracking-wide">
          Support
        </h3>
        <ul className="space-y-2 text-sm">
          <li><Link className="hover:text-white transition-colors" to="/">Account</Link></li>
          <li><Link className="hover:text-white transition-colors" to="/">Help</Link></li>
          <li><Link className="hover:text-white transition-colors" to="/">Contact</Link></li>
          <li><Link className="hover:text-white transition-colors" to="/">Support</Link></li>
        </ul>
      </div>

      {/* Legals */}
      <div>
        <h3 className="mb-3 text-sm font-semibold uppercase text-gray-400 tracking-wide">
          Legals
        </h3>
        <ul className="space-y-2 text-sm">
          <li><Link className="hover:text-white transition-colors" to="/">Terms</Link></li>
          <li><Link className="hover:text-white transition-colors" to="/">Privacy</Link></li>
          <li><Link className="hover:text-white transition-colors" to="/">Licensing</Link></li>
        </ul>
      </div>
    </div>
  </div>
</section>



  )
}

export default Footer