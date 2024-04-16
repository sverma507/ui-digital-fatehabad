import { initializeApp } from "firebase/app";
const firebaseConfig = {
  apiKey: "AIzaSyBRShwQOq34TLtcCTdPZ9jM8e36EOg6yAM",
  authDomain: "admin-digital-fatehabad.firebaseapp.com",
  projectId: "admin-digital-fatehabad",
  storageBucket: "admin-digital-fatehabad.appspot.com",
  messagingSenderId: "1067124179064",
  appId: "1:1067124179064:web:2565f23cbb382ca0dfed8d",
  measurementId: "G-4S8WYYEH3L",
  databaseUrl:"https://admin-digital-fatehabad-default-rtdb.firebaseio.com/"
};
export const app = initializeApp(firebaseConfig);
