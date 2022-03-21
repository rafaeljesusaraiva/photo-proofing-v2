// RENAME TO index.config.ts

import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const websiteConfig = {
  website_name: process.env.webConf_websiteName || "Provas Fotografia",
};

import { FirebaseOptions } from "firebase/app";
export const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.firebaseConf_apiKey || "",
  authDomain: process.env.firebaseConf_authDomain || "",
  projectId: process.env.firebaseConf_projectId || "",
  storageBucket: process.env.firebaseConf_storageBucket || "",
  messagingSenderId: process.env.firebaseConf_messagingSenderId || "",
  appId: process.env.firebaseConf_appId || "",
};

export const uiConfig = (firebase: any) => {
  return {
    signInFlow: "popup",
    signInSuccessUrl: "/",
    tosUrl: "/help/terms-of-service",
    privacyPolicyUrl: "/help/privacy-policy",
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      FacebookAuthProvider.PROVIDER_ID,
    ],
  };
};
