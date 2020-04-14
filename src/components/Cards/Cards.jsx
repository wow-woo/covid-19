import React from "react";
import { Grid } from "@material-ui/core";
import CardItem from "../CardItem/CardItem";

import styles from "./Cards.module.css";
function Cards({ data: { confirmed, recovered, deaths, lastUpdate } }) {
  return (
    <div className={styles.container}>
      <Grid container spacing={3} justify="center">
        <CardItem
          name="Infected"
          des="active case of"
          data={confirmed}
          lastUpdate={lastUpdate}
        />
        <CardItem
          name="Recovered"
          des="recoveries from"
          data={recovered}
          lastUpdate={lastUpdate}
        />
        <CardItem
          name="Deaths"
          des="deaths by"
          data={deaths}
          lastUpdate={lastUpdate}
        />
      </Grid>
    </div>
  );
}

export default Cards;
