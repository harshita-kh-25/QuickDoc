import React from 'react';

export default function CallToAction() {
  return (
    <section className="relative bg-black text-white py-28 px-4 text-center overflow-hidden">
      {/* Full-screen glowing background */}
      <div className="absolute inset-0 flex justify-center items-start pointer-events-none z-0">
        <div className="w-[500px] h-[500px] bg-blue-700 opacity-30 rounded-full blur-[160px] mt-[-100px]" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto">
        <span className="bg-gray-800 text-gray-300 text-xs uppercase px-4 py-1 rounded-full tracking-wider inline-block mb-5">
          Call to Action
        </span>

        <h2 className="text-4xl md:text-5xl font-bold mb-4">
          See <span className="text-white">Anarisk</span> in Action,<br />
          <span className="font-light text-gray-300">Start Detecting Risk Today</span>
        </h2>

        <p className="text-gray-400 text-base mb-10">
          Automatically detect, classify, and mitigate risks in documents with <br />
          powerful AI-driven insights.
        </p>

        <button className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-8 py-3 rounded-full font-semibold transition duration-200 shadow-lg">
          Get Started Now — It’s Free.
        </button>
      </div>
    </section>
  );
}
