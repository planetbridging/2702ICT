$(document).ready(function () {
  OnInputChange();
});

function LoadPictures() {
  $("#Albums").html("");
  $.get("./data/photodata.json", function (data) {
    //console.log(data);
    display(data);
  });
}

function display(data) {
  for (let i = 0; i <= data.photos.length; i++) {
    PopulatePics(data.photos[i].file, data.photos[i].title);
  }
}

function OnInputChange() {
  var x = Math.floor(Math.random() * 15) + 1;
  if (isNaN(x) || x == "") {
    LoadPictures();
  } /*else {
    for (var i = 0; i < x; i++) {
      PopulatePics("photos/DSC01049.JPG", "City View");
    }
  }*/
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
