import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
   apiKey: "AIzaSyCA9aqKr31vqHtL5rIDshH_DTORngR8nhA",
  authDomain: "teamapp-55496.firebaseapp.com",
  projectId: "teamapp-55496",
  storageBucket: "teamapp-55496.appspot.com",
  messagingSenderId: "28010830851",
  appId: "1:28010830851:web:6881e06d5557bb60c80236",
  measurementId: "G-2V4TD3DZHD"
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);
const storage = getStorage(app);
const analytics = getAnalytics(app);
export { firestore, auth, storage, analytics };
