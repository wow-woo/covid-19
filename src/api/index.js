import axios from "axios";

const URL = "https://covid19.mathdro.id/api";

export const fetchData = async () => {
  try {
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(URL);

    return { confirmed, recovered, deaths, lastUpdate };
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(URL + "/daily");
    const modified = data.map((daily) => ({
      date: daily.reportDate,
      confirmed: daily.confirmed.total,
      deaths: daily.deaths.total,
    }));
    return modified;
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchCountryName = async () => {
  try {
    const {
      data: { countries },
    } = await axios.get(URL + "/countries");

    const name = await countries.map((country) => country.name);

    return name;
  } catch (err) {
    console.log(err.message);
  }
};

export const fetchCountryData = async (country) => {
  try {
    if (country === "world") {
      return fetchData();
    }

    const { data } = await axios.get(URL + "/countries/" + country);

    return data;
  } catch (err) {
    console.log(err.message);
  }
};
