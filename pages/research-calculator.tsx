import React, { useState, useEffect } from "react";
import SkillDropdown from "../components/skillDropdown";
import Fuse from "fuse.js";
import ShipBlueprints from "../data/shipBlueprints";
import marketData from "../data/marketData";
import Layout from "../components/Layout";

interface MarketData {
  item_id: string;
  name: string;
  lowest_sell: string;
  highest_buy: string;
}

interface Ship {
  name: string;
  class: string;
  techLevel: string;
  iskCost: number;
  timeCost: number;
  successRate: number;
  debrisType: string;
  debrisCount: number;
  datacoreOneCount: number;
  datacoreOneType: string;
  datacoreTwoCount: number;
  datacoreTwoType: string;
}

const basicSkillMultiplier: { [index: number]: number } = {
  0: 0,
  1: 0,
  2: 12,
  3: 24,
  4: 36,
  5: 50,
};

const advancedSkillMultiplier: { [index: number]: number } = {
  0: 0,
  1: 0,
  2: 0,
  3: 10,
  4: 20,
  5: 30,
};

const expertSkillMultiplier: { [index: number]: number } = {
  0: 0,
  1: 0,
  2: 0,
  3: 6,
  4: 12,
  5: 20,
};

const stringToNumber = (amount: string, max?: number) => {
  // Remove all characters that are not numbers or whitespaces
  amount = amount.replace(/[^\d\s.]/g, "");
  // Assume value is zero if string is empty
  if (amount === "") {
    return 0;
  } else {
    // Create a number from string
    const number = parseFloat(amount.replace(/ /g, ""));
    // If max value ise defined, return number no higher than max value
    return max !== undefined && number > max ? max : number;
  }
};

const formatInput = (amount: string, max?: number) =>
  // Change value to number and back again to remove existing whitespaces
  // If this is not done, the input field will have extra whitespaces
  // If input is empty, let it be empty (will otherwise return NaN and freeze the field)
  amount === ""
    ? ""
    : stringToNumber(amount, max)
        .toString()
        .replace(/\B(?=(\d{3})+(?!\d))/g, " ");

const formatOutput = (amount: number) =>
  amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

export default function Home() {
  const [basicSkillLevel, setBasicSkillLevel] = useState<number>(0);
  const [advancedSkillLevel, setAdvancedSkillLevel] = useState<number>(0);
  const [expertSkillLevel, setExpertSkillLevel] = useState<number>(0);
  const [facilityBonus, setFacilityBonus] = useState<number>(0);

  const [searchString, setSearchString] = useState<string>("");
  const [searchIsOpen, setSearchIsOpen] = useState<boolean>(false);
  const [condensedMode, setCondensedMode] = useState<number>(1);

  const [activeShip, setActiveShip] = useState<Ship | null>(null);

  const [datacoreOnePrice, setDatacoreOnePrice] = useState<string>("0");
  const [datacoreTwoPrice, setDatacoreTwoPrice] = useState<string>("0");
  const [debrisPrice, setDebrisPrice] = useState<string>("0");
  const [salesPrice, setSalesPrice] = useState<string>("0");

  const [debrisCount, setDebrisCount] = useState<string>("0");

  const fuse = new Fuse(ShipBlueprints, {
    keys: ["name"],
  });

  const results = fuse.search(searchString);

  const dataCoreOneTotalCost: number =
    activeShip === null
      ? 0
      : activeShip.datacoreOneCount * stringToNumber(datacoreOnePrice);
  const dataCoreTwoTotalCost: number =
    activeShip === null
      ? 0
      : activeShip.datacoreTwoCount * stringToNumber(datacoreTwoPrice);
  const debrisTotalCost: number =
    stringToNumber(debrisCount) * stringToNumber(debrisPrice);

  useEffect(() => {
    if (activeShip !== null && marketData !== null) {
      const datacoreOnePrice = marketData.find(
        (element: MarketData) =>
          element.name === "Datacore - " + activeShip.datacoreOneType
      );
      const datacoreTwoPrice = marketData.find(
        (element: MarketData) =>
          element.name === "Datacore - " + activeShip.datacoreTwoType
      );
      const debrisPrice = marketData.find(
        (element: MarketData) => element.name === activeShip.debrisType
      );
      const blueprintPrice = marketData.find(
        (element: MarketData) => element.name === activeShip.name + " Blueprint"
      );

      setDatacoreOnePrice(
        datacoreOnePrice === undefined
          ? "NaN"
          : formatInput(datacoreOnePrice.highest_buy)
      );
      setDatacoreTwoPrice(
        datacoreTwoPrice === undefined
          ? "NaN"
          : formatInput(datacoreTwoPrice.highest_buy)
      );
      setDebrisPrice(
        debrisPrice === undefined ? "NaN" : formatInput(debrisPrice.highest_buy)
      );
      setSalesPrice(
        blueprintPrice === undefined
          ? "NaN"
          : formatInput(blueprintPrice.lowest_sell)
      );

      setDebrisCount(formatInput(activeShip.debrisCount.toString()));
    }
  }, [activeShip]);

  const successMultiplier: number =
    basicSkillMultiplier[basicSkillLevel] +
    advancedSkillMultiplier[advancedSkillLevel] +
    expertSkillMultiplier[expertSkillLevel] +
    facilityBonus;

  const calculateSuccessChance = () => {
    if (activeShip === null) {
      throw "activeShip is not defined";
    }
    // Calculate probability of success with user-defined amount of debris
    const success =
      activeShip.successRate *
      (stringToNumber(debrisCount) / activeShip.debrisCount) *
      (1 + successMultiplier / 100);
    return success > 100 ? 100 : success;
  };

  const calculateCost = () => {
    if (activeShip === null) {
      throw "activeShip is not defined";
    }
    return (
      (1 / (calculateSuccessChance() * 0.01)) *
      (stringToNumber(debrisPrice) * stringToNumber(debrisCount) +
        dataCoreOneTotalCost +
        dataCoreTwoTotalCost +
        activeShip.iskCost)
    );
  };

  return (
    <Layout>
      <div className={"container"}>
        <div className={"padded-container"}>
          <h2>Your Skills</h2>
          <div className={"row"}>
            <div className={"col-4"}>
              <SkillDropdown
                name={"Basic"}
                skillLevel={basicSkillLevel}
                setSkillLevel={setBasicSkillLevel}
              />
            </div>
            <div className={"col-4"}>
              <SkillDropdown
                name={"Advanced"}
                skillLevel={advancedSkillLevel}
                setSkillLevel={setAdvancedSkillLevel}
              />
            </div>
            <div className={"col-4"}>
              <SkillDropdown
                name={"Expert"}
                skillLevel={expertSkillLevel}
                setSkillLevel={setExpertSkillLevel}
              />
            </div>
            <div className={"col-5"}>
              <label>
                Facility Bonus
                <select
                  className={"custom-select"}
                  value={facilityBonus}
                  onChange={(event) =>
                    setFacilityBonus(parseInt(event.target.value))
                  }
                >
                  <option value={0}>None</option>
                  <option value={5}>Citadel</option>
                </select>
              </label>
            </div>
            <div className={"col-7"}>
              <label>
                Summary or all data?
                <select
                  className={"custom-select"}
                  value={condensedMode}
                  onChange={(event) =>
                    setCondensedMode(parseInt(event.target.value))
                  }
                >
                  <option value={1}>Show summary</option>
                  <option value={0}>Show all</option>
                </select>
              </label>
            </div>
          </div>
          <h2>Your Goal</h2>
          <div className={"row"}>
            <div className={"col-12"}>
              <label>
                Search
                <input
                  value={searchString}
                  onChange={(e) => {
                    setSearchString(e.target.value);
                    setSearchIsOpen(true);
                  }}
                  className={`text-input ${searchIsOpen && "flat-bottom"}`}
                />
              </label>
              {searchIsOpen && (
                <div className={"ship-buttons"}>
                  {results.slice(0, 4).map((result) => (
                    <button
                      className={"ship-button"}
                      key={result.item.name}
                      onClick={() => {
                        setActiveShip(result.item);
                        setSearchIsOpen(false);
                        setSearchString(result.item.name);
                      }}
                    >
                      {result.item.name} - {result.item.techLevel}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
          {activeShip !== null && (
            <>
              <h2>Success Rate</h2>
              <div className={"row"}>
                <div className={"col-6"}>
                  <label>
                    Success Chance
                    <p className={"content-text"}>
                      {Math.round(calculateSuccessChance())} %
                    </p>
                  </label>
                </div>
                <div className={"col-6"}>
                  <label>
                    Facility And Skill Bonuses
                    <p className={"content-text"}>+ {successMultiplier} %</p>
                  </label>
                </div>
              </div>
              {!condensedMode && (
                <>
                  <h2>Debris count</h2>
                  <div className={"row"}>
                    <div className={"col-md-4"}>
                      <label>
                        Debris Used
                        <input
                          className={"text-input small"}
                          type={"text"}
                          step={1}
                          value={stringToNumber(debrisCount)}
                          onChange={(e) =>
                            setDebrisCount(
                              formatInput(
                                e.target.value,
                                activeShip.debrisCount
                              )
                            )
                          }
                        />
                        <span className={"slash"}>
                          / {activeShip.debrisCount}
                        </span>
                      </label>
                    </div>
                  </div>
                  <h2>Material Prices</h2>
                  <div className={"row"}>
                    <div className={"col-md-7"}>
                      <label>
                        {activeShip.datacoreOneType}
                        <input
                          value={datacoreOnePrice}
                          onChange={(e) => {
                            setDatacoreOnePrice(formatInput(e.target.value));
                          }}
                          className={"text-input medium"}
                        />
                        <span className={"factor"}>
                          x {activeShip.datacoreOneCount}
                        </span>
                      </label>
                    </div>
                    <div className={"col-md-5"}>
                      <label>
                        Total Datacore Price
                        <p className={"content-text"}>
                          {formatOutput(dataCoreOneTotalCost)} ISK
                        </p>
                      </label>
                    </div>
                    <div className={"col-md-7"}>
                      <label>
                        {activeShip.datacoreTwoType}
                        <input
                          value={datacoreTwoPrice}
                          onChange={(e) => {
                            setDatacoreTwoPrice(formatInput(e.target.value));
                          }}
                          className={"text-input medium"}
                        />
                        <span className={"factor"}>
                          x {activeShip.datacoreTwoCount}
                        </span>
                      </label>
                    </div>
                    <div className={"col-md-5"}>
                      <label>
                        Total Datacore Price
                        <p className={"content-text"}>
                          {formatOutput(dataCoreTwoTotalCost)} ISK
                        </p>
                      </label>
                    </div>
                    <div className={"col-md-7"}>
                      <label>
                        {activeShip.debrisType}
                        <input
                          value={debrisPrice}
                          onChange={(e) => {
                            setDebrisPrice(formatInput(e.target.value));
                          }}
                          className={"text-input medium"}
                        />
                        <span className={"factor"}>x {debrisCount}</span>
                      </label>
                    </div>
                    <div className={"col-md-5"}>
                      <label>
                        Total Debris Price
                        <p className={"content-text"}>
                          {formatOutput(debrisTotalCost)} ISK
                        </p>
                      </label>
                    </div>
                    <div className={"col-md-7"}>
                      <label>
                        Reverse Engineering Fee
                        <p className={"content-text"}>
                          {formatOutput(activeShip.iskCost)} ISK
                        </p>
                      </label>
                    </div>
                    <div className={"col-md-5"}>
                      <label>
                        Total Per Successful Run
                        <p className={"content-text"}>
                          {formatOutput(calculateCost())} ISK
                        </p>
                      </label>
                    </div>
                  </div>
                </>
              )}
              <h2>Profit</h2>
              <div className={"row"}>
                <div className={"col-12"}>
                  <label>
                    Blueprint Sales Price
                    <input
                      value={salesPrice}
                      onChange={(e) => {
                        setSalesPrice(formatInput(e.target.value));
                      }}
                      className={"text-input"}
                    />
                  </label>
                </div>
                <div className={"col-8"}>
                  <label>
                    Total Profit
                    <p className={"result-text"}>
                      {formatOutput(
                        stringToNumber(salesPrice) - calculateCost()
                      )}{" "}
                      ISK
                    </p>
                  </label>
                </div>
                <div className={"col-4"}>
                  <label>
                    Profit - %
                    <p className={"result-text"}>
                      {formatOutput(
                        (stringToNumber(salesPrice) / calculateCost() - 1) * 100
                      )}{" "}
                      %
                    </p>
                  </label>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </Layout>
  );
}
