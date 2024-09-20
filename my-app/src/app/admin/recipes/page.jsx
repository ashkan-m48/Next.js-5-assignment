import { Box, Grid } from "@mui/material";

import ButtonsForAdmin from "@/components/admin/ButtonsForAdmin";
import FormOfRecipes from "@/components/admin/recipes/FormOfRecipes";
import ListOfDataRecipes from "@/components/admin/recipes/ListOfDataRecipes";

async function AdminRecipes() {
  const res = await fetch("http://localhost:3000/api/v1/recipes", {
    cache: "no-cache",
    next: { tags: ["Recipes"] },
  });

  const data = await res.json();

  return (
    <Grid container spacing={2} marginTop={2}>
      <Grid
        sx={{ order: { lg: "1", sm: "2" } }}
        item
        lg={9}
        sm={12}
        padding={2}
      >
        <FormOfRecipes />
        <Grid padding={5}>
          <Box>
            <ListOfDataRecipes postData={data} />
          </Box>
        </Grid>
        <Grid></Grid>
      </Grid>
      <ButtonsForAdmin />
    </Grid>
  );
}

export default AdminRecipes;
