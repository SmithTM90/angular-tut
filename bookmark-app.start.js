angular.module('bookmark', [

])
.controller('MainCtrl', function($scope) {
	$scope.categories = [
		{"id": 0, "name": "Development"},
		{"id": 1, "name": "Design"},
		{"id": 2, "name": "Exercise"},
		{"id": 3, "name": "Humor"},
	];

	$scope.bookmarks = [
		{"id": 0, "title": "AngularJS", "url": "http://angularjs.org", "category": "Development"},
		{"id": 1, "title": "Egghead.io", "url": "http://angularjs.org", "category": "Development"},
		{"id": 2, "title": "A List Apart", "url": "http://angularjs.org", "category": "Design"},
		{"id": 3, "title": "One Page Love", "url": "http://angularjs.org", "category": "Design"},
		{"id": 4, "title": "MobilityWOD", "url": "http://angularjs.org", "category": "Exercise"},
		{"id": 5, "title": "Robb Wolf", "url": "http://angularjs.org", "category": "Exercise"},
		{"id": 6, "title": "Senor Gif", "url": "http://angularjs.org", "category": "Humor"},
		{"id": 7, "title": "Wimp", "url": "http://angularjs.org", "category": "Humor"},
		{"id": 8, "title": "Dump", "url": "http://angularjs.org", "category": "Humor"}
	];
});