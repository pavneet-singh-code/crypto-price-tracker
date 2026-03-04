# Crypto Price Tracker --- Development TODO

This document defines the **task execution order** for building the
Crypto Price Tracker project. Follow tasks sequentially to avoid
confusion and incomplete features.

------------------------------------------------------------------------

# Phase 0 --- Project Setup

## Task 1 --- Create Project

Initialize Next.js app.

``` bash
npx create-next-app@latest crypto-tracker
```

Recommended options:

-   App Router
-   TypeScript (optional but recommended)
-   Tailwind CSS

------------------------------------------------------------------------

## Task 2 --- Clean Boilerplate

Remove unnecessary default files.

Delete:

    /app/page.module.css

Create base structure:

    /app
    /components
    /lib
    /types

Commit:

    chore: initialize nextjs project structure

------------------------------------------------------------------------

## Task 3 --- Install Dependencies

Install libraries needed for charts and API calls.

``` bash
npm install axios recharts
```

Optional:

``` bash
npm install clsx
```

Commit:

    chore: install project dependencies

------------------------------------------------------------------------

# Phase 1 --- API Layer

## Task 4 --- Create API Utility

Create:

    /lib/api.ts

Functions:

    getTopCoins()
    getCoinDetails(id)
    getCoinChart(id)

These functions should call the CoinGecko API.

Commit:

    feat: add coingecko api utility functions

------------------------------------------------------------------------

# Phase 2 --- Layout & Base UI

## Task 5 --- Create Navbar

File:

    /components/Navbar.tsx

Features:

-   Project logo
-   Simple navigation

Commit:

    feat: add navbar component

------------------------------------------------------------------------

## Task 6 --- Create Hero Section

File:

    /components/HeroSection.tsx

Content:

Headline:

Track Crypto Markets in Real Time

Subheading:

Monitor prices and analyze trends.

Button:

View Market

Commit:

    feat: add landing hero section

------------------------------------------------------------------------

## Task 7 --- Setup Global Layout

Edit:

    /app/layout.tsx

Include:

-   Navbar
-   Footer placeholder

Commit:

    feat: setup application layout

------------------------------------------------------------------------

# Phase 3 --- Market Page

## Task 8 --- Fetch Market Data

Edit:

    /app/page.tsx

Call:

    getTopCoins()

First render raw data to verify API works.

Commit:

    feat: fetch market data from api

------------------------------------------------------------------------

## Task 9 --- Create CoinCard Component

File:

    /components/CoinCard.tsx

Display:

-   Coin name
-   Symbol
-   Current price
-   24h change
-   Market cap

Commit:

    feat: add coin card component

------------------------------------------------------------------------

## Task 10 --- Display Coins List

Render the market list using:

    coins.map()

Commit:

    feat: render crypto market list

------------------------------------------------------------------------

# Phase 4 --- Search Feature

## Task 11 --- Create SearchBar Component

File:

    /components/SearchBar.tsx

Features:

-   Controlled input
-   Search by coin name

Commit:

    feat: add crypto search functionality

------------------------------------------------------------------------

## Task 12 --- Filter Coins

Add state:

    filteredCoins

Filtering logic:

    coins.filter()

Commit:

    feat: implement coin filtering

------------------------------------------------------------------------

# Phase 5 --- Coin Detail Page

## Task 13 --- Dynamic Route

Create:

    /app/coin/[id]/page.tsx

Test route:

    /coin/bitcoin

Commit:

    feat: add dynamic coin route

------------------------------------------------------------------------

## Task 14 --- Fetch Coin Details

Use:

    getCoinDetails(id)

Display:

-   Coin name
-   Symbol
-   Price

Commit:

    feat: fetch and display coin details

------------------------------------------------------------------------

# Phase 6 --- Price Charts

## Task 15 --- Create PriceChart Component

File:

    /components/PriceChart.tsx

Library:

    Recharts

Data from:

    getCoinChart(id)

Commit:

    feat: add price chart visualization

------------------------------------------------------------------------

# Phase 7 --- UX Improvements

## Task 16 --- Loading State

Create:

    loading.tsx

Display skeleton or spinner.

Commit:

    feat: add loading states

------------------------------------------------------------------------

## Task 17 --- Error Handling

Create:

    error.tsx

Display friendly error message.

Commit:

    feat: implement error boundary

------------------------------------------------------------------------

# Phase 8 --- Styling

## Task 18 --- Improve UI

Add:

-   Dark theme
-   Card layout
-   Hover effects

Commit:

    style: improve ui and layout

------------------------------------------------------------------------

# Phase 9 --- Final Polish

## Task 19 --- Responsive Design

Fix layouts for:

-   Mobile
-   Tablet

Commit:

    style: make application responsive

------------------------------------------------------------------------

## Task 20 --- Cleanup Code

Tasks:

-   Remove console logs
-   Refactor components
-   Add types

Commit:

    refactor: cleanup and optimize code

------------------------------------------------------------------------

# Phase 10 --- Deployment

## Task 21 --- Deploy

Push project to GitHub.

Deploy using **Vercel**.

Commit:

    chore: deploy application to vercel

------------------------------------------------------------------------

# Final Task --- Documentation

Add documentation files:

    README.md
    PRD.md
    DESIGN.md
    TODO.md

Commit:

    docs: add project documentation

------------------------------------------------------------------------

# Final Project Structure

    crypto-tracker
    │
    ├── README.md
    ├── PRD.md
    ├── DESIGN.md
    ├── TODO.md
    │
    ├── app
    │   ├── page.tsx
    │   └── coin/[id]/page.tsx
    │
    ├── components
    │   ├── Navbar.tsx
    │   ├── HeroSection.tsx
    │   ├── CoinCard.tsx
    │   ├── SearchBar.tsx
    │   └── PriceChart.tsx
    │
    └── lib
        └── api.ts
