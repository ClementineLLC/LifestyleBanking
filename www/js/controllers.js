angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});
  $scope.spend = "$2,145";
  $scope.chats = Chats.all();
  
    // Chart.js Data
    $scope.data = [
      {
        value: 300,
        color:'#F7464A',
        highlight: '#FF5A5E',
        label: 'Red'
      },
      {
        value: 50,
        color: '#46BFBD',
        highlight: '#5AD3D1',
        label: 'Green'
      },
      {
        value: 100,
        color: '#FDB45C',
        highlight: '#FFC870',
        label: 'Yellow'
      }
    ];


    // Chart.js Options
    $scope.options = 
    {
      // Sets the chart to be responsive
      responsive: true,

      //Boolean - Whether we should show a stroke on each segment
      segmentShowStroke : true,

      //String - The colour of each segment stroke
      segmentStrokeColor : '#fff',

      //Number - The width of each segment stroke
      segmentStrokeWidth : 2,

      //Number - The percentage of the chart that we cut out of the middle
      percentageInnerCutout : 50, // This is 0 for Pie charts

      //Number - Amount of animation steps
      animationSteps : 100,

      //String - Animation easing effect
      animationEasing : 'easeOutBounce',

      //Boolean - Whether we animate the rotation of the Doughnut
      animateRotate : true,

      //Boolean - Whether we animate scaling the Doughnut from the centre
      animateScale : false,

      //String - A legend template
      legendTemplate : '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'

    };

  $scope.remove = function(chat) {
    Chats.remove(chat);

  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, $ionicPopup, $timeout, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
  $scope.spend = "$2,145";

  $scope.showPopup = function() {
  $scope.data = {}

  // An elaborate, custom popup
  var myPopup = $ionicPopup.show({
    template: '<input type="number" min="1" step="any" ng-model="data.amount">',
    title: 'Please enter transfer amount:',
    subTitle: 'Please use positive numbers with 2 decimal places',
    scope: $scope,
    buttons: [
      { text: 'Cancel' },
      {
        text: '<b>Transfer</b>',
        type: 'button-calm',
        onTap: function(e) {
          if(!$scope.data.amount){
            $scope.showAlert();

          }
          else 
          {
            $scope.showConfirm();
            return $scope.data.amount;

          }
        }
      }
    ]
  });
  myPopup.then(function(res) {
    console.log('Tapped!', res);
  });
 };

// An alert dialog
 $scope.showAlert = function() {
   var alertPopup = $ionicPopup.alert({
     title: 'Please enter an amount to transfer',
     okType: 'button-calm'
     
   });
   alertPopup.then(function(res) {
     console.log('Thank you for not eating my delicious ice cream cone');
   });
 };


  $scope.showConfirm = function() {
   var confirmPopup = $ionicPopup.confirm({
     title: 'Confirm Transfer of $' + $scope.data.amount,
     template: 'Are you sure you want to complete this transfer?',
     okType: 'button-calm'
   });
  
   confirmPopup.then(function(res) {
     if(res) {
       console.log('You are sure');
     } else {
       console.log('You are not sure');
     }
   });
 };
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
