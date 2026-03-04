const BASE_URL = "https://api.coingecko.com/api/v3";

async function fetchAPI(endpoint) {
    const url = BASE_URL + endpoint;

    const res = await fetch(url);

    if (!res.ok) {
        throw new Error("Fetch Failed");
    }

    const data = await res.json();

    return data;
}

async function getTopCoins() {
    const data = await fetchAPI("/coins/markets?vs_currency=usd");

    return data;
}

async function getCoinDetails(id) {
    const data = await fetchAPI(`/coins/${id}`);

    return data;
}

async function getCoinChart(id) {
    const data = await fetchAPI(
        `/coins/${id}/market_chart?vs_currency=usd&days=7`,
    );

    return data;
}

export { getTopCoins, getCoinDetails, getCoinChart };
