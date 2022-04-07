const submit = async (url, user_name,user_score) => {

 const data = {
  user: user_name,
  score: user_score
 };

 const options = {
  method: 'POST',
  headers: {
   'Content-type': 'application/json; charset=UTF-8',
  },
  body: JSON.stringify(data)
 };

 const response = await fetch(url, options);
 const json = await response.json();
 return json;
}
export default submit;
