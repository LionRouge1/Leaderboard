const refresh = async (url) => {
  const response = await fetch(url);
  const json = await response.json();
  return json;
};
export default refresh;