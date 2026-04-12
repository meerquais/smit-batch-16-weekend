import Navbar from "./component/Navbar"
import Footer from "./component/Footer"

export const metadata = {
  title:"My App",
  description: "Next.js App"
}

export default function RootLayout({children}){


  return (
    <html lang="en">
      <body className="flex flex-col min-h-screen">
    
    <Navbar />

    <main className="flex-1 container mx-auto px-4 py-6">

    {children}

    </main>



    <Footer />






      </body>
    </html>
  )




}