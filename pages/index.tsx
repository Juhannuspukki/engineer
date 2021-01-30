import React from "react";
import Layout from "../components/Layout";

const Index = () => {
  return (
    <Layout>
      <div className={"container large-container"}>
        <div className={"padded-container"}>
          <h1>EVE: Echoes Tools</h1>
          <p>By FTL Industries</p>
          <h2>Research Calculator</h2>
          <p>
            Set your skills, facility and see the reverse engineering success
            chance for any ship in the universe. Also gives price estimates for
            both the materials and the end product.
          </p>
          <h2>Reverse Engineering ROI tool</h2>
          <p>
            See reverse engineering success chance, cost per run and end product
            price for every ship in the universe. You can also sort the list by
            maximum profit!{" "}
            <a href={"https://ftl-industries.now.sh/careers"} target={"_blank"}>
              Exclusively for FTL members.
            </a>
          </p>
          <h2>Cheap Blueprint Finder</h2>
          <p>
            Lists all non-ship blueprints by price. With this tool, you can
            pretty much get stuff for free (but that does not make the stuff
            valuable).{" "}
            <a href={"https://ftl-industries.now.sh/careers"} target={"_blank"}>
              Exclusively for FTL members.
            </a>
          </p>
          <h2>Trade Finder</h2>
          <p>
            Helps you to discover what items you should trade to maximize your
            profits.{" "}
            <a href={"https://ftl-industries.now.sh/careers"} target={"_blank"}>
              Exclusively for FTL members.
            </a>
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
