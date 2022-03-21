import { useEffect } from "react";
import { useRouter } from "next/router";
import { firebaseAuth } from "../../auth/initFirebase";

const Auth_Logout = () => {
  const router = useRouter();

  useEffect(() => {
    firebaseAuth.signOut();
    router.push("/");
  }, []);

  return <>LOGOUT</>;
};

export default Auth_Logout;
