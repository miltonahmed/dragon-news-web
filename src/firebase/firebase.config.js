// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyCy9fHw3IOJNZ_wCQuS8EouaASh695kogk',
  authDomain: 'dragon-news-web-10954.firebaseapp.com',
  projectId: 'dragon-news-web-10954',
  storageBucket: 'dragon-news-web-10954.firebasestorage.app',
  messagingSenderId: '710731592007',
  appId: '1:710731592007:web:2fd0140c7726dd15f59c62',
  measurementId: 'G-54F7QJ8PE7',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export default app;