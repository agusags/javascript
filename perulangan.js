// function panggilPerulangan() {
//     var kota = ['denpasar', 'jakarta', 'medan'];
//     for (i = 0; i < kota.length; i++){
//         console.log(item)
//         console.log(index)
//         console.log(array)
//     }
// }

// function panggilPerulangan() {
//     var kota = ['denpasar', 'jakarta', 'medan'];
//     kota.forEach(function(item,index,array){
//         console.log(item)
//         console.log(index)
//         console.log(array)
//     })
// }

function panggilPerulangan() {
    var kota = ['denpasar', 'jakarta', 'medan'];
    kota.map((item,index,array)=>{
        console.log(item)
        console.log(index)
        console.log(array)
    })
}

panggilPerulangan();