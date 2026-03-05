import Link from "next/link";
import { TrendingUp, TrendingDown } from "lucide-react";

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

  const formatUSD = (val) =>
    new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
      minimumFractionDigits: val < 1 ? 4 : 2,
    }).format(val ?? 0);

  const formatMarketCap = (val) =>
    new Intl.NumberFormat("en-US", {
      notation: "compact",
      compactDisplay: "short",
    }).format(val ?? 0);

  return (
    <Link href={`/coin/${coin.id}`}>
    <div
      className={`group relative bg-zinc-950 border p-8 rounded-3xl transition-all duration-500 flex flex-col gap-6 overflow-hidden ${
        isPositive
          ? "border-emerald-500/20 hover:border-emerald-500/60 hover:shadow-[0_0_60px_rgba(16,185,129,0.25)]"
          : "border-red-500/20 hover:border-red-500/60 hover:shadow-[0_0_60px_rgba(239,68,68,0.25)]"
      }`}
    >
      {/* Glow */}
      <div
        className={`absolute -top-20 -right-20 w-72 h-72 blur-[100px] rounded-full pointer-events-none opacity-50 group-hover:opacity-80 transition ${
          isPositive ? "bg-emerald-500/30" : "bg-red-500/30"
        }`}
      />

      {/* Header */}
      <div className="flex items-center gap-4 relative z-10">
        <div className="w-12 h-12 rounded-full p-0.5 bg-linear-to-tr from-emerald-500/40 to-transparent">
          <img
            src={image}
            alt={name}
            className="w-full h-full rounded-full object-cover"
          />
        </div>

        <div>
          <h3 className="text-white font-bold text-lg">{name}</h3>
          <p className="text-zinc-500 text-xs uppercase tracking-wider">
            {symbol?.toUpperCase()}
          </p>
        </div>
      </div>

      {/* Price */}
      <div className="relative z-10">
        <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">
          Live Price
        </p>

        <p className="text-3xl font-bold text-white">
          {formatUSD(current_price)}
        </p>
      </div>

      {/* Stats */}
      <div className="flex justify-between items-center border-t border-white/10 pt-4 relative z-10">
        <div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            24H
          </p>

          <div
            className={`flex items-center gap-1 font-semibold ${
              isPositive ? "text-emerald-400" : "text-red-400"
            }`}
          >
            {isPositive ? <TrendingUp size={16} /> : <TrendingDown size={16} />}
            {Math.abs(change).toFixed(2)}%
          </div>
        </div>

        <div className="text-right">
          <p className="text-zinc-500 text-xs uppercase tracking-widest">
            Market Cap
          </p>

          <p className="text-zinc-300 font-semibold">
            ${formatMarketCap(market_cap)}
          </p>
        </div>
      </div>
    </div>
    </Link>
  );
};

export default CoinCard;