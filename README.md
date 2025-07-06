# 🤖 ChatBot-AI

ChatBot-AI is a modern AI-powered web application that allows users to:

- 💬 Chat in real-time with an AI assistant  
- 🖼️ Upload images for analysis or transformation    

Built using modern web technologies, ChatBot-AI offers an interactive and intuitive interface for both conversation and creativity.

---

🌐 Live Demo

- https://chatbot-ai-8256a5.netlify.app/

---

## 🌟 Features

- **AI Chat Interface** – Talk with an AI in a real-time messaging format  
- **Image Upload** – Upload images for AI interpretation or enhancements   
- **Responsive UI** – Clean, responsive layout for desktop and mobile  
- **Toast Notifications** – Smooth feedback using `react-toastify`

---

## 🚀 Tech Stack

- **Frontend:** React.js, CSS  
- **Backend/API:** HuggingFace Inference API (for image generation)  
- **Image Processing:** FileReader API  
- **Notifications:** react-toastify
  
---


## 🔧 Setup Instructions

### 1. Clone the Repository

```bash
git clone https://github.com/PalakMishra1905/ChatBot-AI.git
cd ChatBot-AI
2. Install Dependencies
npm install

3. folder Structure

ChatBot-AI/
├── public/
│   └── index.html                  # Main HTML file
│
├── src/
│   ├── assets/                     # Optional: For storing images, icons, etc.
│   │   └── logo.png
│
│   ├── components/                 # Reusable UI components
│   │   ├── ChatBox.jsx             # Chat UI component
│   │   ├── ImageUploader.jsx       # Image upload component
│   │   ├── ImageGenerator.jsx      # AI image generation component
│   │   └── Navbar.jsx              # Navigation bar
│
│   ├── Context/
│   │   └── UserContext.jsx         # React Context for managing global state
│
│   ├── pages/                      # Page-level components
│   │   ├── Home.jsx
│   │   └── About.jsx               # Optional: Info about the project
│
│   ├── huggingFace.js             # Utility file to call HuggingFace API
│   ├── App.jsx                    # Main App component
│   ├── main.jsx                   # Entry point for React app
│   └── index.css                  # Global styles

4. Run the App
npm start
🙋‍♀️ Author
Palak Mishra
