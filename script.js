var color=['red','yellow','gree','orange','#F0F8FF', '#008B8B'];

var c = 0;
var d = 0;

window.onload=function(){
    alert('js is running :)');

this.setTimeout(blink,1000);

alert('after the blink function');

alert(color.length);

}

function blink(){
var first =document.getElementsByClassName('first')[0];

var second = document.getElementById('second');


    

    
        this.setInterval(function(){
            c++;
            d+=30;
            console.log(c);
            
            if(c == color.length || d >360)
                {
                      c = 0;
                    
                }   
            first.style.color = color[c];
            first.style.transitionDuration= '0.5'; 
            first.style.boxShadow = '' + c + ' ' +c++ +' '+ --c + + ' ' + color[c];
            first.style.transform= 'rotate('+d+'deg)';
            first.style.position = "relative";
            first.style.right = d%10;+'px';

        },1000);

        alert("after the update C");

        
    
}


 
