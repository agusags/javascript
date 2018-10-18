function panggilMap(){
    var kota = ['denpasar', 'jakarta', 'medan'];
    kota.map((item, index, array) => {
        console.log(item)
        console.log(index)
        console.log(array)
    })
}

panggilMap()