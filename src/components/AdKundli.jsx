import React from 'react'
import { Problem, Careerrun, KundliPic } from '../assets'
const AdKundli = () => {
  return (
    <div>
        {/* {First Card} */}
        <div className="flex flex-col md:flex-row items-center bg-gray-50 p-6 rounded-lg shadow-md max-w-4xl mx-auto">

      <div className="md:w-1/2 text-center md:text-left">
        <h1 className="text-3xl font-bold text-gray-800 leading-tight mb-4">
          Solve love <span className="text-red-500">problem</span> just One{" "}
          <span className="text-blue-500">click</span>
        </h1>
        <p className="text-gray-600 mb-6">
          Consult your problem with our best astrologers.
        </p>
        <a
          href="/consult-astrologer"
          className="bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition"
        >
          CONSULT ASTROLOGER
        </a>
      </div>

      <div className="md:w-1/2 mt-6 md:mt-0 flex justify-center">
        <img
          src={Problem} 
          alt="Couple with love problems"
          className="rounded-lg shadow-md"
        />
        
      </div>
      </div>
      <br />
      {/* {Second Card} */}
    <div className="bg-gray-100 p-8 rounded-lg shadow-md max-w-4xl mx-auto flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-6">

      <div className="flex-shrink-0">
        <img
          src={Careerrun}
          alt="Career Icon"
          className="w-24 h-24 object-contain mx-auto md:mx-0"
        />
      </div>


      <div className="text-center md:text-left">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800">
          Worry About <span className="text-orange-500">Career</span>?
        </h1>
        <p className="mt-4 text-gray-600">
          Illuminate your career path with expert astrology guidance. Facing
          uncertainty? Our trusted astrologers provide personalized solutions,
          aligning your stars for success. Explore career forecasts, remedies,
          and insights tailored to your potential. Let Jotish Aloy empower your
          ambitions and guide you toward a prosperous professional future.
        </p>
        <a
          href="/consult-astrologer"
          className="inline-block bg-green-500 hover:bg-green-600 text-white font-semibold py-2 px-4 rounded-lg shadow transition mt-6 md:mt-4"
        >
          CONSULT ASTROLOGER
        </a>
      </div>
    </div>

    <br />
      {/* {Third Card} */}

    <div
      className="relative bg-gradient-to-r from-yellow-500 to-orange-500 p-8 text-white rounded-lg shadow-lg max-w-4xl mx-auto"
      style={{
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundBlendMode: "overlay",
      }}
    >
      <h1 className="text-2xl md:text-3xl font-bold mb-4">
        Kundali Matching - <span className="text-yellow-300">Horoscope Matching for Marriage Instantly</span>
      </h1>

      <p className="text-sm md:text-base leading-relaxed">
      Kundali Matching for marriage is an easy and most accurate way to match Kundalis of the prospective bride and groom anytime and anywhere. Horoscope Matching or Kundali Milan is an ancient method of Vedic Astrology for the compatibility analysis between couples. Online Kundli Matching as per Hindu Vedic Astrology is done by the Ashtakoota method of Kundli Guna Milan. In a Hindu marriage, a good Gun Milan score is critical for a happy, long-term, and successful married life.
      </p>
    </div>
    </div> 
  )
}

export default AdKundli