import { CircularProgress, Stack } from "@mui/material";
import React from "react";

function loading() {
  return (
    <Stack flexDirection="row" justifyContent="center">
      <CircularProgress />
    </Stack>
  );
}

export default loading;
