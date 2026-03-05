import { TrendingUp, TrendingDown } from "lucide-react";

/**
 * CoinCard Component
 *
 * Displays individual cryptocurrency data following the dashboard's
 * dark theme and emerald accent aesthetic.
 *
 * @param {Object} coin - Data object from CoinGecko API
 */

const CoinCard = ({ coin }) => {
  if (!coin) return null;

  const {
    name,
    symbol,
    image,
    current_price,
    price_change_percentage_24h,
    market_cap,
  } = coin;

  const change = price_change_percentage_24h ?? 0;
  const isPositive = change >= 0;

  // Format currency
  const formatUSD = (val) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: val < 1 ? 4 : 2,
    }).format(val ?? 0);

  // Format market cap
  const formatMarketCap = (val) =>
    new Intl.NumberFormat("en-US").format(val ?? 0);

  return (
    <div className="group relative bg-zinc-950 border border-emerald-500/10 hover:border-emerald-500/40 p-6 rounded-4xl transition-all duration-500 hover:shadow-[0_0_40px_rgba(16,185,129,0.1)] flex flex-col gap-6 overflow-hidden">

      {/* Background Glow */}
      <div className="absolute -top-24 -right-24 w-48 h-48 bg-emerald-500/5 blur-[60px] rounded-full group-hover:bg-emerald-500/10 transition-colors pointer-events-none" />

      {/* Coin Header */}
      <div className="flex items-center justify-between relative z-10">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 p-0.5 rounded-full bg-linear-to-tr from-emerald-500/20 to-transparent">
            <img
              src={image}
              alt={name}
              className="w-full h-full rounded-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
              loading="lazy"
            />
          </div>

          <div>
            <h3 className="text-white font-black text-lg leading-tight">
              {name}
            </h3>

            <span className="text-zinc-500 text-xs font-black uppercase tracking-widest">
              {symbol?.toUpperCase()}
            </span>
          </div>
        </div>
      </div>

      {/* Current Price */}
      <div className="space-y-1 relative z-10">
        <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
          Live Price
        </p>

        <div className="flex items-baseline gap-2">
          <span className="text-3xl font-black text-white tracking-tighter">
            {formatUSD(current_price)}
          </span>
        </div>
      </div>

      {/* 24h Change & Market Cap */}
      <div className="pt-4 border-t border-white/5 flex items-center justify-between relative z-10">

        {/* 24h Change */}
        <div className="flex flex-col gap-1">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
            24H Change
          </p>

          <div
            className={`flex items-center gap-1 font-black text-sm ${
              isPositive ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {Math.abs(change).toFixed(2)}%
          </div>
        </div>

        {/* Market Cap */}
        <div className="flex flex-col gap-1 text-right">
          <p className="text-zinc-600 text-[10px] font-black uppercase tracking-[0.2em]">
            Mkt Cap
          </p>

          <p className="text-sm font-bold text-zinc-300">
            <span className="text-zinc-500 mr-1">$</span>
            {formatMarketCap(market_cap)}
          </p>
        </div>
      </div>

      {/* Bottom Accent */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-emerald-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
    </div>
  );
};

export default CoinCard;