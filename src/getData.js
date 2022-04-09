export default class getData {
  constructor (userName = '', userScore = '', url = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/M4j8ipwhBO11Kf9GfGqr/scores/') {
    this.url = url;
    this.userName = userName;
    this.userScore = userScore;
    this.data = {
      user: this.userName,
      score: this.userScore
    }
  }

  async submit() {
    const options = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(this.data),
    };

    const response = await fetch(this.url, options);
    const json = await response.json();
    return json;
  } 

  async refresh() {
    const response = await fetch(this.url);
    const json = await response.json();
    return json.result.sort((a, b) => b.score - a.score);
  };
}
