import React, { useState, useEffect } from "react";
import { NativeSelect, FormControl } from "@material-ui/core";
import { fetchCountryName } from "../../api";
import styles from "./CountryPicker.module.css";

const CountryPicker = ({ getCountryData }) => {
  const [countryName, setCountryName] = useState([]);

  useEffect(() => {
    fetchCountryName().then(async (myData) => {
      setCountryName(myData);
    });
  }, []);

  const handleChange = (v) => {
    getCountryData(v);
  };

  return (
    <FormControl className={styles.formControl}>
      <NativeSelect onChange={(e) => handleChange(e.currentTarget.value)}>
        <option value="world">world</option>
        {countryName.length &&
          countryName.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item}
              </option>
            );
          })}
      </NativeSelect>
    </FormControl>
  );
};

export default CountryPicker;
