import getData from "@/utils/getData";
import { CircularProgress, Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Posts page",
  description: "This page show some random posts from an api",
};
async function Posts() {
  const data = await getData("https://dummyjson.com/posts");

  const LazyCardComponent = dynamic(
    () => import("../../components/MaterialCards"),
    {
      loading: () => <CircularProgress />,
    }
  );

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
        {data.posts.map((item, i) => (
          <LazyCardComponent posts={item} key={i} />
        ))}
      </Stack>
    </Container>
  );
}

export default Posts;
