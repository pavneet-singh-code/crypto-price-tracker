"use client";

import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import CoinCard from "@/components/CoinCard";
import { getTopCoins } from "@/lib/api";

export default function Home() {
  const [coins, setCoins] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    async function fetchCoins() {
      const data = await getTopCoins();
      setCoins(data);
    }

    fetchCoins();
  }, []);

  const handleSearch = (term) => {
    setSearchQuery(term);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <main className="bg-black min-h-screen text-white">

      <Navbar onSearch={handleSearch} />

      <HeroSection />

      <section
        id="market"
        className="max-w-6xl mx-auto px-6 py-32"
      >
        <h2 className="text-4xl font-bold mb-16">
          Crypto Market
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {filteredCoins.length === 0 ? (
            <p className="text-gray-400">No coins found.</p>
          ) : (
            filteredCoins.map((coin) => (
              <CoinCard key={coin.id} coin={coin} />
            ))
          )}
        </div>
      </section>

    </main>
  );
}
