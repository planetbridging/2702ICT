var flickr_key = "99872428c9a3629cc7186481eebd04fd";
var flickr_secret = "3805e33e71aa0435";

var link =
  "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" +
  flickr_key +
  "&photo_id=38425335920&format=json&nojsoncallback=1";

var parms = "";

var lstPhotoStore = [];

$(document).ready(function () {
  //LoadData();
  /*$.get(
    "https://www.flickr.com/services/api/explore/flickr.photos.getInfo" + link,
    function (data) {
      console.log(data);
    }
  );*/

  //closecontainer

  $("#closecontainer").click(function () {
    //$("#modelcontainer").attr("visibility", "show");
    $("#modelcontainer").addClass("hideItem");
  });

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
    "&format=json&nojsoncallback=1&per_page=5" +
    parms;

  $.get(l, function (data) {
    var lstphotos = data["photos"]["photo"];
    //var ran = Math.floor(Math.random() * lstphotos.length);
    //console.log(lstphotos[ran]);

    for (var i = 0; i < lstphotos.length; i++) {
      getPhotoSizes(i, lstphotos[i]["id"], lstphotos[i]["title"]);
    }
  });
}

function getPhotoSizes(num, id, caption) {
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
      if (lstsizes[i]["label"] == "Square") {
        item = lstsizes[i];
        break;
      }
      //console.log(lstsizes[i]);
    }

    if (item == "") {
      item = lstsizes[0];
    }
    lstsizes[lstsizes.length - 1]["id"] = id;
    lstsizes[lstsizes.length - 1]["caption"] = caption;
    //console.log(lstsizes[lstsizes.length - 1]);
    lstPhotoStore.push(lstsizes[lstsizes.length - 1]);

    AppendMeme(num, id, item);
  });
}

function LoadData() {
  var link = "https://api.imgflip.com/get_memes";

  $.getJSON(link, {}).done(function (data) {
    data.data.memes.forEach((element) => AppendMeme(element));
  });
}

function AppendMeme(num, id, item) {
  //console.log(item["source"]);
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

  tr.click(function () {
    console.log(num);
    //$("#modelcontainer").attr("visibility", "show");
    $("#modelcontainer").removeClass("hideItem");
    showPhoto(id);
    //viewPhoto(num);
  });

  $("#RandomPhoto").append(tr);
}

function showPhoto(id) {
  for (var i = 0; i < lstPhotoStore.length; i++) {
    if (id == lstPhotoStore[i]["id"]) {
      viewPhoto(i);
      break;
    }
  }
}

function viewPhoto(itemNumber) {
  var newimg = $("<img>");
  newimg.attr("src", lstPhotoStore[itemNumber]["source"]);
  newimg.attr("id", "imgAuto");
  $("#imgcontainer").html(newimg);
  $("#imgcaption").html(lstPhotoStore[itemNumber]["caption"]);
}
