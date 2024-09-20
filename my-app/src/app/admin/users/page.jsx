import { Box, Grid } from "@mui/material";

import ButtonsForAdmin from "@/components/admin/ButtonsForAdmin";
import FormOfUsers from "@/components/admin/users/FormOfUsers";
import ListOfDataUsers from "@/components/admin/users/ListOfDataUsers";

async function AdminUsers() {
  const res = await fetch("http://localhost:3000/api/v1/users", {
    cache: "no-cache",
    next: { tags: ["users"] },
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
        <FormOfUsers />
        <Grid padding={5}>
          <Box>
            <ListOfDataUsers postData={data} />
          </Box>
        </Grid>
        <Grid></Grid>
      </Grid>
      <ButtonsForAdmin />
    </Grid>
  );
}

export default AdminUsers;
