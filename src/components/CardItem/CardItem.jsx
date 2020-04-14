import React from "react";
import { Card, CardContent, Typography, Grid } from "@material-ui/core";
import CountUp from "react-countup";
import cx from "classnames";
import styles from "./CardItem.module.css";

const CardItem = ({ name, des, data, lastUpdate }) => {
  return (
    <Grid
      item
      component={Card}
      xs={12}
      md={3}
      className={cx(styles.card, styles[`${name}`])}
    >
      {data ? (
        <CardContent>
          <Typography color="textSecondary" gutterBottom>
            {name}
          </Typography>
          <Typography variant="h5">
            <CountUp
              start={0}
              end={data.value}
              duration={2.7}
              separator=","
            ></CountUp>
          </Typography>
          <Typography color="textSecondary" variant="subtitle2">
            {new Date(lastUpdate).toLocaleDateString()}
          </Typography>
          <Typography variant="caption">number of {des} COVID-19</Typography>
        </CardContent>
      ) : (
        <div>loading...</div>
      )}
    </Grid>
  );
};

export default CardItem;
