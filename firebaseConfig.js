import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,  
} from "firebase/auth";

// Your web app's Firebase configuration
// IMPORTANT: Replace with your own Firebase project details
const firebaseConfig = {
apiKey: "AIzaSyD4qE2n8THm0cOeD37l_2FzcFiPtYlGntc",
  authDomain: "advanced-virtual-interns-998ef.firebaseapp.com",
  projectId: "advanced-virtual-interns-998ef",
  storageBucket: "advanced-virtual-interns-998ef.firebasestorage.app",
  messagingSenderId: "1071417095162",
  appId: "1:1071417095162:web:0a50bf8950d1ba74e4aa43"  
}

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

const provider = new GoogleAuthProvider();
export const signInWithGoogle = () => {
return signInWithPopup(auth, provider);
};

export default app;











