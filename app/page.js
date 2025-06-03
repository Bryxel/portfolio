'use client';

import { useState } from 'react';
import Image from 'next/image';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

export default function Home() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <main className="min-h-screen bg-gradient-to-b from-blue-50 to-white text-gray-800">
      {/* Navigation */}
      <nav className="fixed w-full bg-white/80 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-blue-600">Bryxel Fuentes</h1>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a href="#home" className="hover:text-blue-600 px-3 py-2 rounded-md">Home</a>
                <a href="#about" className="hover:text-blue-600 px-3 py-2 rounded-md">About</a>
                <a href="#projects" className="hover:text-blue-600 px-3 py-2 rounded-md">Projects</a>
                <a href="#contact" className="hover:text-blue-600 px-3 py-2 rounded-md">Contact</a>
              </div>
            </div>
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-blue-600 hover:bg-gray-100 focus:outline-none"
              >
                <span className="sr-only">Open main menu</span>
                {!isMenuOpen ? (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                  </svg>
                ) : (
                  <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <a href="#home" className="block hover:text-blue-600 px-3 py-2 rounded-md">Home</a>
              <a href="#about" className="block hover:text-blue-600 px-3 py-2 rounded-md">About</a>
              <a href="#projects" className="block hover:text-blue-600 px-3 py-2 rounded-md">Projects</a>
              <a href="#contact" className="block hover:text-blue-600 px-3 py-2 rounded-md">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="relative w-48 h-48 mx-auto mb-8 rounded-full overflow-hidden">
              <Image
                src="/profile.JPG"
                alt="Bryxel Fuentes"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6">
              Hi, I'm <span className="text-blue-600">Bryxel Fuentes</span>
            </h1>
            <p className="text-xl sm:text-2xl text-gray-600 mb-8">
              Full Stack Developer | UI/UX Enthusiast | Problem Solver
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href="#contact"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg transition duration-300"
              >
                Get in Touch
              </a>
              <a
                href="#projects"
                className="bg-gray-100 hover:bg-gray-200 text-gray-800 px-6 py-3 rounded-lg transition duration-300"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <About />

      {/* Projects Section */}
      <Projects />

      {/* Contact Section */}
      <Contact />
    </main>
  );
}
