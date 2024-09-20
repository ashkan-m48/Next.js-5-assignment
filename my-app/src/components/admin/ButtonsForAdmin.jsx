"use client";

import { Button, Grid } from "@mui/material";
import { useRouter } from "next/navigation";

function ButtonsForAdmin() {
  const navigation = useRouter();
  return (
    <Grid
      item
      lg={3}
      sm={12}
      sx={{
        border: { lg: "gray 1px solid", sm: "none" },
        height: { lg: "100vh", sm: "25vh" },
        display: "flex",
        justifyContent: "start",
        flexDirection: "column",
        gap: "10px",
        padding: "5px",
        order: { lg: "2", sm: "1" },
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
  );
}

export default ButtonsForAdmin;
