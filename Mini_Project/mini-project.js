function notification(){
    //variables declaration

    var weight=document.getElementById("wgh").value;
    var length=document.getElementById("lh").value;

    //input check conditions

    // Length test
    if (length == ""){
    sp1.innerHTML ="Length field is empty! type a value";return false;
}
    else{
        if(isNaN(length)) 
    { sp1.innerHTML="Length must be a number !"; return false;}
        else{
            if((length<100)||(length>300)) 
            { sp1.innerHTML="lenght between 100-300 cm !"; return false;}
        }
    }
//Weight test
    if (weight == ""){
        sp2.innerHTML="Weight field is empty! type a value";return false;
    }
      else{
            if(isNaN(weight)) 
            { sp2.innerHTML="Weight must be a number !"; return false;}
        else{
            if((weight<30)||(weight>300))
            { sp2.innerHTML="Weight between 30-300 kg !";return false;}
    }  }
// Result Printing   

 if ((length == weight)&&( (length !="")&&(weight !=""))){
            window.location.href ="p_bdy.html"; return false;

    } 
    else{
        if (length > weight){
            window.location.href ="lsw.html"; return false;
        }
        else{
            if ( length < weight ){
                window.location.href ="gsw.html"; return false;
            }
        }
    }      
    
}

