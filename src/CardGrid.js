import React from "react";
import Cards from "./Card";
import { Products } from "./Products";
import { Grid } from "@material-ui/core";

function CardGrid() {
  return (
    <div>
      <Grid container>
        {Products.map((item, index) => {
          return (
            <Grid item xs={6} sm={4} md={3} spacing={2} justify="center">
              <Cards title={item.title} image={item.image} price={item.price} />
            </Grid>
          );
        })}
      </Grid>
    </div>
  );
}

export default CardGrid;
