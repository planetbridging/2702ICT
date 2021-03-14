$(document).ready(function () {
  OnInputChange();
});
function OnInputChange() {
  $("#Albums").html("");
  var x = Math.floor(Math.random() * 15) + 1;
  if (isNaN(x) || x == "") {
    //alert("Must input numbers");
    //document.getElementById("MainPics").style.visibility = "visible";
    PopulatePics("photos/DSC01049.JPG", "City View");
    PopulatePics("photos/DSC01066.JPG", "Ferris Wheel");
    PopulatePics("photos/DSC02511.JPG", "Red building");
    PopulatePics("photos/DSC03810.JPG", "City");
    PopulatePics("photos/DSC05750.JPG", "Sunset");
  } else {
    for (var i = 0; i < x; i++) {
      PopulatePics("photos/DSC01049.JPG", "City View");
    }
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
