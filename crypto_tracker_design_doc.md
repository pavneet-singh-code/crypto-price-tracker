# Design Document

## Crypto Price Tracker (Next.js)

**Owner:** Pavneet Singh\
**Timeline:** February\
**Architecture:** Next.js + API Driven UI

------------------------------------------------------------------------

# 1. System Overview

The Crypto Price Tracker is a web application that allows users to:

-   Browse cryptocurrency market data
-   Search cryptocurrencies
-   View detailed price analytics
-   Explore price trends visually

The design is inspired by modern **crypto SaaS dashboards** similar to
the Coincore UI style.

Design principles:

-   Dark fintech style UI
-   Data‑driven dashboards
-   Minimal layout
-   Fast API loading

------------------------------------------------------------------------

# 2. High Level Architecture

User Browser\
↓\
Next.js Frontend\
↓\
API Layer (`lib/api.ts`)\
↓\
CoinGecko Public API

------------------------------------------------------------------------

# 3. Component Architecture

    App
     ├── Navbar
     ├── HeroSection
     ├── MarketTable
     ├── SearchBar
     ├── CoinCard
     ├── CoinDetailPage
     │     ├── PriceChart
     │     ├── MarketStats
     │     └── CoinInfo
     └── Footer

Each component is modular and reusable.

------------------------------------------------------------------------

# 4. Page Layout Design

## Landing Page `/`

### Hero Section

Headline:

Track Crypto Markets in Real Time

Subheading:

Monitor prices, analyze trends, and stay ahead of the market.

CTA:

View Market

Visual ideas:

-   Gradient background
-   Floating crypto chart
-   Animated numbers

------------------------------------------------------------------------

### Market Overview Section

Displays cryptocurrency table.

Columns:

  Coin   Price   24h Change   Market Cap
  ------ ------- ------------ ------------

Features:

-   Sortable columns
-   Color-coded price changes
-   Responsive layout

Green = price increase\
Red = price decrease

------------------------------------------------------------------------

### Features Section

Cards highlighting platform capabilities.

Examples:

-   Real-Time Market Data
-   Advanced Search
-   Interactive Charts

------------------------------------------------------------------------

### Call To Action Section

Text:

Start Tracking Crypto Today

Button:

Explore Market

------------------------------------------------------------------------

### Footer

Contains:

-   GitHub repo link
-   Author info
-   Project info

------------------------------------------------------------------------

# 5. Coin Detail Page

Route:

    /coin/[id]

Example:

    /coin/bitcoin

Layout:

    Coin Header
    Price Chart
    Market Statistics
    Additional Info

------------------------------------------------------------------------

## Coin Header

Displays:

Bitcoin (BTC)

Current Price\
24h Change

------------------------------------------------------------------------

## Price Chart

Shows historical prices.

Time ranges:

-   1 Day
-   7 Days
-   30 Days

Libraries:

-   Recharts
-   Chart.js

------------------------------------------------------------------------

## Market Statistics

Cards displaying:

-   Market Cap
-   Volume
-   Circulating Supply
-   All Time High

------------------------------------------------------------------------

# 6. API Design

All API calls handled in:

    /lib/api.ts

------------------------------------------------------------------------

## Fetch Market Data

Endpoint:

    https://api.coingecko.com/api/v3/coins/markets

Returns:

-   id
-   name
-   symbol
-   current_price
-   market_cap
-   price_change_percentage_24h

------------------------------------------------------------------------

## Fetch Coin Details

Endpoint:

    https://api.coingecko.com/api/v3/coins/{id}

Returns detailed information about a coin.

------------------------------------------------------------------------

## Fetch Price Chart

Endpoint:

    https://api.coingecko.com/api/v3/coins/{id}/market_chart

Returns historical price data.

------------------------------------------------------------------------

# 7. State Management

Using React hooks:

-   useState
-   useEffect

States used:

-   loading
-   error
-   coins
-   filteredCoins
-   selectedCoin

------------------------------------------------------------------------

# 8. Error Handling

Cases handled:

API failure

Message:

Unable to fetch crypto data. Please try again later.

Network delay

Show loading skeleton.

Empty results

Show:

No coins found.

------------------------------------------------------------------------

# 9. Responsive Design

Breakpoints:

Mobile: \< 640px\
Tablet: \< 1024px\
Desktop: \> 1024px

Mobile adjustments:

-   Table becomes stacked cards
-   Charts resized
-   Navbar collapses

------------------------------------------------------------------------

# 10. Performance Considerations

Optimizations:

-   Server-side data fetching
-   Cached API requests
-   Lazy loaded charts
-   Small bundle size

------------------------------------------------------------------------

# 11. Security Considerations

Even though authentication is not implemented yet:

-   Use environment variables
-   Avoid exposing keys
-   Handle API errors safely

------------------------------------------------------------------------

# 12. Deployment Architecture

Deployment platform:

Vercel

Deployment flow:

GitHub → Vercel → Production

Build commands:

    npm run build
    npm start

------------------------------------------------------------------------

# 13. Future Improvements

Possible extensions:

Authentication\
Watchlists\
Price alerts\
Portfolio tracking

------------------------------------------------------------------------

# 14. Development Milestones

Week 1

-   Setup Next.js
-   Build hero UI
-   Connect API

Week 2

-   Market table
-   Search functionality

Week 3

-   Coin detail page
-   Charts

Week 4

-   UI polish
-   Deployment
-   Documentation

------------------------------------------------------------------------

# 15. Success Criteria

Project is successful if:

-   Market data loads quickly
-   Search works smoothly
-   Charts render correctly
-   UI resembles modern crypto SaaS dashboard
-   App deployed successfully

------------------------------------------------------------------------

Author: Pavneet Singh
