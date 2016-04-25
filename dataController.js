angular.module('app').controller("ctrl",['factoryName', ctrlFunc])

function ctrlFunc(factoryName) {
    var ctrl = this
    
    ctrl.players = factoryName.players
    ctrl.counter = {page:0}
    ctrl.filterResult = factoryName.filterResult;
    ctrl.searchResult = factoryName.searchResult;
    ctrl.ascending = factoryName.ascending;

    ctrl.currentPage = function() {
        return ((ctrl.counter.page+20)/20)
    }
    ctrl.firstPage = function() {
        ctrl.counter = {page:0}
    }
    ctrl.previousPage = function() {
        if(ctrl.counter.page > 0) {
            ctrl.counter.page -=20
        }
    }
    ctrl.nextPage = function() {
        if(ctrl.counter.page < 80) {
            ctrl.counter.page += 20
        }
    }    
    ctrl.lastPage = function() {
        ctrl.counter = {page:80}
    }

}