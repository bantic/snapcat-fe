import fetch from 'fetch';
import config from 'snapcat-fe/config/environment';

export default function(tokenId) {
  let url = config.apiBase + config.tokenEndpoint + tokenId;

  return fetch(url).then(response => response.json()).then(json => {
    return json.token;
  });
}
