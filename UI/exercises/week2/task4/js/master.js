var lstpics = [
  ["photos/DSC01049.JPG", "City View"],
  ["photos/DSC01066.JPG", "Ferris Wheel"],
  ["photos/DSC02511.JPG", "Red building"],
  ["photos/DSC03810.JPG", "City View"],
  ["photos/DSC05750.JPG", "Sunset"],
];

document.addEventListener("DOMContentLoaded", function (event) {
  //OnInputChange();
});
function OnInputChange() {
  var x = document.getElementById("TxtSearch").value;

  //var x = Math.floor(Math.random() * 15) + 1;
  if (isNaN(x) || x == "") {
    //alert("Must input numbers");
    //document.getElementById("MainPics").style.visibility = "visible";
    var tmplst = [];
    for (var i = 0; i < lstpics.length; i++) {
      //PopulatePics("photos/DSC01049.JPG", "City View");
      var txtfound = lstpics[i][1].includes(x);
      if (txtfound) {
        tmplst.push(lstpics[i]);
      }
    }

    if (tmplst.length == 0) {
      document.getElementById("Albums").innerHTML = "";
      AddLink(x);
      for (var i = 0; i < lstpics.length; i++) {
        PopulatePics(lstpics[i][0], lstpics[i][1]);
      }
    } else {
      document.getElementById("Albums").innerHTML = "";
      for (var i = 0; i < tmplst.length; i++) {
        PopulatePics(tmplst[i][0], tmplst[i][1]);
      }
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
