function panggilBilanganKelipatan(){
    var bilanganKelipatan = [];

    for (var i = 1; i < 50; i++) {
        if(i%5 === 0){
            bilanganKelipatan.push(i)
        }
    }

    return bilanganKelipatan;
}

console.log(panggilBilanganKelipatan())