
var conquistas = document.getElementById("conq");
var xhr = new XMLHttpRequest();
var contagem = 0;
xhr.open("GET", "../img/logos", true);

xhr.responseType = 'document';

xhr.onload = () => {
  if (xhr.status === 200) {
    var elements = xhr.response.getElementsByTagName("a");
    
    for (x of elements) {
      let linka = document.createElement("a");
      let img = document.createElement("img");
  
     
      

      if ( x.href.match(/\.(jpe?g|png|gif)$/) ) { 
          

          img.src = x.href;
          img.className = "item";
          linka.tagName = img.name;
          linka.href = "#";
          linka.append(img);
          $(".lista").append(linka);
          contagem++;
         
        
          conquistas.innerHTML = "Conquistas : " + contagem;
        
      } 
    };
    

  } 
  else {
    alert('Request failed. Returned status of ' + xhr.status);
  }
}
xhr.send()


