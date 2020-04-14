import React, { useEffect, useState } from "react";
import "./App.module.css";

import { Cards, Chart, CountryPicker } from "./components";
import styles from "./App.module.css";
import { fetchData, fetchCountryData } from "./api";
import covid from "./img/image.png";

function App() {
  const [data, setData] = useState({});
  const [country, setCountry] = useState("");

  useEffect(() => {
    fetchData().then((myData) => {
      setData(myData);
    });
  }, []);

  const getCountryData = (countryName) => {
    fetchCountryData(countryName).then(async (data) => {
      setCountry(countryName);
      setData(data);
    });
  };

  return (
    <div className={styles.container}>
      <img src={covid} alt="covid logo" className={styles.image} />
      <Cards data={data} />
      <CountryPicker getCountryData={getCountryData} />
      <Chart data={data} country={country} />
    </div>
  );
}

export default App;
