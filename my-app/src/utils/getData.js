export default async function getData(url) {
  try {
    const response = await fetch(url, {
      catch: "no-store",
    });
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
