import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import axios from "axios"; // Import axios

const MatchForm = () => {
  const [boy, setBoy] = useState({
    name: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    birthTime: "",
    birthCity: "",
  });

  const [girl, setGirl] = useState({
    name: "",
    birthDay: "",
    birthMonth: "",
    birthYear: "",
    birthTime: "",
    birthCity: "",
  });

  const navigate = useNavigate(); // Initialize useNavigate

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Combine day, month, and year into a single date
    const boyBirthDate = `${boy.birthYear}-${boy.birthMonth}-${boy.birthDay}`;
    const girlBirthDate = `${girl.birthYear}-${girl.birthMonth}-${girl.birthDay}`;

    try {
      const response = await axios.post("http://localhost:5000/api/match", {
        boy: { ...boy, birthDate: boyBirthDate },
        girl: { ...girl, birthDate: girlBirthDate },
      });

      console.log("Response from server:", response.data);
      navigate("/results"); // Navigate to results page after successful API call
    } catch (error) {
      console.error("Error while matching Kundli:", error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-md max-w-lg"
      >
        <h1 className="text-2xl font-bold text-center mb-6">Kundli Matching</h1>

        {/* Boy's Details */}
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-4">Enter Boy's Details</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-md mb-3"
            onChange={(e) => setBoy({ ...boy, name: e.target.value })}
          />
          <div className="flex space-x-2 mb-3">
            <input
              type="text"
              placeholder="Day (DD)"
              className="w-1/3 p-2 border rounded-md"
              maxLength="2"
              onChange={(e) => setBoy({ ...boy, birthDay: e.target.value })}
            />
            <input
              type="text"
              placeholder="Month (MM)"
              className="w-1/3 p-2 border rounded-md"
              maxLength="2"
              onChange={(e) => setBoy({ ...boy, birthMonth: e.target.value })}
            />
            <input
              type="text"
              placeholder="Year (YYYY)"
              className="w-1/3 p-2 border rounded-md"
              maxLength="4"
              onChange={(e) => setBoy({ ...boy, birthYear: e.target.value })}
            />
          </div>
          <input
            type="time"
            className="w-full p-2 border rounded-md mb-3"
            onChange={(e) => setBoy({ ...boy, birthTime: e.target.value })}
          />
          <input
            type="text"
            placeholder="Birth City"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setBoy({ ...boy, birthCity: e.target.value })}
          />
        </div>

        {/* Girl's Details */}
        <div className="mb-8">
          <h2 className="font-semibold text-lg mb-4">Enter Girl's Details</h2>
          <input
            type="text"
            placeholder="Name"
            className="w-full p-2 border rounded-md mb-3"
            onChange={(e) => setGirl({ ...girl, name: e.target.value })}
          />
          <div className="flex space-x-2 mb-3">
            <input
              type="text"
              placeholder="Day (DD)"
              className="w-1/3 p-2 border rounded-md"
              maxLength="2"
              onChange={(e) => setGirl({ ...girl, birthDay: e.target.value })}
            />
            <input
              type="text"
              placeholder="Month (MM)"
              className="w-1/3 p-2 border rounded-md"
              maxLength="2"
              onChange={(e) => setGirl({ ...girl, birthMonth: e.target.value })}
            />
            <input
              type="text"
              placeholder="Year (YYYY)"
              className="w-1/3 p-2 border rounded-md"
              maxLength="4"
              onChange={(e) => setGirl({ ...girl, birthYear: e.target.value })}
            />
          </div>
          <input
            type="time"
            className="w-full p-2 border rounded-md mb-3"
            onChange={(e) => setGirl({ ...girl, birthTime: e.target.value })}
          />
          <input
            type="text"
            placeholder="Birth City"
            className="w-full p-2 border rounded-md"
            onChange={(e) => setGirl({ ...girl, birthCity: e.target.value })}
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600"
        >
          Match Kundli
        </button>
      </form>
    </div>
  );
};

export default MatchForm;
