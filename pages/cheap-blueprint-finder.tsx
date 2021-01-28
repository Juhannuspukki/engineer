import React, {useState, useEffect} from "react";
import ShipBlueprints from "../data/shipBlueprints"
import SortableTable from "../components/sortableTable";

interface MarketData {
    item_id: string,
    name: string,
    time: string,
    sell: string,
    buy: string,
    lowest_sell: string,
    highest_buy: string
}

const tableHeaders = [
    {
        name: "Name",
        id: "name"
    },
    {
        name: "Buy",
        id: "buy"
    },
    {
        name: "Sell",
        id: "sell"
    }
];

const formatOutput = (amount: number) => (
    amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
);

export default function Home() {

    const [marketData, setMarketData] = useState<MarketData[] | null>(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const ships = ShipBlueprints.map(item => item.name + " Blueprint");

    useEffect(() => {
        fetch(process.env.NODE_ENV === 'production' ? "https://ftl-tools.now.sh/api/hello" : "http://localhost:3000/api/hello")
            .then(res => res.json())
            .then(
                (result) => {
                    const filteredResults = result.filter((item: MarketData) => item.name.includes("Blueprint") && !ships.includes(item.name));
                    const sortedResults = filteredResults.sort((a: MarketData, b: MarketData) =>
                        parseFloat(a.highest_buy === "" ? "0" : a.highest_buy) - parseFloat(b.highest_buy === "" ? "0" : b.highest_buy));

                    setIsLoaded(true);
                    setMarketData(sortedResults);
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    setIsLoaded(true);
                    setError(error);
                }
            )
    }, []);

    return (
        <main className={"blue"}>
            <div className={"container large-container"}>
                <h1>Cheap Blueprint Finder</h1>
                {marketData !== null &&
                <SortableTable data={marketData} tableHeaders={tableHeaders}/>
                }
                {!isLoaded &&
                <p>Loading data.</p>
                }
                {error !== null &&
                <p>An error has occured when retrieving market data.</p>
                }
            </div>
        </main>
    )
}
