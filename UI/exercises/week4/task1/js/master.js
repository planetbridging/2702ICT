var flickr_key = "99872428c9a3629cc7186481eebd04fd";
var flickr_secret = "3805e33e71aa0435";

var link =
  "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" +
  flickr_key +
  "&photo_id=38425335920&format=json&nojsoncallback=1";

var parms = "";
$(document).ready(function () {
  //LoadData();
  /*$.get(
    "https://www.flickr.com/services/api/explore/flickr.photos.getInfo" + link,
    function (data) {
      console.log(data);
    }
  );*/

  $.get(
    "http://flickr.api.pressback.space:9999/?key=99872428c9a3629cc7186481eebd04fd&secret=3805e33e71aa0435",
    function (data) {
      console.log(data);
      parms = "&" + data;
      getLst();
    }
  );
});

function getphotosinfo() {
  $.get(link + parms, function (data) {
    console.log(data);
  });
}

function getLst() {
  var l =
    "https://www.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=" +
    flickr_key +
    "&format=json&nojsoncallback=1" +
    parms;

  $.get(l, function (data) {
    var lstphotos = data["photos"]["photo"];
    var ran = Math.floor(Math.random() * lstphotos.length);
    //console.log(lstphotos[ran]);
    getPhotoSizes(lstphotos[ran]["id"]);
  });
}

function getPhotoSizes(id) {
  var l =
    "https://www.flickr.com/services/rest/?method=flickr.photos.getSizes&api_key=" +
    flickr_key +
    "&format=json&nojsoncallback=1" +
    parms +
    "&photo_id=" +
    id;

  $.get(l, function (data) {
    var lstsizes = data["sizes"]["size"];
    var item = "";
    for (var i = 0; i < lstsizes.length; i++) {
      if (lstsizes[i]["label"] == "Small 400") {
        item = lstsizes[i];
        break;
      }
      //console.log(lstsizes[i]);
    }

    if (item == "") {
      item = lstsizes[0];
    }

    AppendMeme(id, item);
  });
}

function LoadData() {
  var link = "https://api.imgflip.com/get_memes";

  $.getJSON(link, {}).done(function (data) {
    data.data.memes.forEach((element) => AppendMeme(element));
  });
}

function AppendMeme(id, item) {
  console.log(item["source"]);
  var tr = $("<tr>");
  var td1 = $("<td>").html(id);
  var td2 = $("<td>").html("flickr");
  var td3 = $("<td>").html(item["source"]);

  var newimg = $("<img>");
  newimg.attr("src", item["source"]);
  newimg.attr("width", item["width"]);
  newimg.attr("height", item["height"]);

  var td4 = $("<td>").html(newimg);
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  $("#RandomPhoto").append(tr);
}
