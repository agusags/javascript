function panggilSplice(){
    var kota = ['denpasar','jakarta','bandung','surabaya'];
    console.log(kota);
    //kota.splice(2,0,'tabanan');
    kota.splice(2,1);
    return kota;
}

console.log(panggilSplice())