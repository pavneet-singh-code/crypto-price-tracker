import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata = {
    title: "Crypto Price Tracker",
    description: "Track crypto markets in real time",
};

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className="bg-black text-white">
                <Navbar />

                <main>{children}</main>

                <footer className="text-center text-gray-500 py-10 border-t border-emerald-500/10">
                    Crypto Tracker © 2026
                </footer>
            </body>
        </html>
    );
}
