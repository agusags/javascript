
function balikKata(kata) {
    var hasil = []
    for(i=0;i<kata.length;i++){
        
        hasil[i] = kata.slice(kata.length-(i+1),(kata.length-(i+1))+1)
        
    }
    var text = hasil.toString()
    return text.replace(/,/gi,"")
    
}

// testCase
console.log(balikKata("Niomic!"))
console.log(balikKata("JavaScript"))
console.log(balikKata("alohahola"))
console.log(balikKata("Jawa_Barat"))  