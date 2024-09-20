"use server";

import { revalidateTag } from "next/cache";

// import { revalidateTag } from "next/cache";

// posts

export async function addpost(information) {
  await fetch("http://localhost:3000/api/v1/posts", {
    method: "POST",
    body: JSON.stringify(information),
  });
  revalidateTag("posts");
}

export async function editPost(firstNames, lastNames, id) {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ firstName: firstNames, lastName: lastNames }),
  });
  revalidateTag("posts");
}

export async function deletePost(id) {
  await fetch(`http://localhost:3000/api/v1/posts/${id}`, {
    method: "DELETE",
  });
  revalidateTag("posts");
}
// recipes

export async function addRecipes(information) {
  await fetch("http://localhost:3000/api/v1/recipes", {
    method: "POST",
    body: JSON.stringify(information),
  });
  revalidateTag("recipes");
}

export async function editRecipes(firstNames, lastNames, id) {
  await fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ firstName: firstNames, lastName: lastNames }),
  });
  revalidateTag("recipes");
}

export async function deleteRecipes(id) {
  await fetch(`http://localhost:3000/api/v1/recipes/${id}`, {
    method: "DELETE",
  });
  revalidateTag("recipes");
}

// users

export async function addUsers(information) {
  await fetch("http://localhost:3000/api/v1/users", {
    method: "POST",
    body: JSON.stringify(information),
  });
  revalidateTag("users");
}

export async function editUsers(firstNames, lastNames, id) {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: "PATCH",
    body: JSON.stringify({ firstName: firstNames, lastName: lastNames }),
  });
  revalidateTag("users");
}

export async function deleteUsers(id) {
  await fetch(`http://localhost:3000/api/v1/users/${id}`, {
    method: "DELETE",
  });
  revalidateTag("users");
}
