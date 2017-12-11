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

.controller('BackdropCtrl', function($scope, $ionicBackdrop, $timeout) {
    $scope.showBackdrop = function() {
        $ionicBackdrop.retain();

        // 2秒后关闭
        $timeout(function() {
          $ionicBackdrop.release();
        }, 2000);
    };

    // 背景层显示事件
    $scope.$on('backdrop.shown', function() {
    
    });

    // 背景层隐藏事件
    $scope.$on('backdrop.hidden', function() {
    
    });
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
});
