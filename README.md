# 📊 Crypto Price Tracker

A modern **cryptocurrency tracking dashboard** built with **Next.js**
that allows users to explore real‑time crypto market data, search coins,
and view detailed price trends.

This project focuses on learning **API integration, async data handling,
dynamic routing, and clean project structure** while building a
practical web application.

---

# 🚀 Features

### 🔎 Browse Cryptocurrencies

- View top cryptocurrencies
- See **current price**
- Check **24h price change**
- View **market capitalization**

### 🔍 Search Functionality

- Search coins by **name or symbol**
- Instant filtering
- Case‑insensitive matching
- No page reload

### 📈 Coin Detail Page

Each coin has its own page displaying:

- Coin name and symbol
- Current price
- Market statistics
- 7‑day historical price chart

### ⚡ Loading & Error Handling

- Loading indicators while fetching data
- Graceful UI if API fails
- Prevents crashes during network issues

---

# 🧠 Learning Goals

This project is intentionally designed to practice:

- API consumption
- Async/await data fetching
- Error handling
- Next.js App Router
- Dynamic routing
- Component‑based architecture

---

# 🛠 Tech Stack

**Framework** - Next.js (App Router)

**Language** - JavaScript / TypeScript

**Styling** - Tailwind CSS or CSS Modules

**API** - CoinGecko Public API

**Charts** - Recharts / Chart.js

**Deployment** - Vercel

---

# 📂 Project Structure

    /app
      page.tsx                → Home page listing cryptocurrencies
      /coin/[id]/page.tsx     → Dynamic route for individual coin

      loading.tsx             → Global loading UI
      error.tsx               → Global error UI

    /components
      CoinCard.tsx            → Displays individual coin data
      SearchBar.tsx           → Handles coin search
      PriceChart.tsx          → Displays price history

    /lib
      api.ts                  → API fetching utilities

---

# 🧭 Application Routes

## `/`

**Home Page**

Displays a list of cryptocurrencies.

Shows: - Coin name - Symbol - Current price - 24h change - Market cap

Users can search coins and navigate to detailed views.

---

## `/coin/[id]`

**Coin Detail Page**

Dynamic page displaying information for a specific coin.

Shows: - Coin name - Current price - Market stats - Historical price
chart

Data is fetched using the coin ID from the URL.

---

# ⚙️ API Integration

This project uses the **CoinGecko API** to fetch cryptocurrency data.

Top coins endpoint:

    https://api.coingecko.com/api/v3/coins/markets

Coin details endpoint:

    https://api.coingecko.com/api/v3/coins/{id}

Historical data endpoint:

    https://api.coingecko.com/api/v3/coins/{id}/market_chart

API logic should be centralized in `/lib/api.ts`.

---

# ⏳ Loading and Error Handling

Handled using Next.js features:

- `loading.tsx` for loading UI
- `error.tsx` for error boundaries
- try/catch blocks for API requests

This ensures a smooth user experience even when the API fails.

---

# 🌱 Environment Variables

Create a `.env.local` file:

    NEXT_PUBLIC_API_BASE_URL=https://api.coingecko.com/api/v3

---

# 📸 Screenshots

Add screenshots after building the UI:

- Home page
- Search results
- Coin detail page

---

# 🔮 Future Improvements

Potential improvements:

- Dark mode
- Favorite coins/watchlist
- Pagination
- Currency conversion
- Sorting by market cap or price

---

# 🧪 Running the Project Locally

Install dependencies:

    npm install

Run development server:

    npm run dev

Open:

    http://localhost:3000

---

# 🌐 Deployment

This project can be deployed easily using **Vercel**.

Steps:

1.  Push project to GitHub
2.  Import repository into Vercel
3.  Deploy

---

# 👨‍💻 Author

**Pavneet Singh**\
Computer Science Student

Building projects month‑by‑month to master **full‑stack development**.

---

⭐ If you like this project, consider giving it a star!
