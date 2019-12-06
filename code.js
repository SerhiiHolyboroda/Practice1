let d = document.querySelector('#box');
  
d.onmouseout = function(){
     
    d.innerHTML += ' <div class="boxe"><div>'
   if(d.childElementCount > 10){
   let d = document.querySelector('.boxe');
       d.style.marginTop = '200px;'
       d.innerHTML += ' <div class="box1"><div>'
      
   }
}
