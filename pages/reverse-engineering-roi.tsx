import React from "react";
import { withIronSession } from "next-iron-session";
import SortableTable from "../components/sortableTable";
import Layout from "../components/Layout";
import reverseEngineeringROI from "../data/reverseEngineeringROI";

interface DataProps {
  ships: Ship[];
}

interface Ship {
  name: string;
  successRate: string;
  lowest_sell: string;
  highest_buy: string;
}

const tableHeaders = [
  {
    name: "Name",
    id: "name",
  },
  {
    name: "Chance %",
    id: "successRate",
  },
  {
    name: "Cost Per Run Ƶ",
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

const ReverseEngineeringRoi: React.FC<DataProps> = ({ ships }) => {
  return (
    <Layout>
      <div className={"container large-container"}>
        <div className={"padded-container"}>
          <h1>Reverse Engineering ROI</h1>
          {ships !== undefined && (
            <SortableTable data={ships} tableHeaders={tableHeaders} />
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
      res.setHeader("location", "/login?redirect=reverse-engineering-roi");
      res.statusCode = 302;
      res.end();
      return { props: {} };
    }

    const ships = reverseEngineeringROI;

    return {
      props: { ships },
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

export default ReverseEngineeringRoi;
