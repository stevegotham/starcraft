angular.module('app').controller('searchBarController',['factoryName', searchBar])

function searchBar(factoryName) {

   var searchBar = this

   searchBar.players = factoryName.players
   searchBar.filterResult = factoryName.filterResult;
   searchBar.searchResult = factoryName.searchResult;
   searchBar.ascending = factoryName.ascending;
   
   searchBar.runfunc = function() {
        var searchValue = [
            'username',
            'fullname',
            'region',
            'race',
            'wins',
            'losses'
        ]
        for(var i=0;i<searchValue.length;i++) {
            if (searchBar.searchResult.value === searchValue[i]) {
                searchBar.searchResult.value = searchValue.indexOf(searchValue[i]).toString()
            }
        }
    }

    searchBar.enter = function() {
        if(event.keyCode === 13) {
            event.target.blur();
        }
    }
    
}