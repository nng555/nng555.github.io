const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const playlist_id = urlParams.get("id");
const url = "https://2rnxfj0vm0.execute-api.us-east-1.amazonaws.com/default/getPlaylistAlbums?playlist_id=" + playlist_id;

const headers = {'Content-Type':'application/json',
                 'Access-Control-Allow-Origin':'*',
                 'Access-Control-Allow-Methods':'GET'}

console.log(url);

(async () => {
  const res = await fetch(url, {headers: headers}).then((response) => response.json())
  .then(data => {
      return data;
  })
  .catch(error => {
      console.error(error);
  });
  document.getElementById("playlistname").innerHTML = "<br><br>" + res["name"] + " - a playlist by " + res["display_name"] + "<br><br>";
  const albumDiv = document.getElementById("albums")

  for (let i = 0; i < res['albums'].length; i++) {
    var div = document.createElement("div");
    div.innerHTML = res['albums'][i]['name'] + " - " + res['albums'][i]['artists'] + '<br><a href="' + res['albums'][i]['track_url'] + '"><img src="' + res['albums'][i]['img_url'] + '"></a><br><br>'
    document.getElementById("albums").appendChild(div);
  };
})();




