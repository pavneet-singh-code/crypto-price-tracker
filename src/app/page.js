import HeroSection from "@/components/HeroSection";
import CoinCard from "@/components/CoinCard";
import { getTopCoins } from "@/lib/api";

export default async function Home() {
    const coins = await getTopCoins();

    return (
        <main className="bg-black min-h-screen text-white">
            <HeroSection />

            <section
                id="market"
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32"
            >
                <h2 className="text-4xl font-bold mb-12">Crypto Market</h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {coins.map((coin) => (
                        <CoinCard key={coin.id} coin={coin} />
                    ))}
                </div>
            </section>
        </main>
    );
}
