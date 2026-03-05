import HeroSection from "@/components/HeroSection";
import { getTopCoins } from "@/lib/api";

export default async function Home() {
    const data = await getTopCoins();
    return (
        <main className="pt-20 p-6">
            <HeroSection />

            <h2 className="text-2xl font-bold mt-10 mb-4">Market Data</h2>

            <pre className="text-sm text-gray-300 overflow-x-auto">
                {JSON.stringify(data, null, 2)}
            </pre>
        </main>
    );
}
