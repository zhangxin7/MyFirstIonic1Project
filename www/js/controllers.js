angular.module('app.controllers', [])

.controller('ActionsheetCtrl', function($scope, $ionicActionSheet, $ionicPopup) {
    $scope.showAtionsheet = function() {
        var hideSheet = $ionicActionSheet.show({
            buttons: [
                {text: '编辑'},
                {text: '查看'}
            ],
            buttonClicked: function(index, obj) {
                console.log(arguments);
            },
            cancelText: '取消',
            cancel: function() {

            },
            destructiveText: '删除',
            destructiveButtonClicked: function() {
                $ionicPopup.confirm({
                    template: '确定删除？',
                    cancelText: '取消',
                    cancelType: 'button-positive',
                    okText: '确定',
                    okType: 'button-assertive'
                }).then(function(res) {
                    hideSheet();

                    console.log(res);
                });
            }
        });
    };
})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
