const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const playlist_id = urlParams.get("id");
const url = "https://2rnxfj0vm0.execute-api.us-east-1.amazonaws.com/default/getPlaylistAlbums?playlist_id=" + playlist_id + '/';

const headers = {'Content-Type':'application/json',
                 'Access-Control-Allow-Origin':'*',
                 'Access-Control-Allow-Methods':'GET'}

console.log(url);

(async () => {
  const res = await fetch(url, {headers: headers}).then((response) => response.blob())
  .then(data => {
      return data;
  })
  .catch(error => {
      console.error(error);
  });
  console.log(res);
})();




