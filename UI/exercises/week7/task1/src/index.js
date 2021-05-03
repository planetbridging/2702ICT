import $ from "jquery";
import styles from "./master.css";
import poo from "./imgs/rainbowsmilingpoo.png";


$("#intro").ready(function(){
    $("#intro").html("Welcome");
    console.log(poo);
    $("#photo").html(`<img src=${poo}>`);
});