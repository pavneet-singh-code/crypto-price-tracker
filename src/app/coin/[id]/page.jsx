"use client";

import React, { useState, useEffect } from 'react';
import { 
  ArrowLeft, 
  TrendingUp, 
  TrendingDown, 
  Globe, 
  Twitter, 
  Activity, 
  BarChart3,
  Calendar
} from 'lucide-react';
import { getCoinDetails } from "@/lib/api";
import Link from "next/link";
import { useParams } from "next/navigation";
import PriceChart from "@/components/PriceChart";


const StatCard = ({ label, value, icon: Icon, isEmerald = false }) => (
  <div className="bg-zinc-950 border border-white/5 p-6 rounded-4xl relative overflow-hidden group hover:border-emerald-500/30 transition-all">
    <div className="absolute -top-10 -right-10 w-24 h-24 bg-emerald-500/5 blur-2xl rounded-full group-hover:bg-emerald-500/10 transition-colors" />
    <div className="relative z-10">
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 rounded-lg ${isEmerald ? 'bg-emerald-500/10 text-emerald-500' : 'bg-zinc-900 text-zinc-400'}`}>
          <Icon size={18} />
        </div>
        <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.2em]">{label}</span>
      </div>
      <p className="text-2xl font-black text-white tracking-tight">{value}</p>
    </div>
  </div>
);

export default function CoinDetailsPage() {
  const [coin, setCoin] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const params = useParams();
  const coinId = params?.id; 

  useEffect(() => {
    if (!coinId) return;

    const fetchCoinData = async () => {
      try {
        setLoading(true);

        const data = await getCoinDetails(coinId)

        setCoin(data);

      } catch (err) {
        setError(err.message);

      } finally {
        setLoading(false);
      }
    };

    fetchCoinData();
  }, [coinId]);

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-12 h-12 border-4 border-emerald-500/20 border-t-emerald-500 rounded-full animate-spin" />
    </div>
  );

  if (error || !coin) return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-center">
      <h1 className="text-4xl font-black text-white mb-4">Oops!</h1>
      <p className="text-zinc-500 mb-8 max-w-md">We couldn't find the details for this coin.</p>
      <Link href="/" className="bg-emerald-500 text-black px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs">Go Back Home</Link>
    </div>
  );

  const mData = coin.market_data;
  const isPositive = mData.price_change_percentage_24h >= 0;
  const sparklineData = mData.sparkline_7d?.price || [];

  const formatCurrency = (val) => 
    new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD', minimumFractionDigits: val < 1 ? 4 : 2 }).format(val);

  return (
    <main className="bg-black min-h-screen text-white pb-20 selection:bg-emerald-500/30">
      {/* Background Glows */}
      <div className={`fixed top-0 right-0 w-150 h-150 blur-[150px] rounded-full pointer-events-none opacity-20 -z-10 ${isPositive ? 'bg-emerald-500/40' : 'bg-red-500/40'}`} />
      
      {/* Header Navigation */}
      <nav className="max-w-7xl mx-auto px-6 py-8">
        <Link href="/" className="inline-flex items-center gap-2 text-zinc-500 hover:text-emerald-500 transition-colors group">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-xs font-black uppercase tracking-widest">Back to Markets</span>
        </Link>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="flex items-center gap-6">
            <div className={`w-24 h-24 p-1 rounded-4xl bg-linear-to-tr shadow-2xl ${isPositive ? 'from-emerald-500/40 to-transparent shadow-emerald-500/20' : 'from-red-500/40 to-transparent shadow-red-500/20'}`}>
              <img src={coin.image.large} alt={coin.name} className="w-full h-full rounded-[1.8rem] object-cover" />
            </div>
            <div>
              <div className="flex items-center gap-3 mb-1">
                <h1 className="text-5xl md:text-6xl font-black tracking-tighter">{coin.name}</h1>
                <span className="bg-zinc-900 text-zinc-500 px-3 py-1 rounded-lg text-xs font-black uppercase tracking-widest">{coin.symbol}</span>
              </div>
              <p className="text-zinc-500 font-bold uppercase tracking-[0.2em] text-xs">Global Rank #{coin.market_cap_rank}</p>
            </div>
          </div>

          <div className="text-left md:text-right">
            <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.3em] mb-2">Current Price</p>
            <div className="flex items-center md:justify-end gap-4">
              <span className="text-5xl font-black tracking-tighter text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.1)]">
                {formatCurrency(mData.current_price.usd)}
              </span>
              <div className={`flex items-center gap-1 font-black px-3 py-1.5 rounded-full text-sm ${isPositive ? 'bg-emerald-500/10 text-emerald-400' : 'bg-red-500/10 text-red-400'}`}>
                {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
                {mData.price_change_percentage_24h.toFixed(2)}%
              </div>
            </div>
          </div>
        </header>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <StatCard label="Market Cap" value={formatCurrency(mData.market_cap.usd)} icon={BarChart3} isEmerald />
          <StatCard label="Total Volume" value={formatCurrency(mData.total_volume.usd)} icon={Activity} />
          <StatCard label="24h High" value={formatCurrency(mData.high_24h.usd)} icon={TrendingUp} />
          <StatCard label="24h Low" value={formatCurrency(mData.low_24h.usd)} icon={TrendingDown} />
        </div>

        {/* Graph Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <section className="lg:col-span-2 bg-zinc-950/40 border border-white/5 p-8 rounded-[3rem] relative overflow-hidden">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-sm font-black uppercase tracking-[0.3em] text-emerald-500 flex items-center gap-2">
                <Calendar size={16} /> Price History (7 Days)
              </h2>
              <div className="text-zinc-500 text-[10px] font-bold uppercase tracking-widest">Live Feed</div>
            </div>
            
            <PriceChart data={sparklineData} isPositive={isPositive} />
            
            <div className="flex justify-between mt-8 text-zinc-600 text-[10px] font-black uppercase tracking-widest">
              <span>7 Days Ago</span>
              <span>Today</span>
            </div>
          </section>

          {/* Sidebar Info */}
          <div className="space-y-6">
            <section className="bg-zinc-950 border border-white/5 p-8 rounded-[2.5rem]">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-8">Supply Metrics</h3>
              <div className="space-y-6">
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-sm font-bold">Circulating</span>
                  <span className="text-white font-black">{mData.circulating_supply.toLocaleString()}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-sm font-bold">ATH</span>
                  <span className="text-emerald-500 font-black">{formatCurrency(mData.ath.usd)}</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-zinc-500 text-sm font-bold">ATL</span>
                  <span className="text-red-500 font-black">{formatCurrency(mData.atl.usd)}</span>
                </div>
              </div>
            </section>

            <section className="bg-zinc-950 border border-white/5 p-8 rounded-[2.5rem]">
              <h3 className="text-xs font-black uppercase tracking-[0.3em] text-zinc-600 mb-6">Links</h3>
              <div className="grid grid-cols-1 gap-3">
                <a href={coin.links?.homepage?.[0]} target="_blank" className="flex items-center justify-between px-6 bg-zinc-900 hover:bg-emerald-500 hover:text-black py-4 rounded-2xl transition-all text-xs font-black uppercase tracking-widest border border-white/5 group">
                  <div className="flex items-center gap-3"><Globe size={14} /> Website</div>
                  <ArrowLeft size={14} className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
                <a href={`https://twitter.com/${coin.links.twitter_screen_name}`} target="_blank" className="flex items-center justify-between px-6 bg-zinc-900 hover:bg-emerald-500 hover:text-black py-4 rounded-2xl transition-all text-xs font-black uppercase tracking-widest border border-white/5 group">
                  <div className="flex items-center gap-3"><Twitter size={14} /> Twitter</div>
                  <ArrowLeft size={14} className="rotate-180 opacity-0 group-hover:opacity-100 transition-all" />
                </a>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  );
}