import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyDraHzVeUsyDdEYHIKX508ikf00lhzb4G8",
  authDomain: "cercenasco-tienda-moda.firebaseapp.com",
  projectId: "cercenasco-tienda-moda",
  storageBucket: "cercenasco-tienda-moda.appspot.com",
  messagingSenderId: "864537122540",
  appId: "1:864537122540:web:dfc4fd60c8aaa6577637c9"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
