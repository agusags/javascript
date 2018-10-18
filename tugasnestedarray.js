
function panggilNestedArray(value) {
    var data = [];
    for (var i = 0; i < value.length; i++) {
        data[i] = [value[0][i], value[1][i], value[2][i]];
        
    }
    console.log(data)
}

var nestedArray = [
    [1, 2, 3, 4],
    ['Mark Zuckerberg', 'Elon Musk', 'Bill Gates', 'Steve Jobs'],
    ['Facebook', 'Tesla', 'Microsoft', 'Apple']
]

panggilNestedArray(nestedArray)