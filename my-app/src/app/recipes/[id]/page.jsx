import getData from "@/utils/getData";
import { Container, Stack } from "@mui/material";

import dynamic from "next/dynamic";

export async function generateMetadata({ params }) {
  return {
    title: `Recieps ${params.id} page`,
    description: `This page is about Recipies fetched from api with an id of ${params.id}`,
  };
}

const RecipesCard = dynamic(
  () => import("../../../components/RecipesClientSide"),
  {
    loading: () => <p>Loading...</p>,
  }
);

async function RecipesBaseOnID({ params }) {
  const recipesData = await getData("https://dummyjson.com/recipes");
  const individualRecipes = recipesData.recipes.filter((item) => {
    if (item.id == params.id) {
      return item;
    }
  });

  return (
    <Container>
      <Stack
        marginTop={4}
        marginBottom={4}
        flexDirection="row"
        justifyContent="center"
      >
        <RecipesCard recipes={individualRecipes[0]} />
      </Stack>
    </Container>
  );
}

export default RecipesBaseOnID;
