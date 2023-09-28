
function saklar(kondisi){
    let gam = document.getElementById("gambar");
    let gam1 = document.getElementById("gambar1");
    if (kondisi == 0) {
        gam.src = "off.gif";  
    } 
    if(kondisi == 1){
        gam.src = "on.gif";
    }
    if (kondisi == 'b') {
        gam1.src = "off.gif";
    } 
    if(kondisi == 'a'){
        gam1.src = "on.gif";
    }

}