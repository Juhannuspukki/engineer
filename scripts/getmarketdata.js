const fs = require("fs");
const fetch = require("node-fetch");
const papa = require("papaparse");

const main = async () => {
  const url = "https://api.eve-echoes-market.com/market-stats/stats.csv";

  const response = await fetch(url);

  const options = { header: true };
  const csv = await response.text();
  const parsedCSV = papa.parse(csv, options).data;

  // Last entry appears to be bogus, remove it
  parsedCSV.pop();

  // Remove unneeded attributes
  const marketData = parsedCSV.map(
    ({ time, sell, buy, ...keepAttrs }) => keepAttrs
  );

  // Content for attaching prices to ship blueprint
  const findPrice = (item, whatPrice) => {
    const result = marketData.find((element) => element.name === item);
    if (result === undefined) {
      return 0;
    }
    return result[whatPrice];
  };

  const rawShipData = fs.readFileSync("./data/shipBlueprints.ts", "utf8");

  // Dangerous!
  const jsonString = eval(
    "[" + rawShipData.split("[").pop().split("]")[0] + "]"
  );

  const ships = jsonString.map((item) => {
    const datacoreOnePrice = findPrice(
      "Datacore - " + item.datacoreOneType,
      "highest_buy"
    );
    const datacoreTwoPrice = findPrice(
      "Datacore - " + item.datacoreTwoType,
      "highest_buy"
    );
    const debrisPrice = findPrice(item.debrisType, "highest_buy");

    const blueprintPrice = findPrice(item.name + " Blueprint", "lowest_sell");

    const successRate = item.successRate * 2 > 100 ? 100 : item.successRate * 2;

    return {
      name: item.name + " Blueprint",
      successRate: successRate.toString(),
      highest_buy: (
        (1 / (successRate * 0.01)) *
        (item.iskCost +
          datacoreOnePrice * item.datacoreOneCount +
          datacoreTwoPrice * item.datacoreTwoCount +
          debrisPrice * item.debrisCount)
      ).toString(),
      lowest_sell: blueprintPrice.toString(),
    };
  });

  // Write reverse engineering data to config file
  fs.writeFileSync(
    "./data/reverseEngineeringROI.ts",
    `const reverseEngineeringROI =\n    ${JSON.stringify(
      ships
    )};\n\nexport default reverseEngineeringROI;`
  );

  // Write market data to a file
  fs.writeFileSync(
    "./data/marketData.ts",
    `const marketData =\n    ${JSON.stringify(
      marketData
    )};\n\nexport default marketData;`
  );

  return response;
};

main().catch((error) => {
  console.error("Error:", error);
  process.exit(1);
});
