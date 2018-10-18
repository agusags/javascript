function panggilShift(){
    var kota = ['denpasar','jakarta','bandung','surabaya'];
    console.log(kota);
    console.log("=============");
    //kota = kota.shift();

    kota2 = kota.shift();
    console.log(kota2)
    return kota;

}

console.log(panggilShift())