import getData from "@/utils/getData";
import { CircularProgress, Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Recipes page",
  description: "This page show some random recipes from an api",
};

const LazyCardComponent = dynamic(
  () => import("../../components/MaterialCards"),
  {
    loading: () => <CircularProgress />,
  }
);

async function Recipes() {
  const data = await getData("https://dummyjson.com/recipes");

  return (
    <Container maxWidth="xl">
      <Stack
        direction="row"
        justifyContent="center"
        alignItems="center"
        flexWrap="wrap"
        margin="45px"
        gap="10px"
      >
        {data.recipes.map((item, i) => (
          <LazyCardComponent recipes={item} key={i} />
        ))}
      </Stack>
    </Container>
  );
}

export default Recipes;
