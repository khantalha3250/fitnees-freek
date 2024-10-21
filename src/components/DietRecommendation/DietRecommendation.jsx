import React, { useState } from "react";
import "./DietRecommendation.css";
import { dietData } from "../../data/dietData";
// Assuming diet.js is in the data folder

const DietRecommendation = () => {
  const [bmi, setBmi] = useState("");
  const [foodType, setFoodType] = useState("veg");
  const [recommendedDiet, setRecommendedDiet] = useState("");

  const handleBmiChange = (e) => {
    setBmi(e.target.value);
  };

  const handleFoodTypeChange = (e) => {
    setFoodType(e.target.value);
  };

  const getDietRecommendation = () => {
    const bmiValue = parseFloat(bmi);

    if (!bmiValue || isNaN(bmiValue)) {
      setRecommendedDiet("Please enter a valid BMI.");
      return;
    }

    let dietRange;
    if (bmiValue < 18.5) {
      dietRange = "underweight";
    } else if (bmiValue >= 18.5 && bmiValue < 24.9) {
      dietRange = "normal";
    } else if (bmiValue >= 25 && bmiValue < 29.9) {
      dietRange = "overweight";
    } else {
      dietRange = "obese";
    }

    const dietsForCategory = dietData[dietRange][foodType];
    const randomDiet = dietsForCategory[Math.floor(Math.random() * dietsForCategory.length)];

    setRecommendedDiet(randomDiet);
  };

  return (
    <div className="diet-recommendation">
      <h2>Diet Recommendation System</h2>
      <div className="input-section">
        <label>BMI:</label>
        <input
          type="number"
          value={bmi}
          onChange={handleBmiChange}
          placeholder="Enter your BMI"
        />
        <label>Food Type:</label>
        <select value={foodType} onChange={handleFoodTypeChange}>
          <option value="veg">Veg</option>
          <option value="non-veg">Non-Veg</option>
        </select>
        <button onClick={getDietRecommendation}>Get Diet</button>
      </div>
      <div className="output-section">
        <h3>Recommended Diet:</h3>
        <p>{recommendedDiet}</p>
      </div>
    </div>
  );
};

export default DietRecommendation;
