const APIURL = 'https://thronesapi.com/api/v2/Characters/'

const charAPI = (id) => (
  fetch(`${APIURL}${id}`)
    .then((response) => (
      response
        .json()
        .then((json) => (response.ok ? Promise.resolve(json) : Promise.reject(json)))
    ))
);

export default charAPI;
