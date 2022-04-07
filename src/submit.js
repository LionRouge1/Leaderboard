const submit = async (url, userName, userScore) => {
  const data = {
    user: userName,
    score: userScore,
  };

  const options = {
    method: 'POST',
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(data),
  };

  const response = await fetch(url, options);
  const json = await response.json();
  return json;
};
export default submit;
