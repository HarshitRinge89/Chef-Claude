# 👨‍🍳 Chef-Claude

An AI-powered recipe generation web application built with **React** that uses the ingredients provided by the user to generate delicious recipes along with step-by-step cooking instructions.

Chef-Claude integrates **Qwen3 via Hugging Face** to process the user's ingredients and generate personalized recipe suggestions.

---

## ✨ Features

- 🥕 **Ingredient-Based Recipes**  
  Enter the ingredients you currently have and get a recipe recommendation based on them.

- 🤖 **AI-Powered Recipe Generation**  
  Uses Qwen3 through Hugging Face to generate recipes dynamically.

- 📋 **Step-by-Step Instructions**  
  Get clear cooking instructions along with the generated recipe.

- ⚡ **React-Based Interface**  
  Fast and responsive user interface built using React.

- 🎯 **Simple User Experience**  
  Add ingredients and let the AI handle the recipe generation.

---

## 🛠️ Tech Stack

### Frontend
- **React**
- **JavaScript**
- **HTML**
- **CSS**

### AI / Backend Integration
- **Hugging Face**
- **Qwen3**
- Hugging Face API

### Development Tools
- **Vite**
- **npm**
- **Git & GitHub**

---

## 🔄 How It Works

The application follows a simple workflow:

```text
User enters ingredients
        ↓
React collects the ingredients
        ↓
Ingredients are sent to the AI API
        ↓
Qwen3 processes the ingredients
        ↓
AI generates a suitable recipe
        ↓
Recipe & cooking instructions are displayed
