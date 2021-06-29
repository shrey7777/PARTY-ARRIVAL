var guest=[];



//for getting names and display linearly
function kihy(){
    var name= document.getElementById("i1").value;
    guest.push(name);
    document.getElementById("lkj").innerHTML= guest;
}


//display names vertically and sorted
function kehy(){
    guest.sort();
    var i=guest.join("<br>");
    document.getElementById("jkl").innerHTML=i;  
}
function klhy(){
    var s=document.getElementById("i2").value;
    var found=0;
    var j;
    for(j=0; j<guest.length; j++)
    {
        if(s==guest[j]){
            found=found=1;

        }
    }
    document.getElementById("lkjh").innerHTML="name found"+found+"times/s";
    console.log("found name"+found+"time/s");
}
function arrange(){
    var i=guest.join("<br>");
    document.getElementById("gfd").innerHTML=i;
}