'use client'
import { signIn } from "next-auth/react";

function Login () {
    return(
        <div className="bg-[#11A37F] h-screen flex flex-col items-center justify-center text-center">
        <img src="/images/gptlogo.png" alt="logo" />
        <button onClick={()=> signIn("google")}
        className="text-white font-bold text-3xl animate-pulse">Sign in to YacGpt</button></div>
    )
}
export default Login;