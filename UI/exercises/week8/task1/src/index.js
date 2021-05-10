import $ from "jquery";
import hello from "./templates/hello.handlebars";

/*
$("#intro").ready(function(){
    $("#intro").html("Welcome");
    console.log(poo);
    $("#photo").html(`<img src=${poo}>`);
});*/



//example
let name = {loggedin: false,first: "Shannon", last: "Setter"};

$(document).ready(function () {
  let temp = hello(name);
  $("#example").html(temp);
});
