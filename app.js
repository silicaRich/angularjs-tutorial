(function () {
    var app = angular.module('gemStore', []);


    app.directive('productGallery', function () {
        return {
            restrict: 'E',
            templateUrl: 'product-gallery.html',
            controller: function () {
                this.current = 0;
                this.setCurrent = function (imageNumber) {
                    this.current = imageNumber || 0;
                };
            },
            controllerAs: 'gallery'
        };
    });
    app.controller('StoreController', function () {
        this.products = gems;
    });
    app.controller("ReviewController", function () {

        this.review = {};

        this.addReview = function (product) {
            product.reviews.push(this.review);
            this.review = {};
        };

    });
    app.directive("productDescriptions", function () {
        return {
            restrict: 'E',
            templateUrl: "product-description.html"
        };
    });
    app.directive("productReviews", function () {
        return {
            restrict: 'E',
            templateUrl: "product-reviews.html"
        };
    });

    app.directive("productSpecs", function () {
        return {
            restrict: "A",
            templateUrl: "product-specs.html"
        };
    });

    app.directive("productTabs", function () {
        return {
            restrict: "E",
            templateUrl: "product-tabs.html",
            controller: function () {
                this.tab = 1;

                this.isSet = function (checkTab) {
                    return this.tab === checkTab;
                };

                this.setTab = function (activeTab) {
                    this.tab = activeTab;
                };
            },
            controllerAs: "tab"
        };
    });

    app.controller('StoreController', ['$http', function ($http) {
        var store = this;
        store.products = [];
        $http.get('store-products.js').success(function (data) {
            store.products = data;
            console.log(store.products);
        }).error(function (data) {
            console.log(data);
        });;

    }]);

})();