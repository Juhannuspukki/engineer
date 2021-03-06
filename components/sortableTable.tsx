import React, { useState, useMemo } from "react";

interface MarketData {
  item_id: string;
  name: string;
  lowest_sell: string;
  highest_buy: string;
}

interface Ship {
  name: string;
  successRate: string;
  lowest_sell: string;
  highest_buy: string;
}

interface TableHeader {
  name: string;
  id: string;
}

interface ShipProps {
  data: Ship[];
  tableHeaders: TableHeader[];
}

interface MarketProps {
  data: MarketData[];
  tableHeaders: TableHeader[];
}

const formatOutput = (amount: number) =>
  amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const fixCSVstring = (amount: string) =>
  // Replace empty values with 0, else convert value to float
  amount === "" ? 0 : parseFloat(amount);

const calculateProfitPercentage = (salesPrice: string, buyPrice: string) =>
  (fixCSVstring(salesPrice) / fixCSVstring(buyPrice) - 1) * 100;

const SortableTable: React.FC<MarketProps | ShipProps> = ({
  data,
  tableHeaders,
}) => {
  const [sortedField, setSortedField] = useState<string>("delta%");
  const [directionIsAscending, setDirectionIsAscending] = useState<boolean>(
    true
  );

  const sortedData = useMemo(() => {
    const sortedData = [...data];
    if (data !== null) {
      sortedData.sort((a, b) => {
        if (sortedField === "name") {
          if (a.name < b.name) return directionIsAscending ? -1 : 1;
          else if (a.name > b.name) return directionIsAscending ? 1 : -1;
        } else if (sortedField === "buy") {
          const result =
            fixCSVstring(a.highest_buy) - fixCSVstring(b.highest_buy);
          return directionIsAscending ? result : result * -1;
        } else if (
          sortedField === "successRate" &&
          "successRate" in a &&
          "successRate" in b
        ) {
          const result =
            fixCSVstring(a.successRate) - fixCSVstring(b.successRate);
          return directionIsAscending ? result : result * -1;
        } else if (sortedField === "sell") {
          const result =
            fixCSVstring(a.lowest_sell) - fixCSVstring(b.lowest_sell);
          return directionIsAscending ? result : result * -1;
        } else if (sortedField === "delta") {
          const result =
            fixCSVstring(a.lowest_sell) -
            fixCSVstring(a.highest_buy) -
            (fixCSVstring(b.lowest_sell) - fixCSVstring(b.highest_buy));
          return directionIsAscending ? result : result * -1;
        } else if (sortedField === "delta%") {
          const result =
            calculateProfitPercentage(a.highest_buy, a.lowest_sell) -
            calculateProfitPercentage(b.highest_buy, b.lowest_sell);
          return directionIsAscending ? result : result * -1;
        }
        return 0;
      });
    }
    return sortedData;
  }, [data, sortedField, directionIsAscending]);

  return (
    <div className={"table-container"}>
      <table>
        <thead>
          <tr>
            {tableHeaders.map((item: TableHeader) => (
              <th
                key={item.id}
                onClick={() => {
                  sortedField === item.id &&
                    setDirectionIsAscending(!directionIsAscending);
                  setSortedField(item.id);
                }}
              >
                {item.name}{" "}
                {sortedField === item.id && (directionIsAscending ? "↓" : "↑")}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data !== null &&
            sortedData.map((item: MarketData | Ship) => (
              <tr key={item.name}>
                {tableHeaders.some((element) => element.id === "name") && (
                  <td>{item.name}</td>
                )}
                {tableHeaders.some(
                  (element) => element.id === "successRate"
                ) && (
                  <td>
                    {"successRate" in item &&
                      formatOutput(fixCSVstring(item.successRate))}
                  </td>
                )}
                {tableHeaders.some((element) => element.id === "buy") && (
                  <td>{formatOutput(fixCSVstring(item.highest_buy))}</td>
                )}
                {tableHeaders.some((element) => element.id === "sell") && (
                  <td>{formatOutput(fixCSVstring(item.lowest_sell))}</td>
                )}
                {tableHeaders.some((element) => element.id === "delta") && (
                  <td>
                    {formatOutput(
                      fixCSVstring(item.lowest_sell) -
                        fixCSVstring(item.highest_buy)
                    )}
                  </td>
                )}
                {tableHeaders.some((element) => element.id === "delta%") && (
                  <td>
                    {formatOutput(
                      calculateProfitPercentage(
                        item.lowest_sell,
                        item.highest_buy
                      )
                    )}{" "}
                    %
                  </td>
                )}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default SortableTable;
