function panggilRegexp(value) {
    let data = "Belajar html dan css Tahun Bersama Niomic";
    valuearr = value.split(" ")
    reg1 = new RegExp(valuearr[0]);
    reg2 = new RegExp(valuearr[1]);

    cekreg1 = reg1.test(data);
    cekreg2 = reg2.test(data);

    if(cekreg1&&cekreg2){
        text = valuearr[0]+" "+valuearr[1]
    }
    else if(cekreg1){
        text = valuearr[0]
    }
    else if(cekreg2){
        text = valuearr[1]
    }
    console.log(text)
}

panggilRegexp("Belajar html");
panggilRegexp("Belajar javascript");
panggilRegexp("Belajar css");

panggilRegexp("Belajar php");