Screwd.controller("PageController", function ($scope) {
   chrome.tabs.query({'active': true}, function (tabs) {
       if(tabs.length > 0) {
           chrome.tabs.sendMessage(tabs[0].id, {'action' :'Replace'}, function (response) {
               $scope.info = response;
           });
       }
   })
});