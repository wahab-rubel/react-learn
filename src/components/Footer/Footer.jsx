import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-800 to-purple-600 text-white px-6 py-12">
      <div className="container max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">
        {/* About */}
        <div>
          <h3 className="text-lg font-semibold mb-4">About</h3>
          <ul className="space-y-2 text-sm">
            <li className="flex items-start gap-2">
              <span>📍</span>
              <p>203 Fake St. Mountain View, San Francisco, California, USA</p>
            </li>
            <li className="flex items-center gap-2">
              <span>📞</span>
              <p>+2 392 3929 210</p>
            </li>
            <li className="flex items-center gap-2">
              <span>✉️</span>
              <p>info@yourdomain.com</p>
            </li>
          </ul>
          <div className="mt-4">
            <input
              type="email"
              placeholder="Enter email address"
              className="px-3 py-2 rounded-l bg-white text-black text-sm focus:outline-none"
            />
            <button className="bg-pink-500 px-4 py-2 rounded-r text-sm hover:bg-pink-600 transition">
              ➤
            </button>
          </div>
        </div>

        {/* Latest News */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Latest News</h3>
          <div className="space-y-4 text-sm">
            {[1, 2].map((item, index) => (
              <div key={index} className="flex gap-3">
                <img
                  src="https://via.placeholder.com/60"
                  alt="news"
                  className="w-14 h-14 rounded object-cover"
                />
                <div>
                  <p>Even the all-powerful Pointing has no control about</p>
                  <p className="text-xs text-gray-300 mt-1">Oct 16, 2019 | Admin</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Information */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Information</h3>
          <ul className="space-y-2 text-sm">
            <li><a href="#" className="hover:text-gray-300">About</a></li>
            <li><a href="#" className="hover:text-gray-300">Products</a></li>
            <li><a href="#" className="hover:text-gray-300">Blog</a></li>
            <li><a href="#" className="hover:text-gray-300">Contact</a></li>
            <li><a href="#" className="hover:text-gray-300">Help & Support</a></li>
          </ul>
        </div>

        {/* Instagram */}
        <div>
          <h3 className="text-lg font-semibold mb-4">Instagram</h3>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(6)].map((_, i) => (
              <img
                key={i}
                src={`https://via.placeholder.com/100?text=Img+${i + 1}`}
                alt="Instagram"
                className="w-full h-20 object-cover rounded"
              />
            ))}
          </div>
        </div>
      </div>

      <div className="text-center text-sm text-gray-300 mt-10 border-t border-white/20 pt-6">
        <p>Copyright ©2021 All rights reserved.</p>
        <p>
          This template is made with <span className="text-pink-400">♥</span> by{" "}
          <a href="https://colorlib.com" target="_blank" rel="noopener noreferrer" className="underline">
            Colorlib.com
          </a>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
