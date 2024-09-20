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
    title: `post ${params.id} page`,
    description: `This page is about one of the fetched post with the id of ${params.id}`,
  };
}

async function PostsBaseOnID({ params }) {
  const postsData = await getData("https://dummyjson.com/posts");
  const individualPost = postsData.posts.filter((item) => {
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
              <Typography variant="h2">ID: {individualPost[0].id}</Typography>
              <Typography variant="h5">
                Title:{individualPost[0].title}
              </Typography>
              <Typography variant="body2">
                Body:{individualPost[0].body}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Stack>
    </Container>
  );
}

export default PostsBaseOnID;
