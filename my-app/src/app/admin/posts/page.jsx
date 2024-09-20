import { Box, Grid } from "@mui/material";

import ListOfDataPost from "@/components/admin/posts/ListOfDataPost";
import getData from "@/utils/getData";

import FormOfPost from "@/components/admin/posts/FormOfPost";
import ButtonsForAdmin from "@/components/admin/ButtonsForAdmin";

async function AdminPosts() {
  const res = await fetch("http://localhost:3000/api/v1/posts", {
    cache: "no-cache",
    next: { tags: ["posts"] },
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
        <FormOfPost />
        <Grid padding={5}>
          <Box>
            <ListOfDataPost postData={data} />
          </Box>
        </Grid>
        <Grid></Grid>
      </Grid>
      <ButtonsForAdmin />
    </Grid>
  );
}

export default AdminPosts;
