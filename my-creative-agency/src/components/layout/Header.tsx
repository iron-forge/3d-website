import React from 'react';

const Header = () => (
  <header className="w-full py-6 px-8 flex justify-between items-center bg-transparent absolute top-0 left-0 z-10">
    <div className="text-2xl font-bold">My Creative Agency</div>
    <nav>
      <ul className="flex gap-6">
        <li><a href="#about" className="hover:underline">About</a></li>
        <li><a href="#work" className="hover:underline">Work</a></li>
        <li><a href="#services" className="hover:underline">Services</a></li>
        <li><a href="#contact" className="hover:underline">Contact</a></li>
      </ul>
    </nav>
  </header>
);

export default Header;
