'use strict';

app.controller('StoryDetailCtrl', function ($scope, story) {
	$scope.story = story;
	// $scope.users = users;
	$scope.$watch('story', function () {
		$scope.story.save();
	}, true);
});