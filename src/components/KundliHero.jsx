import React from "react";
import { Front } from "../assets"; 

const KundliHero = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-6">
      {/* Content Section */}
      <div className="max-w-3xl text-center">
        {/* Image */}
        <img
          src={Front}
          alt="Kundli Illustration"
          className="w-full h-auto mb-6 object-contain"
        />

        {/* Text */}
        <p className="text-gray-700 text-lg leading-relaxed text-left">
          In the Indian Vedic Astrology System, a *Kundli* refers to the
          astrological birth chart created based on the planetary position at
          the exact time and place of someone's birth. It essentially provides
          a visual representation and analysis of the cosmic influences
          affecting an individual. For marriage purposes, the *Kundli* of the
          prospective bride and groom are matched against each other to
          determine areas of compatibility and points where the couple may face
          issues. The higher the matching points, called *Gun Milan* score, the
          better the match is considered for marriage.
        </p>
      </div>

      {/* Button Section */}
      <div className="mt-10">
        <a href="/kundli-matching">
          <button className="px-6 py-3 bg-gradient-to-r from-yellow-500 to-orange-500 text-white rounded-md hover:bg-yellow-600 transition-all duration-300">
            Match Kundli
          </button>
        </a>
      </div>
    </div>
  );
};

export default KundliHero;