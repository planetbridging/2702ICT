var chattoggle = true;
//var msgs = new Array();

var random_color = LstColors[Math.floor(Math.random() * LstColors.length)];
var random_animal = LstAnimals[Math.floor(Math.random() * LstAnimals.length)];
var random_number = Math.floor(Math.random() * 1000);

var random_name = random_color+random_animal+random_number;





function BtnPress(id){
  console.log("BTN: " + id);

  if(id == "ChatToggle"){
    if(!chattoggle){
      $( "#ChatHolder" ).removeClass(  "h-75" );
      $( "#Chat" ).addClass(  "d-none" );
      chattoggle = true;
    }else{
      $( "#ChatHolder" ).addClass(  "h-75" );
      $( "#Chat" ).removeClass(  "d-none" );
      chattoggle = false;
      
    }
  }
}

//var LstMsgs = new Array();
var LstMsgs = [];
var welcome = { name: 'Welcome',time: "", msg: "Welcome to 2702ICT chat"};
var welcome2 = { name: 'ddd',time: "", msg: "Welcome to 2702ICT chat"};
LstMsgs.push(welcome);



function getStamp(){
  var currentdate = new Date(); 
var datetime = currentdate.getDate() + "/"
                + (currentdate.getMonth()+1)  + "/" 
                + currentdate.getFullYear() + "  "  
                + currentdate.getHours() + ":"  
                + currentdate.getMinutes() + ":" 
                + currentdate.getSeconds();
                return datetime;
}


//angularjs
var mainApp = angular.module("mainApp", []); 


mainApp.factory('valueService', function($interval) {
  var service = {
    value: 0,
  };

  return service;
});

mainApp.controller('SomeController', function($scope, $interval, valueService) {
  $scope.name = 'Some Controller';

  start();      // this line will execute when constructor initiates, starting the whole thing.

  function start() {
    $interval(function(){
      valueService.value = getStamp();   // this ctrl increments a value of the shared service (that the other controller uses to update its view)
    }, 1000);
  }
});


mainApp.controller('AnotherController', function($scope, valueService) {
  $scope.name = 'Another Controller';
  $scope.valueService = valueService;
});

    mainApp.controller('MsgController',
[
  '$scope',
  '$window',
  function($scope, $window) {
    
    $scope.tags = LstMsgs;

        var socket = io();
      
  socket.on('chat message', function(msg) {
    console.log(msg);
    if(msg.startsWith("joined: ")){
      var joined = msg.split("joined: ");
      var data = { name: "User " + joined[1] + " has joined",time: getStamp(), msg: ""};
      LstMsgs.push(data);
      console.log("update");
    }
  });
  socket.emit('chat message', "joined: " + random_name);

      }
    ]
  );


angular.element(document).ready(function () {
  //$scope.LstMsgs = new Array();

  console.log("Welcome to 2702ICT");
  
  $( "button" ).click(function() {
    BtnPress($(this).attr('id'));
  });

  $("#UserName").val(random_name);
});



/*
mainApp.controller('MsgController',
    [
      '$scope',
      '$window',
      function($scope, $window) {
        $scope.tags = $window.LstMsgs;
      }
    ]
  );
/*
mainApp.controller('MsgController', function ($scope, $location) {

  $scope.availableList = [];
  
  $scope.init = function () {
      $scope.availableList = LstMsgs;
      console.log("yay");
  }
});

/*
mainApp.factory('LstMsgs', function($scope) { 
  return { 
      name: $scope.msg
  }; 
});

mainApp.controller('MsgController', 
                function($scope, LstMsgs) { 
    $scope.array = LstMsgs; 
    $scope.init = function () {
      $scope.availableList = data;
  }
});

/*
mainApp.controller('MsgController', ['$scope', '$window', function($scope, $window) {
  //$scope.array = $window.msgs;
  $scope.array = $scope.msgs;
}]);*/