export default async function fetchJSON(url) {
  let data;
  try {
    const response = await fetch(url);
    data = await response.json();
  } catch (err) {
    console.error(err);
  }
  return data;
}
