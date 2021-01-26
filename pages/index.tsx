import React, { useState, useEffect } from "react";
import SkillDropdown from "../components/skillDropdown"
import Fuse from 'fuse.js'
import ShipBlueprints from "../data/shipBlueprints"

const basicSkillMultiplier = {
  0: 0,
  1: 0,
  2: 12,
  3: 24,
  4: 36,
  5: 50,
};

const advancedSkillMultiplier = {
  0: 0,
  1: 0,
  2: 0,
  3: 10,
  4: 20,
  5: 30,
};

const expertSkillMultiplier = {
  0: 0,
  1: 0,
  2: 0,
  3: 6,
  4: 12,
  5: 20,
};

interface MarketData {
  item_id: string,
  name: string,
  time: string,
  sell: string,
  buy: string,
  lowest_sell: string,
  highest_buy: string
}

interface Ship {
  name: string,
  class: string,
  techLevel: string,
  iskCost: number,
  timeCost: number,
  successRate: number,
  debrisType: string,
  debrisCount: number,
  datacoreOneCount: number,
  datacoreOneType: string,
  datacoreTwoCount: number,
  datacoreTwoType: string,
}

const formatCurrency = (amount: number) => {
  return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ")
}

export default function Home() {
  const [basicSkillLevel, setBasicSkillLevel] = useState(0);
  const [advancedSkillLevel, setAdvancedSkillLevel] = useState(0);
  const [expertSkillLevel, setExpertSkillLevel] = useState(0);
  const [facilityBonus, setFacilityBonus] = useState(0);

  const [searchString, setSearchString] = useState("");
  const [searchIsOpen, setSearchIsOpen] = useState(false);
  const [condensedMode, setCondensedMode] = useState(1);

  const [activeShip, setActiveShip] = useState({});

  const [datacoreOnePrice, setDatacoreOnePrice] = useState(0);
  const [datacoreTwoPrice, setDatacoreTwoPrice] = useState(0);
  const [debrisPrice, setDebrisPrice] = useState(0);

  const [salesPrice, setSalesPrice] = useState(0);

  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [marketData, setMarketData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/hello")
        .then(res => res.json())
        .then(
            (result) => {
              setIsLoaded(true);
              setMarketData(result);
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

  const fuse = new Fuse((ShipBlueprints), {
    keys: ['name']
  });

  const results = fuse.search(searchString);

  const dataCoreOneTotalCost: number = activeShip.datacoreOneCount * datacoreOnePrice;
  const dataCoreTwoTotalCost: number = activeShip.datacoreTwoCount * datacoreTwoPrice;

  useEffect(
      () => {
        if (Object.keys(activeShip).length !== 0) {
          setDatacoreOnePrice(parseFloat(marketData.find(element => element.name === "Datacore - " + activeShip.datacoreOneType).highest_buy));
          setDatacoreTwoPrice(parseFloat(marketData.find(element => element.name === "Datacore - " + activeShip.datacoreTwoType).highest_buy));
          setDebrisPrice(parseFloat(marketData.find(element => element.name === activeShip.debrisType).highest_buy));
          setSalesPrice(parseFloat(marketData.find(element => element.name ===  activeShip.name + " Blueprint").lowest_sell));
        }
      },
      [activeShip],
  );

  const successMultiplier: number =
      basicSkillMultiplier[basicSkillLevel]
      + advancedSkillMultiplier[advancedSkillLevel]
      + expertSkillMultiplier[expertSkillLevel]
      + facilityBonus;

  const calculateMinimumCost = () => {
    const costs: number[] = [];
    let i: number;
    for (i = 1; i <= activeShip.debrisCount; i++) {
      // Calculate probability of success with variable amounts of debris
      const probability: number = (activeShip.successRate / (activeShip.debrisCount) * i) * (1 + successMultiplier / 100);
      // Then calculate how much is the average cost per run with that amount of debris
      const cost: number = 1 / ((probability > 100 ? 100 : probability) * 0.01) * (debrisPrice * i + dataCoreOneTotalCost + dataCoreTwoTotalCost + activeShip.iskCost);
      // Add to an array of costs
      costs.push(cost)
    }
    // Return the smallest possible cost and the index of smallest possible cost
    return [Math.min(...costs), costs.indexOf(Math.min(...costs)) + 1];
  }

  const minimumCost: number = calculateMinimumCost()[0];
  const debrisForMinimumCost: number = calculateMinimumCost()[1];

  const debrisTotalCost: number = debrisForMinimumCost * debrisPrice;

  const calculateSuccessChance = () => {
    // Calculate probability of success with max amount of debris
    return activeShip.successRate * (1 + successMultiplier / 100);
  };

  console.log(activeShip);

  return (
    <main>
      <div className={"container"}>
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
                  onChange={event => setFacilityBonus(parseInt(event.target.value))}
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
                  onChange={event => setCondensedMode(parseInt(event.target.value))}
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
                  onChange={(e) => {setSearchString(e.target.value); setSearchIsOpen(true)}}
                  className={`text-input ${searchIsOpen && "flat-bottom"}`}
              />
            </label>
            {searchIsOpen &&
              <div className={"ship-buttons"}>
                {results.slice(0, 4).map(result =>
                    <button
                        className={"ship-button"}
                        key={result.item.name}
                        onClick={() => {
                          setActiveShip(result.item);
                          setSearchIsOpen(false);
                          setSearchString(result.item.name)}}
                    >
                      {result.item.name} - {result.item.techLevel}
                    </button>
                )}
              </div>
            }
          </div>
        </div>
        {Object.keys(activeShip).length !== 0 &&
        <>
          {!condensedMode &&
          <>
            <h2>Success Rate</h2>
            <div className={"row"}>
              <div className={"col-6"}>
                <label>
                  Success Chance
                  <p className={"content-text"}>{Math.round(calculateSuccessChance())} %</p>
                </label>
              </div>
              <div className={"col-6"}>
                <label>
                  Facility And Skill Bonuses
                  <p className={"content-text"}>+ {successMultiplier} %</p>
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
                        onChange={(e) => {setDatacoreOnePrice(parseFloat(e.target.value))}}
                        className={"text-input medium"}
                    />
                    <span className={"factor"}>x {activeShip.datacoreOneCount}</span>
                  </label>
                </div>
                <div className={"col-md-5"}>
                  <label>
                    Total Datacore Price
                    <p className={"content-text"}>{formatCurrency(dataCoreOneTotalCost)} ISK</p>
                  </label>
                </div>
                <div className={"col-md-7"}>
                  <label>
                    {activeShip.datacoreTwoType}
                    <input
                        value={datacoreTwoPrice}
                        onChange={(e) => {setDatacoreTwoPrice(parseFloat(e.target.value))}}
                        className={"text-input medium"}
                    />
                    <span className={"factor"}>x {activeShip.datacoreTwoCount}</span>
                  </label>
                </div>
                <div className={"col-md-5"}>
                  <label>
                    Total Datacore Price
                    <p className={"content-text"}>{formatCurrency(dataCoreTwoTotalCost)} ISK</p>
                  </label>
                </div>
                <div className={"col-md-7"}>
                  <label>
                    {activeShip.debrisType}
                    <input
                        value={debrisPrice}
                        onChange={(e) => {setDebrisPrice(parseFloat(e.target.value))}}
                        className={"text-input medium"}
                    />
                    <span className={"factor"}>x {debrisForMinimumCost}/{activeShip.debrisCount}</span>
                  </label>
                </div>
                <div className={"col-md-5"}>
                  <label>
                    Total Debris Price
                    <p className={"content-text"}>{formatCurrency(debrisTotalCost)} ISK</p>
                  </label>
                </div>
                <div className={"col-md-7"}>
                  <label>
                    Reverse Engineering Fee
                    <p className={"content-text"}>{formatCurrency(activeShip.iskCost)} ISK</p>
                  </label>
                </div>
                <div className={"col-md-5"}>
                  <label>
                    Total Per Successful Run
                    <p className={"content-text"}>{formatCurrency(minimumCost)} ISK</p>
                  </label>
                </div>
            </div>
          </>
        }
        <h2>Profit</h2>
        <div className={"row"}>
          <div className={"col-12"}>
            <label>
              Blueprint Sales Price
              <input
                  value={salesPrice}
                  onChange={(e) => {setSalesPrice(parseFloat(e.target.value))}}
                  className={"text-input"}
              />
            </label>
          </div>
          <div className={"col-8"}>
            <label>
              Profit
              <p className={"result-text"}>{formatCurrency(salesPrice - minimumCost)} ISK</p>
            </label>
          </div>
          <div className={"col-4"}>
            <label>
              Profit - %
              <p className={"result-text"}>{formatCurrency((salesPrice / minimumCost - 1) * 100) } %</p>
            </label>
          </div>
        </div>
        </>
        }
      </div>
    </main>
  )
}
