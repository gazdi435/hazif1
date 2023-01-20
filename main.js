function megszerkezthetoe(){
    var aOldal = document.getElementById("egyikBefogo").value;
    var bOldal = document.getElementById("masikBefogo").value;
    var cOldal = document.getElementById("atfogo").value;

    if (Math.pow(parseFloat(aOldal), 2)+ Math.pow(parseFloat(bOldal), 2) ==Math.pow(parseFloat(cOldal), 2)){
        alert("A beírt információk alapján a háromszög megszerkezthető!");
    }
    else    {
        alert("Nem!");
    }
}

function veletlen(){
    document.getElementById("egyikBefogo").value = (Math.random() * 99+10).toFixed(3);
    document.getElementById("masikBefogo").value = (Math.random() * 99+10).toFixed(3);
}

function atfogoKiszamitasa(){
    var aOldal = document.getElementById("egyikBefogo").value;
    var bOldal = document.getElementById("masikBefogo").value;
    document.getElementById("atfogo").value = Math.sqrt(Math.pow(parseFloat(aOldal), 2) 
    + Math.pow(parseFloat(bOldal, 2)));
}