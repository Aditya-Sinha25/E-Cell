var btnone =document.querySelector('main section a');
btnone.addEventListener('click',function(event){
    event.preventDefault();
    var content=document.getElementById('content');
    
    var interval =setInterval(function(){
        var coordinates =content.getBoundingClientRect();
        if(coordinates.top<= 10){
            clearInterval(interval);
            return;
        }
        window.scrollBy(0,50);
    }, 50);

});