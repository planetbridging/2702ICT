$(document).ready(function () {
  LoadData();
});

function LoadData() {
  var link = "https://api.imgflip.com/get_memes";

  $.getJSON(link, {}).done(function (data) {
    data.data.memes.forEach((element) => AppendMeme(element));
  });
}

function AppendMeme(item) {
  var tr = $("<tr>");
  var td1 = $("<td>").html(item.id);
  var td2 = $("<td>").html(item.name);
  var td3 = $("<td>").html(item.url);

  var newimg = $("<img>");
  newimg.attr("src", item.url);
  newimg.attr("width", 200);
  newimg.attr("height", 200);

  var td4 = $("<td>").html(newimg);
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  $("#Quotes").append(tr);
}
