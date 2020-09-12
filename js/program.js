var devText = document.getElementById("desenvolvimento");
var compText = document.getElementById("comp");
var horas = document.getElementById("hour");



var devType = ["Back-End","Front-End"];
var stackType = ["C#","Java Script","Java","Pyhton","NodeJS","React","Flutter","Pyhton"]
var hour = 122;
var min = 29;




devText.innerHTML  = "Desenvolvedor(a) " + devType[0];
compText.innerHTML = "Competência Relevante : "+stackType[stackType.length - 1];
horas.innerHTML = "Horas de estudo:  " +hour+"h " + min+"m";



