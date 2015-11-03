
angular.module('app').
    filter('ownImprovement', filterOwnImprovement);

function filterOwnImprovement() {
 
    return function (items, filterActive, userName) {
        var filtered = [];
        if (filterActive == false)
            return items;
        angular.forEach(items, function (item) {
            if (item.Owner == userName) {
                filtered.push(item);
            }
        });
        return filtered;
    };
}
