import data from "../recipes.json";

export async function GET(req, { params }) {
  const res = data.find((item) => item.id === params.id);

  return Response.json(res);
}

export async function PATCH(req, { params }) {
  const { firstName, lastName } = await req.json();

  const index = data.findIndex((item) => item.id === params.id);

  if ((firstName || firstName == "") && (lastName || lastName == "")) {
    data[index].firstName = firstName;
    data[index].lastName = lastName;
  } else if ((firstName || firstName == "") && lastName == undefined) {
    data[index].firstName = firstName;
  } else if (firstName === undefined && (lastName || lastName == "")) {
    data[index].lastName = lastName;
  }

  return Response.json(data[index]);
}

export async function DELETE(id, { params }) {
  const index = data.findIndex((item) => item.id === params.id);
  const deleted = data[index];

  data.splice(index, 1);

  return Response.json(deleted);
}
