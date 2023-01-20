
import { initializeApp } from "firebase/app";
import {getAuth} from 'firebase/auth';
const firebaseConfig = {
  // apiKey:process.env.REACT_APP_API_KEY,
  // authDomain:process.env.REACT_APP_AUTH_DOMAIN,
  // projectId:process.env.REACT_APP_PROJECT_ID,
  // storageBucket:process.env.REACT_APP_STORAG_EBUCKET,
  // messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId:process.env.REACT_APP_APP_ID
  apiKey: "AIzaSyCIFA2ToVCUuXOeyg1-amcRcuZoxZ1JCKg",
  authDomain: "motor-parts-703d0.firebaseapp.com",
  projectId: "motor-parts-703d0",
  storageBucket: "motor-parts-703d0.appspot.com",
  messagingSenderId: "561241277667",
  appId: "1:561241277667:web:3a5f2db06d07f5a780b1d6"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;