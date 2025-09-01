import React from 'react';

export default function CallToAction() {
  return (
    <section className="relative bg-black text-white py-24 px-4 text-center overflow-hidden">
      {/* Glowing background */}
      <div className="absolute inset-0 flex justify-center items-end pointer-events-none z-0">
        <div className="w-[500px] h-[500px] bg-blue-700 opacity-30 rounded-full blur-[160px] mt-[-100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        {/* Label */}
        <span className="bg-gray-800 text-gray-300 text-[10px] sm:text-xs uppercase px-4 py-1 rounded-full tracking-wider inline-block mb-6">
          Call to Action
        </span>

        {/* Heading */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-snug mb-6">
          See <span className="text-white">Anarisk</span> in Action,<br />
          <span className="font-light text-gray-300">Start Detecting Risk Today</span>
        </h2>

        {/* Description */}
        <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed mb-10">
          Automatically detect, classify, and mitigate risks in documents with <br className="hidden sm:block" />
          powerful AI-driven insights.
        </p>

        {/* Button */}
        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm sm:text-base px-6 sm:px-8 py-2.5 sm:py-3 rounded-full font-semibold transition duration-200 shadow-lg">
          Get Started Now — It’s Free.
        </button>
      </div>
    </section>
  );
}
