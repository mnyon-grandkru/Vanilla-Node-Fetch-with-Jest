import fetch from 'node-fetch'

function fetchThis(url) {
  fetch(url)
    .then(response => {
      if (response.ok) {
        // Status code is within the 2xx range
        return response.json();
      } else {
        throw new Error('Request failed with status code ' + response.status);
      }
    })
    .then(data => {
      // Handle the successful response data
      console.log('Success:', data);
    })
    .catch(error => {
      // Handle any error that occurred during the request
      console.error('Error:', error.message);
    });
}


export default fetchThis;