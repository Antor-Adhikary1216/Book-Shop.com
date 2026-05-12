import React from 'react';

const Footer = () => {
    return (
        <div>
 <footer className="bg-white  dark:bg-gray-900 text-gray-700 dark:text-gray-300 mt-10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 py-10">

        {/* Top Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Logo & Description */}
          <div>
            <h2 className="text-2xl font-bold text-black dark:text-white">
              Book Vibe.com
            </h2>

            <p className="mt-3 text-sm leading-6 text-gray-600 dark:text-gray-400">
              Read your favorite books online anytime and anywhere.
              Discover thousands of books with a simple and clean reading experience.
            </p>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-black dark:text-white mb-3">
              Subscribe
            </h3>

            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Get updates about new books and features.
            </p>

            <div className="flex">
              <input
                type="email"
                placeholder="Enter email"
                className="w-full px-4 py-2 rounded-l-lg 
                bg-gray-100 dark:bg-gray-800 
                border border-gray-300 dark:border-gray-700 
                text-black dark:text-white
                focus:outline-none"
              />

              <button className="bg-blue-600 hover:bg-blue-700 px-5 rounded-r-lg text-white font-medium transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-300 dark:border-gray-700 mt-8 pt-5 text-center text-sm text-gray-500 dark:text-gray-400">
          © 2026 BookReader. All rights reserved.
        </div>
      </div>
           </footer> 
        </div>
    );
};

export default Footer;<h1>Footetr</h1>