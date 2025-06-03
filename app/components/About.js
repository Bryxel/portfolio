import React from 'react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4 text-gray-800">About Me</h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm a full-stack software engineer currently pursuing a B.S. in Information Technology at Middle Georgia State University, with an expected graduation date of May 2027.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I love building tools that solve real-world problems — from an AI-powered document grader to a life simulation app using Google Gemini. My focus is on learning by doing: designing, deploying, and iterating on full-stack applications using React, Django, Node.js, and more.
            </p>
            <p className="text-gray-600 text-lg leading-relaxed">
              I'm actively seeking software engineering internships where I can contribute, grow as a developer, and learn from a great team.
            </p>
          </div>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6 text-gray-800">Technologies</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Frontend</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>React</li>
                    <li>Next.js</li>
                    <li>Tailwind CSS</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Backend</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Node.js</li>
                    <li>Django</li>
                    <li>Express</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">AI/ML</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>Google Gemini</li>
                    <li>OpenAI API</li>
                  </ul>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-gray-800 mb-2">Database</h4>
                  <ul className="text-gray-600 space-y-1">
                    <li>MongoDB</li>
                    <li>PostgreSQL</li>
                    <li>MySQL</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 