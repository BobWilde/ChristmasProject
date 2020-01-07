function logic(){
    if(document.getElementById('f1').selected){
        var first = 0;
    }
    else{
        var first = 1;
    }
    if(document.getElementById('s1').selected){
        var second = 0;
    }
    else{
        var second = 1;
    }

    if(document.getElementById('r1').checked){
        document.getElementById('i').src='AND.png';
        document.getElementById('out').innerHTML= first&&second;
    }
    if(document.getElementById('r2').checked){
        document.getElementById('i').src='OR.png';
        document.getElementById('out').innerHTML= first||second;
    }
    if(document.getElementById('r3').checked){
        document.getElementById('i').src='XOR.png';
        document.getElementById('out').innerHTML= ( first && !second ) || ( !first && second );
    }
    if(document.getElementById('r4').checked){
        document.getElementById('i').src='NOR.png';
        document.getElementById('out').innerHTML=!(first||second);
    }
    if(document.getElementById('r5').checked){
        document.getElementById('i').src='NAND.jpg';
        document.getElementById('out').innerHTML= !(first&&second);
    }
}
