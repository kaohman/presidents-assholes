export const fetchData = async (path) => {
  const response = await fetch(path);
  if (response.ok) {
    return response.json();
  } else {
    throw error.statusText
  }
}