# Product Requirements Document (PRD)

## Product: Crypto Price Tracker

**Owner:** Pavneet Singh\
**Timeline:** February (4 Weeks)\
**Tech:** Next.js (App Router), CoinGecko API

------------------------------------------------------------------------

## 1. Problem Statement

Users interested in cryptocurrency need a clean and simple interface to:

-   View current crypto prices
-   Track 24h changes
-   Search coins quickly
-   See detailed price trends

Many platforms are cluttered or overwhelming.\
This product aims to provide a **minimal, fast, and developer-friendly
crypto dashboard**.

------------------------------------------------------------------------

## 2. Goals

### Primary Goals

-   Learn API consumption in Next.js
-   Handle loading and error states properly
-   Implement dynamic routing
-   Structure a clean production-ready project

### Success Criteria

-   API data loads reliably
-   No crashes on API failure
-   Smooth navigation between pages
-   Fully deployed on Vercel

------------------------------------------------------------------------

## 3. Target Users

-   Beginner crypto enthusiasts
-   Students learning markets
-   Developers learning API integration

------------------------------------------------------------------------

## 4. Core Features (MVP)

### 4.1 Home Page (`/`)

Displays a list of top cryptocurrencies with basic information.

**Data Shown** - Coin name - Symbol - Current price - 24h price change
(%) - Market cap

**Functional Requirements** - Fetch data from CoinGecko API - Display
loading spinner while fetching - Show error UI if API fails - Responsive
layout

------------------------------------------------------------------------

### 4.2 Search Functionality

Allows users to filter coins by name or symbol.

**Requirements** - Real-time filtering - Case-insensitive matching - No
page reload - Controlled input field

------------------------------------------------------------------------

### 4.3 Coin Detail Page (`/coin/[id]`)

Dynamic route showing detailed information about a selected coin.

**Data Shown** - Coin name - Current price - 24h change - Market cap -
Historical price chart (7 days)

**Functional Requirements** - Dynamic route using coin ID - Fetch data
based on URL param - Loading state - Error fallback - Chart
visualization

------------------------------------------------------------------------

## 5. Non‑Functional Requirements

-   Fast page load
-   Clean UI
-   Mobile responsive
-   API calls isolated in utility files
-   Proper error handling
-   Organized folder structure

------------------------------------------------------------------------

## 6. Technical Architecture

### Frontend

-   Next.js App Router
-   Server components for data fetching
-   Client components for search and interaction

### API

-   CoinGecko Public API
-   Async/await pattern
-   Try/catch error handling

### Folder Structure

    /app
      page.tsx
      /coin/[id]/page.tsx
      loading.tsx
      error.tsx

    /components
      CoinCard.tsx
      SearchBar.tsx
      PriceChart.tsx

    /lib
      api.ts

------------------------------------------------------------------------

## 7. User Flow

### Flow 1: View Market

1.  User opens homepage
2.  App fetches crypto list
3.  Loading spinner appears
4.  Data is displayed

### Flow 2: Search

1.  User types in search bar
2.  List filters instantly
3.  User selects a coin

### Flow 3: View Coin Details

1.  User navigates to `/coin/[id]`
2.  App fetches detailed coin data
3.  Chart and stats are displayed

------------------------------------------------------------------------

## 8. Error Handling Strategy

-   If API fails → Show error page
-   If coin not found → Show fallback UI
-   If network slow → Show loading skeleton
-   If response empty → Show "No data available"

------------------------------------------------------------------------

## 9. Metrics for Completion

Project is considered complete when:

-   Home page loads real data
-   Search works
-   Dynamic routing works
-   Chart renders correctly
-   Proper loading and error states exist
-   App deployed online

------------------------------------------------------------------------

## 10. Future Improvements

(Not part of February scope)

-   Watchlist / favorites
-   Dark mode toggle
-   Currency conversion
-   Pagination
-   Sorting options

------------------------------------------------------------------------

## 11. Execution Plan

### Week 1

-   Setup Next.js project
-   Create static UI
-   Implement API fetch
-   Implement loading state

### Week 2

-   Add search functionality
-   Improve UI
-   Implement error handling

### Week 3

-   Create dynamic route
-   Fetch individual coin data
-   Add price chart

### Week 4

-   Polish UI
-   Refactor code
-   Deploy to Vercel
-   Write README

------------------------------------------------------------------------

## Author

**Pavneet Singh**\
Computer Science Student building projects month-by-month to master
full‑stack development.
