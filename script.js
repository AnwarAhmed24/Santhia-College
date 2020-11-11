 $('.carousel').carousel({
  interval: 3000,
     pause: false
})



 function animate(){
      window.onscroll = function() {
          scroll();
};

function scroll() {
   
  if (document.documentElement.scrollTop > 180) {
      document.querySelector(".box-img").classList.add('slid');  
  } 
}     
  }
          
    setTimeout(animate,1000);  
     

   function scrol(){
        window.scrollTo(0,-1000); 
     }