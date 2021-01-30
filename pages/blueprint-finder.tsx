import React from "react";
import { withIronSession } from "next-iron-session";
import ShipBlueprints from "../data/shipBlueprints";
import marketData from "../data/marketData";
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
];

const BlueprintFinder: React.FC<DataProps> = ({ filteredResults }) => {
  return (
    <Layout>
      <div className={"container large-container"}>
        <div className={"padded-container"}>
          <h1>Cheap Blueprint Finder</h1>
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
      res.setHeader("location", "/login?redirect=blueprint-finder");
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    const ships = ShipBlueprints.map((item) => item.name + " Blueprint");

    const filteredResults: MarketData[] = marketData.filter(
      (item: MarketData) =>
        item.name.includes("Blueprint") && !ships.includes(item.name)
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

export default BlueprintFinder;
