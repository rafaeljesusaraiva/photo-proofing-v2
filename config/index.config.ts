// RENAME TO index.config.ts

import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";

export const websiteConfig = {
  website_name: process.env.webConf_websiteName || "Provas Fotografia",
  website_url:
    process.env.NEXT_PUBLIC_webConf_websiteUrl || "http://localhost:3000/",
};

import { FirebaseOptions } from "firebase/app";
export const firebaseConfig: FirebaseOptions = {
  apiKey: process.env.NEXT_PUBLIC_firebaseConf_apiKey,
  authDomain: process.env.NEXT_PUBLIC_firebaseConf_authDomain,
  projectId: process.env.NEXT_PUBLIC_firebaseConf_projectId,
  storageBucket: process.env.NEXT_PUBLIC_firebaseConf_storageBucket,
  messagingSenderId: process.env.NEXT_PUBLIC_firebaseConf_messagingSenderId,
  appId: process.env.NEXT_PUBLIC_firebaseConf_appId,
  measurementId: process.env.NEXT_PUBLIC_firebaseConf_measurementId,
};

export const uiConfig = (firebase: any) => {
  return {
    signInFlow: "popup",
    signInSuccessUrl: websiteConfig.website_url,
    tosUrl: "/help/terms-of-service",
    privacyPolicyUrl: "/help/privacy-policy",
    signInOptions: [
      GoogleAuthProvider.PROVIDER_ID,
      FacebookAuthProvider.PROVIDER_ID,
    ],
  };
};
