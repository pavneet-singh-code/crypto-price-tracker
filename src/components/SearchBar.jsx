"use client";

import { useState } from "react";
import { Search } from "lucide-react";

export default function SearchBar({ onSearch }) {
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (event) => {
    const value = event.target.value;

    setSearchTerm(value);

    if (onSearch) {
      onSearch(value);
    }
  };

  const handleEnterKey = (event) => {
    if (event.key === "Enter") {
        event.preventDefault();

        document.querySelector("#market")?.scrollIntoView({ behavior: "smooth" });
    }
  }

  return (
    <div className="relative w-full group">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-zinc-500 group-focus-within:text-emerald-500 transition-colors" />

      <input
        type="text"
        placeholder="Search assets..."
        value={searchTerm}
        onChange={handleInputChange}
        onKeyDown={handleEnterKey}
        className="w-full bg-zinc-900 border border-emerald-500/10 focus:border-emerald-500/50 rounded-full py-2 pl-10 pr-4 text-xs text-white outline-none transition-all"
      />
    </div>
  );
}