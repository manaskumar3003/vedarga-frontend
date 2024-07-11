import React from 'react';




function Navbar() {
 
    return (
      
      <nav className="bg-neutral-800 text-white">

        <div className="container p-6 mx-auto flex items-center justify-between py-4">
          <div className="flex items-center space-x-2">
            {/* Logo */}
            <div className="flex items-center space-x-1">
              <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
              <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
            </div>
          </div>
          <div className="hidden md:flex space-x-8">
            
            <a href="#" className="pr-10 text-gray-400 hover:text-gray-300">Vedarga</a>
            <a href="#" className="pr-10 text-gray-400 hover:text-gray-300">Startup</a>
            <a href="/roadmap" className="pr-10 text-gray-400 hover:text-gray-300">RoadMap</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-white hover:text-gray-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"></path>
              </svg>
            </button>
            <button className="text-white hover:text-gray-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
              </svg>
            </button>
          </div>
        </div>
      </nav>
    );
  };

export default Navbar;