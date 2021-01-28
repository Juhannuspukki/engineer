import React, {useState, useEffect, useMemo} from "react";
import itemIdentifiers from "../data/itemIdentifiers"
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
    },
    {
        name: "Delta",
        id: "delta"
    },
    {
        name: "Delta %",
        id: "delta%"
    },
];

export default function Home() {

    const [marketData, setMarketData] = useState<MarketData[] | null>(null);

    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    const idList = itemIdentifiers.map(item => item.id.toString());

    useEffect(() => {
        fetch(process.env.NODE_ENV === 'production' ? "https://ftl-tools.now.sh/api/hello" : "http://localhost:3000/api/hello")
            .then(res => res.json())
            .then(
                (result) => {
                    const filteredResults = result.filter((item: MarketData) => idList.includes(item.item_id) && !item.name.includes("Civilian"));

                    setIsLoaded(true);
                    setMarketData(filteredResults);
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
                <h1>Trade Finder</h1>
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
