import getData from "@/utils/getData";
import { CircularProgress, Container, Stack } from "@mui/material";
import dynamic from "next/dynamic";

export const metadata = {
  title: "Users page",
  description: "This page show some random users from an api",
};

const LazyCardComponent = dynamic(
  () => import("../../components/MaterialCards"),
  {
    loading: () => <CircularProgress />,
  }
);

async function Users() {
  const data = await getData("https://dummyjson.com/users");

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
        {data.users.map((item, i) => (
          <LazyCardComponent users={item} key={i} />
        ))}
      </Stack>
    </Container>
  );
}

export default Users;
