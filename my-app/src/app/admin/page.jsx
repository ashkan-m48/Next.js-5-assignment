"use client";
import { useRouter } from "next/navigation";

import { Button, Grid } from "@mui/material";
import React from "react";

function Admin() {
  const navigation = useRouter();
  return (
    <Grid container spacing={2} marginTop={2}>
      <Grid item lg={9} sm={12}></Grid>
      <Grid
        item
        lg={3}
        sm={12}
        sx={{
          border: "gray 1px solid",
          height: "100vh",
          display: "flex",
          justifyContent: "start",
          flexDirection: "column",
          gap: "10px",
          padding: "5px",
        }}
      >
        <Button
          variant="contained"
          onClick={() => navigation.push("/admin/users")}
        >
          users
        </Button>
        <Button
          variant="contained"
          onClick={() => navigation.push("/admin/recipes")}
        >
          recipes
        </Button>
        <Button
          variant="contained"
          onClick={() => navigation.push("/admin/posts")}
        >
          posts
        </Button>
      </Grid>
    </Grid>
  );
}

export default Admin;
