import getData from "@/utils/getData";
import {
  Card,
  CardActionArea,
  CardContent,
  Container,
  Stack,
  Typography,
} from "@mui/material";

export async function generateMetadata({ params }) {
  return {
    title: `User ${params.id} page`,
    description: `This page is about user with id of ${params.id}`,
  };
}

async function UsersBaseOnID({ params }) {
  const usersData = await getData("https://dummyjson.com/users");
  const individualUser = usersData.users.filter((item) => {
    if (item.id == params.id) {
      return item;
    }
  });
  return (
    <Container>
      <Stack marginTop={10}>
        <Card>
          <CardActionArea>
            <CardContent>
              <Typography variant="h2">ID: {individualUser[0].id}</Typography>
              <Typography variant="h5">
                Full name:
                {individualUser[0].firstName + " " + individualUser[0].lastName}
              </Typography>

              <ul>
                <li style={{ marginTop: "10px" }}>
                  BirthDate:{individualUser[0].birthDate}
                </li>
                <li style={{ marginTop: "10px" }}>
                  Age:{individualUser[0].age}
                </li>
                <li style={{ marginTop: "10px" }}>
                  Gender:{individualUser[0].gender}
                </li>
                <li style={{ marginTop: "10px" }}>
                  Email:{individualUser[0].email}
                </li>
                <li style={{ marginTop: "10px" }}>
                  Phone:{individualUser[0].phone}
                </li>
                <li style={{ marginTop: "10px" }}>
                  Height:{individualUser[0].height}
                </li>
                <li style={{ marginTop: "10px" }}>
                  Country:{individualUser[0].address.country}
                </li>
              </ul>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Container>
  );
}

export default UsersBaseOnID;
