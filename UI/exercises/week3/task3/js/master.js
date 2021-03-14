$(document).ready(function () {
  LoadData();
});

function LoadData() {
  var link =
    "https://swquotesapi.digitaljedi.dk/api/SWQuote/RandomStarWarsQuote";

  $.getJSON(link, {}).done(function (data) {
    AppendData(data, "getJSON");
  });

  $.get(link, function (data) {
    AppendData(data, "get");
  });

  fetch(link)
    .then((response) => response.json())
    .then((data) => AppendData(data, "fetch"));
}

function AppendData(data, dtype) {
  var tr = $("<tr>");
  var td1 = $("<td>").html(data.id);
  var td2 = $("<td>").html(data.content);
  var td3 = $("<td>").html(data.faction);
  var td4 = $("<td>").html(dtype);
  tr.append(td1);
  tr.append(td2);
  tr.append(td3);
  tr.append(td4);
  $("#Quotes").append(tr);
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
