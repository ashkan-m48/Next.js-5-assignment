"use client";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";

import Button from "@mui/material/Button";

import { TextField } from "@mui/material";
import { deleteUsers, editUsers } from "@/utils/action";

function ListOfDataUsers({ postData }) {
  async function handleChange(arg, id) {
    await editUsers(arg.firstName, arg.lastName, id);
  }

  async function handleclick(id) {
    await deleteUsers(id);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        flexWrap: "wrap",
        gap: "20px",
        marginTop: "20px",
      }}
    >
      {postData.map((item) => {
        return (
          <Card sx={{ maxWidth: 345 }}>
            <CardContent>
              <TextField
                type="text"
                multiline
                value={item.firstName}
                placeholder="firstName"
                onChange={(e) =>
                  handleChange(
                    { firstName: e.target.value, lastName: item.lastName },
                    item.id
                  )
                }
              />
              <TextField
                type="text"
                multiline
                value={item.lastName}
                placeholder="lastName"
                onChange={(e) =>
                  handleChange(
                    { firstName: item.firstName, lastName: e.target.value },
                    item.id
                  )
                }
              />
            </CardContent>
            <CardActions>
              <Button size="small" onClick={() => handleclick(item.id)}>
                Delete
              </Button>
            </CardActions>
          </Card>
        );
      })}
    </div>
  );
}

export default ListOfDataUsers;
