function panggilRegexp(value) {
    var ambilData = value.match(/\s/g)
   console.log(ambilData)
   console.log("Banyaknya Spasi : ",ambilData.length)
}

panggilRegexp("Bulan ke 1 sd ke 4");