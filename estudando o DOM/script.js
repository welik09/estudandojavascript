var p = document.getElementsByTagName('p');

/*
p[1].innerHTML = "Manipulado via JS"

for(var i = 0; i < p.length; i++){
    p[i].innerHTML = "este e o JAVASCRIPT + " + i;
}
*/

for(var i = 0; i < 10; i++){
    p[0].innerHTML = p[0].innerHTML + i;
}