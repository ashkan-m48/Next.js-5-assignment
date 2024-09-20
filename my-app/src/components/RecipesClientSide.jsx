"use client";

import { Card, CardActionArea, CardContent, Typography } from "@mui/material";

import Image from "next/image";

function RecipesClientSide({ recipes }) {
  return (
    <Card sx={{ width: 400, minHeight: 600 }}>
      <Image
        loader={() => recipes.image}
        src={`${recipes.image}`}
        width={400}
        height={150}
      />
      <CardActionArea>
        <CardContent>
          <Typography variant="h2">ID: {recipes.id}</Typography>
          <Typography variant="h5">Title:{recipes.name}</Typography>

          <ul>
            <b>Ingredients:</b>
            {recipes.ingredients.map((item, i) => {
              return <li key={i}>{item}</li>;
            })}
          </ul>

          <Typography variant="body2">
            <b>Instructions:</b>
            <br />
            {recipes.instructions}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export default RecipesClientSide;
