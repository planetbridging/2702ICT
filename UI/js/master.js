var chattoggle = true;
//var msgs = new Array();

var random_color = LstColors[Math.floor(Math.random() * LstColors.length)];
var random_animal = LstAnimals[Math.floor(Math.random() * LstAnimals.length)];
var random_number = Math.floor(Math.random() * 1000);

var random_name = random_color + random_animal + random_number;

function BtnPress(id) {
  console.log("BTN: " + id);

  if (id == "ChatToggle") {
    if (!chattoggle) {
      $("#ChatHolder").removeClass("h-75");
      $("#Chat").addClass("d-none");
      chattoggle = true;
    } else {
      $("#ChatHolder").addClass("h-75");
      $("#Chat").removeClass("d-none");
      chattoggle = false;
    }
  } else if (id == "BtnMsg") {
    var msg = $("#TxtMsg").val();
    $("#TxtMsg").val("");
    socket.emit("msg", msg);
  }
}

function LinkPress(href) {
  console.log(href);

  if (href == "#task1") {
    $("#ShowLink").attr("href", "/exercises/week1/task1");
    $("#ShowPath").text("Week 1 Task 1 /exercises/week1/task1");
    $("#ShowCase").attr("src", "/exercises/week1/task1");
  } else if (href == "#task2") {
    $("#ShowLink").attr("href", "/exercises/week1/task2");
    $("#ShowPath").text("Week 1 Task 1 /exercises/week1/task2");
    $("#ShowCase").attr("src", "/exercises/week1/task2");
  } else if (href == "#task3") {
    $("#ShowLink").attr("href", "/exercises/week1/task3");
    $("#ShowPath").text("Week 1 Task 1 /exercises/week1/task3");
    $("#ShowCase").attr("src", "/exercises/week1/task3");
  } else if (href == "#task4") {
    $("#ShowLink").attr("href", "/exercises/week1/task4");
    $("#ShowPath").text("Week 1 Task 1 /exercises/week1/task4");
    $("#ShowCase").attr("src", "/exercises/week1/task4");
  } else if (href == "#task5") {
    $("#ShowLink").attr("href", "/exercises/week1/task5");
    $("#ShowPath").text("Week 1 Task 1 /exercises/week1/task5");
    $("#ShowCase").attr("src", "/exercises/week1/task5");
  }
}

var socket = io();
var LstMsgs = [];
var LstUniqId = [];
var welcome = { name: "Welcome", time: "", msg: "Welcome to 2702ICT chat" };
var welcome2 = { name: "ddd", time: "", msg: "Welcome to 2702ICT chat" };
LstMsgs.push(welcome);

function getStamp() {
  var currentdate = new Date();
  var datetime =
    currentdate.getDate() +
    "/" +
    (currentdate.getMonth() + 1) +
    "/" +
    currentdate.getFullYear() +
    "  " +
    currentdate.getHours() +
    ":" +
    currentdate.getMinutes() +
    ":" +
    currentdate.getSeconds();
  return datetime;
}

//angularjs
var mainApp = angular.module("mainApp", []);

mainApp.factory("valueService", function ($interval) {
  var service = {
    value: 0,
  };

  return service;
});

mainApp.controller(
  "SomeController",
  function ($scope, $interval, valueService) {
    $scope.name = "Some Controller";

    start(); // this line will execute when constructor initiates, starting the whole thing.

    function start() {
      $interval(function () {
        valueService.value = getStamp(); // this ctrl increments a value of the shared service (that the other controller uses to update its view)
      }, 1000);
    }
  }
);

mainApp.controller("AnotherController", function ($scope, valueService) {
  $scope.name = "Another Controller";
  $scope.valueService = valueService;
});

mainApp.controller("MsgController", [
  "$scope",
  "$window",
  function ($scope, $window) {
    $scope.tags = LstMsgs;

    socket.on("msg", function (msg) {
      var data = { name: msg.name, time: getStamp(), msg: msg.message };
      LstMsgs.push(data);
    });

    socket.on("server_msg", function (msg) {
      var data = { name: msg + " has joined", time: getStamp(), msg: "" };
      LstMsgs.push(data);
    });

    socket.on("unique_users", function (msg) {
      $("#unique_users").text(msg);
    });

    socket.on("user_left", function (msg) {
      var data = { name: msg + " has left", time: getStamp(), msg: "" };
      LstMsgs.push(data);
    });

    socket.emit("user_joined", random_name);
  },
]);

angular.element(document).ready(function () {
  //$scope.LstMsgs = new Array();

  console.log("Welcome to 2702ICT");

  $("button").click(function () {
    BtnPress($(this).attr("id"));
  });

  $("a").click(function () {
    LinkPress($(this).attr("href"));
  });

  $("#UserName").val(random_name);
});
