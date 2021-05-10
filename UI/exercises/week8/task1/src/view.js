import $ from "jquery";

export function AppendMeme(num, id, item) {
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
  
  export function showPhoto(id) {
    for (var i = 0; i < lstPhotoStore.length; i++) {
      if (id == lstPhotoStore[i]["id"]) {
        viewPhoto(i);
        break;
      }
    }
  }
  
  export function viewPhoto(itemNumber) {
    var newimg = $("<img>");
    newimg.attr("src", lstPhotoStore[itemNumber]["source"]);
    newimg.attr("id", "imgAuto");
    $("#imgcontainer").html(newimg);
    $("#imgcaption").html(lstPhotoStore[itemNumber]["caption"]);
  }
  
  