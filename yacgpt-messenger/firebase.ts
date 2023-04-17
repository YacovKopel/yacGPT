import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC2jlhZe_SHZFm6OQx9eipEjOC_T6Ms2qs",
  authDomain: "yacgpt-messenger.firebaseapp.com",
  projectId: "yacgpt-messenger",
  storageBucket: "yacgpt-messenger.appspot.com",
  messagingSenderId: "431125355633",
  appId: "1:431125355633:web:d275eb8fde4928a90a4fd0",
  measurementId: "G-S9NJBMMC7P"
};

// Initialize Firebase
const app = getApps().length ? getApp(): initializeApp(firebaseConfig);
const db= getFirestore(app)

export {db};