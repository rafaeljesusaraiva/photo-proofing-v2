import { firebaseConfig } from "../config/index.config";
import { FirebaseOptions, getApp, initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// https://dev.to/gthinh/how-to-initialize-a-firebase-app-in-the-new-modular-web-sdk-in-nextjs-187i

const config: FirebaseOptions = firebaseConfig;

function createFirebaseApp(config: FirebaseOptions) {
  try {
    return getApp();
  } catch {
    return initializeApp(config);
  }
}

export const firebaseApp = createFirebaseApp(firebaseConfig);
export const firebaseAnalytics = getAnalytics(firebaseApp);
export const firebaseAuth = getAuth(firebaseApp);
