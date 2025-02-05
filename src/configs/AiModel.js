const { GoogleGenerativeAI } = require("@google/generative-ai");

// API key must be a string enclosed in quotes
const apiKey = "AIzaSyDZ7FHvX2r7ZQxdlKV3bQXMqFZ8HXEsO88";

const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-2.0-flash-exp",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

export const chatSession = model.startChat({
  generationConfig,
  history: [
    {
      role: "user",
      parts: [
        {
          text: "Based on the following details:\n- Height: 190 cm\n- Weight: 80 kg\n- Age: 21 years\n- Gender: Male\n- Number of days available to workout: 6,\nCreate a detailed 7-day workout plan for a Intermediate. Structure it day by day from Monday to Sunday and give specific exercises on each day to ensure the user targets every body part during the week. Include rest days as well. Do not include cardio.",
        },
      ],
    },
    {
      role: "model",
      parts: [
        {
          text: "Okay, here's a detailed 7-day workout plan tailored for an intermediate male...",
        },
      ],
    },
  ],
});
