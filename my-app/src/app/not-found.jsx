import { Container, Stack, Typography } from "@mui/material";

function notFound() {
  return (
    <Container>
      <Stack flexDirection="row" justifyContent="center" marginTop={2}>
        <Typography variant="h2">Page not found</Typography>
      </Stack>
    </Container>
  );
}

export default notFound;
