 window.addEventListener('load', ()=>{
    
     // CALL
     var myFullpage = new fullpage('#fullpage', {
        navigation: true,
        navigationPosition: 'right',
        showActiveTooltip: true,
        slidesNavigation: true,
        slidesNavPosition: 'bottom',
        loopBottom: true,
        loopTop: true,
        controlArrows: true,
     });
     
     
     
     class ImageObj{
        constructor(el) {
            this.el = el; // SAVE THE DOM ELEMENT
            this.rangeInput = el.querySelector('input[type="range"]');
            this.imageViewer = el.querySelector('img');
            
            //URL
            this.urlImg = el.getAttribute('data-url');
            
            
            //METHOD
            this.rangeInput.addEventListener('input', ()=>{
                let i = this.rangeInput.value;
                
                let e = (i < 10) ? '0'+i : i;
                
                this.move(e);
            });
        }
        move(i){
            this.imageViewer.src = this.urlImg.replace('****', i);
        }
         
     }
     
     let slides = document.querySelectorAll('.slide .image');
     
     slides.forEach(el => {
         new ImageObj(el);
     });
 });
 
 
 // FNC OPEN LOGIN
 
 function openLoginSection(){
     document.querySelector('.login#login').classList.toggle('open');
 }

  function openRegisterSection(){
     document.querySelector('.register#register').classList.toggle('open');
 }
 
 
