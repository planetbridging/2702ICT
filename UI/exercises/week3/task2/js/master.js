$(document).ready(function () {
  LoadPictures("");
});

function LoadPictures(find) {
  $("#Albums").html("");
  $.get("./data/photodata.json", function (data) {
    //console.log(data);
    display(data, find);
  });
}

function display(data, find) {
  for (let i = 0; i < data.photos.length; i++) {
    if (find != "") {
      var txtfound = data.photos[i].title.includes(find);
      if (txtfound) {
        PopulatePics(data.photos[i].file, data.photos[i].title);
      }
    } else {
      PopulatePics(data.photos[i].file, data.photos[i].title);
    }
  }
}

function OnInputChange() {
  var txt = $("#TxtSearch").val();
  if (txt != "") {
    LoadPictures(txt);
  } else {
    LoadPictures("");
  }
  /*var x = Math.floor(Math.random() * 15) + 1;
  if (isNaN(x)) {
    LoadPictures();
  } else {
    console.log("yay");
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
