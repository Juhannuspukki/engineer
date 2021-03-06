import React from "react";
import { withIronSession } from "next-iron-session";
import marketData from "../data/marketData";
import itemIdentifiers from "../data/itemIdentifiers";
import SortableTable from "../components/sortableTable";
import Layout from "../components/Layout";

interface DataProps {
  filteredResults: MarketData[];
}

interface MarketData {
  item_id: string;
  name: string;
  lowest_sell: string;
  highest_buy: string;
}

const tableHeaders = [
  {
    name: "Name",
    id: "name",
  },
  {
    name: "Buy Ƶ",
    id: "buy",
  },
  {
    name: "Sell Ƶ",
    id: "sell",
  },
  {
    name: "Delta Ƶ",
    id: "delta",
  },
  {
    name: "Delta %",
    id: "delta%",
  },
];

const TradeFinder: React.FC<DataProps> = ({ filteredResults }) => {
  return (
    <Layout>
      <div className={"container large-container"}>
        <div className={"padded-container"}>
          <h1>Trade Finder</h1>
          {filteredResults !== null && (
            <SortableTable data={filteredResults} tableHeaders={tableHeaders} />
          )}
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps = withIronSession(
  async ({ req, res }) => {
    const user = req.session.get("user");

    if (user === undefined) {
      res.setHeader("location", "/login?redirect=trade-finder");
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    const idList = itemIdentifiers.map((item) => item.id.toString());

    const filteredResults = marketData.filter(
      (item: MarketData) =>
        idList.includes(item.item_id) && !item.name.includes("Civilian")
    );

    return {
      props: { filteredResults },
    };
  },
  {
    cookieName: "FTL",
    cookieOptions: {
      // @ts-ignore
      maxAge: 64800,
      secure: process.env.NODE_ENV === "production",
    },
    // @ts-ignore
    password: process.env.COOKIE,
  }
);

export default TradeFinder;
