$(document).ready(function () {
  LoadData();
});

function LoadData() {
  var link = "https://api.imgflip.com/get_memes";

  $.getJSON(link, {}).done(function (data) {
    AppendData(data);
  });
}

function AppendData(data) {
  console.log(data.data.memes);
  for (var i = 1; i <= 10; i++) {
    var tr = $("<tr>");
    var td1 = $("<td>").html(data.data.memes[i].id);
    var td2 = $("<td>").html(data.data.memes[i].name);
    var td3 = $("<td>").html(data.data.memes[i].url);

    var newimg = $("<img>");
    newimg.attr("src", data.data.memes[i].url);
    newimg.attr("width", 200);
    newimg.attr("height", 200);

    var td4 = $("<td>").html(newimg);
    tr.append(td1);
    tr.append(td2);
    tr.append(td3);
    tr.append(td4);
    $("#Quotes").append(tr);
  }
}

function PopulatePics(img, txt) {
  var newimg = $("<img>"); //Equivalent: $(document.createElement('img'))
  newimg.attr("src", img);
  newimg.attr("width", 200);
  newimg.attr("height", 200);
  var newP = $("<p>").html(txt);
  var div = $("<div>").append(newimg);
  div.addClass("picholder");
  div.append(newP);
  $("#Albums").append(div);
}
