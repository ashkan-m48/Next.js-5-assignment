"use client";
import TextField from "@mui/material/TextField";
import { addpost, addUsers } from "@/utils/action";
import { Box, Button } from "@mui/material";
import { useState } from "react";

function FormOfUsers() {
  const [information, setInformation] = useState({
    firstName: "",
    lastName: "",
    email: "",
    note: "",
  });

  async function handleSubmit(e) {
    e.preventDefault();

    await addUsers(information);

    setInformation({
      firstName: "",
      lastName: "",
      email: "",
      note: "",
    });
  }
  return (
    <form
      style={{ border: "1px solid gray", padding: "10px" }}
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{ width: { sm: "100%", lg: "49%" }, margin: "5px" }}
        label="FirstName"
        variant="outlined"
        required
        value={information.firstName}
        onChange={(e) =>
          setInformation({ ...information, firstName: e.target.value })
        }
      />
      <TextField
        sx={{ width: { sm: "100%", lg: "49%" }, margin: "5px" }}
        label="lastName"
        variant="outlined"
        required
        value={information.lastName}
        onChange={(e) =>
          setInformation({ ...information, lastName: e.target.value })
        }
      />
      <TextField
        fullWidth
        type="email"
        label="Email"
        variant="outlined"
        sx={{ margin: "5px" }}
        required
        value={information.email}
        onChange={(e) =>
          setInformation({ ...information, email: e.target.value })
        }
      />
      <TextField
        fullWidth
        multiline
        maxRows={10}
        label="Write about yourself:"
        variant="outlined"
        sx={{ margin: "5px" }}
        required
        value={information.note}
        onChange={(e) =>
          setInformation({ ...information, note: e.target.value })
        }
      />
      <Box sx={{ textAlign: "center" }}>
        <Button
          type="submit"
          sx={{ margin: "5px" }}
          size="large"
          variant="contained"
        >
          POST
        </Button>
      </Box>
    </form>
  );
}

export default FormOfUsers;
