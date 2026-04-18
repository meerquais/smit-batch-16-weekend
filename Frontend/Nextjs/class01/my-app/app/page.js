import Image from "next/image";
import Link from "next/link";
import "./globals.css"


export const metadata = {
  title:"My App",
  description: "Next.js App"
}

export default function Home() {
  return (
   <div className="text-center">

    <h1 className="text-3xl font-bold text-blue-600">Welcome to My App</h1>

    <p className="mt-4 text-gray-600">Ths is a Next.js App with Tailwind</p>
    
    <button className="mt-6 px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">Get Started</button>



   </div>
  );
}
