document.addEventListener("DOMContentLoaded", function (event) {
  //OnInputChange();
});
function OnInputChange() {
  var x = document.getElementById("TxtSearch").value;
  document.getElementById("Albums").innerHTML = "";
  //var x = Math.floor(Math.random() * 15) + 1;
  if (isNaN(x) || x == "") {
    //alert("Must input numbers");
    //document.getElementById("MainPics").style.visibility = "visible";
    PopulatePics("photos/DSC01049.JPG", "City View");
    PopulatePics("photos/DSC01066.JPG", "Ferris Wheel");
    PopulatePics("photos/DSC02511.JPG", "Red building");
    PopulatePics("photos/DSC03810.JPG", "City");
    PopulatePics("photos/DSC05750.JPG", "Sunset");
    AddLink(x);
  } else {
    for (var i = 0; i < x; i++) {
      PopulatePics("photos/DSC01049.JPG", "City View");
    }
  }
}

function PopulatePics(img, txt) {
  const newDiv = document.createElement("div");
  newDiv.className = "picholder";
  const newPic = document.createElement("img");
  newPic.src = img;
  newPic.width = 200;
  newPic.height = 200;
  newDiv.appendChild(newPic);
  const newP = document.createElement("p");
  newP.innerText = txt;
  newDiv.appendChild(newP);
  document.getElementById("Albums").appendChild(newDiv);
}

function AddLink(txt) {
  const newLi = document.createElement("li");
  const newA = document.createElement("a");
  newA.innerText = txt;
  newA.href = "#";
  newLi.appendChild(newA);
  document.getElementById("LstLinks").appendChild(newLi);
}
