import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

export const metadata = {
  title: {
    default: "AfriGlobal Travels | Study Abroad, Tours & Visa Services – Ghana & Nigeria",
    template: "%s | AfriGlobal Travels",
  },
  description:
    "Study abroad consultancy and travel agency in Accra, Ghana and Lagos, Nigeria. Admissions, visa processing, scholarships and holiday tour packages.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-800 antialiased">
        <Navbar />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
