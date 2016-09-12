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

	$scope.currentCategory = null;

	function setCurrentCategory(category) {
		$scope.currentCategory = category;

		cancelCreating();
		cancelEditing();
	}

	function isCurrentCategory(category) {
		return $scope.currentCategory !== null && category.name === $scope.currentCategory.name;
	}

	$scope.setCurrentCategory = setCurrentCategory;
	$scope.isCurrentCategory = isCurrentCategory;

	function resetCreateForm() {
		$scope.newBookmark = {
			title: '',
			url: '',
			category: $scope.currentCategory.name
		}
	}

	function createBookmark(bookmark) {
		bookmark.id = $scope.bookmarks.length;
		$scope.bookmarks.push(bookmark);

		resetCreateForm();
	}

	$scope.createBookmark = createBookmark;

	$scope.editedBookmark = null;

	function setEditedBookmark(bookmark) {
		$scope.editedBookmark = angular.copy(bookmark);
	}

	function updateBookmark(bookmark) {
		var index = _.findIndex($scope.bookmarks, function(b) {
			b.id == bookmark.id
		});
		$scope.bookmarks(index) = bookmark;
		$scope.editedBookmark = null;
		$scope.isEditing = false;
	}

	function isSelectedBookmark(bookmarkID) {
		return $scope.editedBookmark !== null && $scope.editedBookmark.id === bookmarkID;
	}

	function deleteBookmark(bookmark) {
		_.remove($scope.bookmarks, function(b) {
			return b.id == bookmark.id;
		});
	}

	$scope.deleteBookmark = deleteBookmark;

	$scope.isSelectedBookmark = isSelectedBookmark;

	$scope.updateBookmark = updateBookmark;

	$scope.setEditedBookmark = setEditedBookmark;w

	$scope.isCreating = false;
	$scope.isEditing = false;

	function startCreating() {
		$scope.isCreating = true;
		$scope.isEditing = false;

		resetCreateForm();
	}

	function cancelCreating() {
		$scope.isCreating = false;
	}

	function startEditing() {
		$scope.isCreating = false;
		$scope.isEditing = true;
	}

	function cancelEditing() {
		$scope.isEditing = false;
	}

	function shouldShowCreating() {
		return $scope.currentCategory && !$scope.isEditing;
	}

	function shouldShowEditing() {
		return $scope.isEditing && !$scope.isCreating;
	}

	$scope.startCreating = startCreating;
	$scope.cancelCreating = cancelCreating;
	$scope.startEditing = startEditing;
	$scope.cancelEditing = cancelEditing;
	$scope.shouldShowEditing = shouldShowEditing;
	$scope.shouldShowCreating = shouldShowCreating;

});