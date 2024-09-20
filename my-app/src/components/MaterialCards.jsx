"use client";

import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Button, CardActionArea, CardActions } from "@mui/material";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function MaterialCard({ recipes, posts, users }) {
  const router = useRouter();

  return (
    <Card
      sx={{
        width: 400,
        height: 400,
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <CardActionArea>
        {recipes ? (
          <Image
            loader={() => recipes.image}
            src={`${recipes.image}`}
            width={400}
            height={150}
          />
        ) : undefined}
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {users ? users.firstName + " " + users.lastName : undefined}
            {posts ? posts.title : undefined}
            {recipes ? recipes.name : undefined}
          </Typography>

          {users ? (
            <ul>
              <li style={{ marginTop: "10px" }}>Id:{users.id}</li>
              <li style={{ marginTop: "10px" }}>BirthDate:{users.birthDate}</li>
              <li style={{ marginTop: "10px" }}>Age:{users.age}</li>
              <li style={{ marginTop: "10px" }}>Gender:{users.gender}</li>
              <li style={{ marginTop: "10px" }}>Email:{users.email}</li>
              <li style={{ marginTop: "10px" }}>Phone:{users.phone}</li>
              <li style={{ marginTop: "10px" }}>Height:{users.height}</li>
            </ul>
          ) : undefined}
          {posts ? posts.body : undefined}
          {recipes ? recipes.instructions : undefined}
        </CardContent>
      </CardActionArea>
      <CardActions sx={{ position: "relative" }}>
        <Button
          size="small"
          color="primary"
          onClick={() => {
            if (users) {
              return router.push(`/users/${users.id}`);
            } else if (posts) {
              return router.push(`/posts/${posts.id}`);
            } else if (recipes) {
              return router.push(`/recipes/${recipes.id}`);
            }
          }}
        >
          click
        </Button>
      </CardActions>
    </Card>
  );
}
