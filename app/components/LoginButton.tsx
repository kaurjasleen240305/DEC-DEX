"use client";
import { useSession, signIn, signOut } from "next-auth/react";
import { useAppContext } from "./AppContext";
import { useMemo,useEffect } from "react";
import { useOkto,OktoContextType } from "okto-sdk-react";
import { useRouter } from 'next/router';

export function LoginButton() {
  const { data: session, status } = useSession();
  const idToken = useMemo(() => (session ? session.id_token : null), [session]);
  const {authenticate,logOut} = useOkto() as OktoContextType;
  // const router = useRouter();
 
  async function handleAuthenticate(): Promise<any> {
    if (!idToken) {
      return { result: false, error: "No google login" };
    }
    return new Promise((resolve) => {
      authenticate(idToken, (result: any, error: any) => {
        if (result) {
          console.log("Authentication successful");
          resolve({ result: true });
        } else if (error) {
          console.error("Authentication error:", error);
          resolve({ result: false, error });
        }
      });
    });
  }

  async function handleLogout() {
    try {
      logOut();
      return { result: "logout success" };
    } catch (error) {
      return { result: "logout failed" };
    }
  }

  const handleLogin = async () => {
    if (!session) {
      try {
        signIn();
      } catch (error) {
        console.error("Error during sign-in:", error);
      }
    } else {
      signOut();
    }
  };

  useEffect(() => {
    if (status === "authenticated" && session) {
      handleAuthenticate();
      window.location.href = '/portfolio';
    }
    else{
      handleLogout();
      window.location.href = '/homePage';
    }
  }, [status, session]);

  return (
    <button
      className={`border border-transparent rounded px-4 py-2 transition-colors ${
        session
          ? "bg-red-500 hover:bg-red-700 text-white"
          : "bg-blue-500 hover:bg-blue-700 text-white"
      }`}
      onClick={handleLogin}
    >
      Google {session ? "Log Out" : "Log In"}
    </button>
  );
}
