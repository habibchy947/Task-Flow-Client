# 📝 TaskFlow – Task Management Application  

A modern **Task Management App** with **drag-and-drop** functionality, **real-time synchronization**, and a **minimalistic UI**. Users can **add, edit, delete, and reorder tasks** under three categories: **To-Do, In Progress, and Done**. The app ensures persistence using **MongoDB**, and authentication is handled via **Firebase (Google Sign-In).**  

🚀 **Live Demo:** [https://taskflow-59c1a.web.app](https://taskflow-59c1a.web.app)  

---

## 📌 Table of Contents  
- [Features](#features)  
- [Technologies Used](#technologies-used)  
- [Installation](#installation)  
- [API Endpoints](#api-endpoints)  
- [Usage](#usage)  
- [Folder Structure](#folder-structure)  
- [Dependencies](#dependencies)  
- [Contributors](#contributors)  
- [License](#license)  

---

## ✨ Features  

✅ **User Authentication** (Google Sign-in via Firebase)  
✅ **Task Management System** (Add, Edit, Delete, Reorder)  
✅ **Drag & Drop** (Move tasks between categories using `@dnd-kit`)  
✅ **Real-Time Syncing** (Using Tanstack Query)  
✅ **Modern UI** (Minimalist & Responsive Design using TailwindCSS + DaisyUI)  
✅ **Persistent Storage** (MongoDB Database via Mongoose)  
✅ **Dark Mode Support** (via TailwindCSS themes)  
✅ **Activity Log** *(Bonus Feature: Track task movements and changes)*  

---

## 🛠 Technologies Used  

### **Frontend (Vite + React)**  
- ⚛️ **React.js** (`react` & `react-dom`)  
- ⚡ **Vite** (Fast development build tool)  
- 🔥 **Firebase** (Authentication & real-time sync)  
- 🏗 **@dnd-kit** (Drag-and-drop functionality)  
- 🎨 **Tailwind CSS + DaisyUI** (Modern UI Styling)  
- 📡 **TanStack@Query** (Real-time updates)  
- 📅 **Moment.js** (Task due date formatting)  

### **Backend (Express + MongoDB)**  
- 🚀 **Express.js** (Backend API)  
- 🗄 **MongoDB & Mongoose** (Database for storing tasks)  
- 🌍 **CORS** (Enable cross-origin requests)  
- 📂 **Dotenv** (Manage environment variables)  

### **Deployment & Hosting**  
- 🌐 **Firebase** (Frontend deployment)  
- ☁️ **Vercel** (Backend & Database hosting)  

---

## ⚙️ Installation  

### **1️⃣ Clone frontend the Repository**  
```sh
git clone https://github.com/habibchy947/Task-Flow-Client
cd task-flow-clent  
```
### **1️⃣ Clone Backend the Repository**  
```sh
git clone https://github.com/habibchy947/Task-Flow-Server
cd task-flow-server  
```

### **2️⃣ Install Dependencies**  

#### **Frontend Installation**  
```sh
cd frontend  
npm install  
```
#### **Backend Installation**  
```sh
cd backend  
npm install  
```

### **3️⃣ Setup Environment Variables**  

#### 🔹 **Frontend (.env)**  
```env
VITE_FIREBASE_API_KEY=your_firebase_api_key  
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain  
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id  
VITE_BACKEND_URL=http://localhost:5000
```

#### 🔹 **Backend (.env)**  
```env
PORT=5000  
MONGO_URI=your_mongodb_connection_string  
FIREBASE_API_KEY=your_firebase_api_key  
```

### **4️⃣ Start the Application**  
#### **Backend Server**  
```sh
cd backend  
npm run dev  
```
#### **Frontend App**  
```sh
cd frontend  
npm run dev  
```
Now, visit **`http://localhost:5173`** in your browser. 🎉  

---

## 🔥 API Endpoints  

| Method | Endpoint         | Description                  |
|--------|-----------------|------------------------------|
| `POST` | `/tasks`        | Create a new task           |
| `GET`  | `/tasks/:email`        | Retrieve all tasks          |
| `PUT`  | `/tasks/:id`    | Update task details         |
| `PUT`  | `/dragTasks/:id`    | Drag task        |
| `DELETE` | `/tasks/:id`  | Delete a task permanently   |

---


---

## 📦 Dependencies  

### **Frontend Dependencies (React + Vite)**  
```json
"dependencies": {
  "@dnd-kit/accessibility": "^3.1.1",
  "@dnd-kit/core": "^6.3.1",
  "@dnd-kit/sortable": "^10.0.0",
  "@dnd-kit/utilities": "^3.2.2",
  "@tanstack/react-query": "^5.66.9",
  "axios": "^1.7.9",
  "firebase": "^11.3.1",
  "localforage": "^1.10.0",
  "match-sorter": "^8.0.0",
  "moment": "^2.30.1",
  "react": "^19.0.0",
  "react-dnd": "^16.0.1",
  "react-dnd-html5-backend": "^16.0.1",
  "react-dom": "^19.0.0",
  "react-hot-toast": "^2.5.2",
  "react-icons": "^5.5.0",
  "react-router-dom": "^7.2.0",
  "socket.io-client": "^4.8.1",
  "sort-by": "^1.2.0"
}
```

### **Backend Dependencies (Express + MongoDB)**  
```json
"dependencies": {
  "express": "^4.18.2",
  "mongoose": "^7.0.0",
  "cors": "^2.8.5",
  "dotenv": "^16.0.3",
  "firebase-admin": "^11.0.1",
  "socket.io": "^4.8.1"
},
"devDependencies": {
  "nodemon": "^3.0.2"
}
```

---

## 👥 Contributors  

- **Md. Habib Ullah Chowdhury** – [https://github.com/habibchy947](https://github.com/habibchy947)  

---