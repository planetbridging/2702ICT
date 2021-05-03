import $ from "jquery";
import styles from "./master.css";
import poo from "./imgs/rainbowsmilingpoo.png";
import * as flickr from "./flickr.js";

/*
$("#intro").ready(function(){
    $("#intro").html("Welcome");
    console.log(poo);
    $("#photo").html(`<img src=${poo}>`);
});*/






$(document).ready(function () {

  $("#closecontainer").click(function () {
    //$("#modelcontainer").attr("visibility", "show");
    $("#modelcontainer").addClass("hideItem");
  });

  $("#BtnSearch").click(function () {
    flickr.searchBtn();
  });

  flickr.getLst();
});

function getphotosinfo() {
  $.get(link, function (data) {
    console.log(data);
  });
}



