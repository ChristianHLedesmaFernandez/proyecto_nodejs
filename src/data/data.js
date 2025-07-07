import 'dotenv/config';

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY, 
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  projectId: "api-rest-node-js-data-3357f",
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET, 
  messagingSenderId: "558482325500",
  appId: process.env.FIREBASE_APP_ID 
};

// Iniciallizar Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {db};