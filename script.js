
console.log("hey u r in javascript");

    var id = document.getElementById("home-t");

    id.addEventListener('click' , function(){
           console.log("u are in loop");
        
             let curr = 0;
             let target = 0;
             console.log("u are in home");

             var scroll = setInterval(function(){
                if(curr >= target){
                    clearInterval(scroll);
                }
                curr += 50;
              window.scrollBy(0 , 50);
             } , 50);
               
         });
         
         var idu = document.getElementById("about-t");
         idu.addEventListener('click' , function(){
            console.log("u are in loop");
         
 
            let curr = 0;
            let target = 700;
              console.log("u are in about");
 
              var scroll = setInterval(function(){
                 if(curr >= target){
                     clearInterval(scroll);
                 }
                 curr += 50;
               window.scrollBy(0 , 50);
              } , 50);
                
          });
         
            var  idy = document.getElementById("edu-t");
             idy.addEventListener('click' , function(){
                console.log("u are in loop");
             
     
                let curr = 0;
                let target = 1100;
                  console.log("u are in edu");
     
                  var scroll = setInterval(function(){
                     if(curr >= target){
                         clearInterval(scroll);
                     }
                     curr += 50;
                   window.scrollBy(0 , 50);
                  } , 50);
                    
              });
            var idt = document.getElementById("exp-t");
             idt.addEventListener('click' , function(){
                console.log("u are in loop");
             
     
                let curr = 0;
                let target = 1740;
                  console.log("u are in exp");
     
                  var scroll = setInterval(function(){
                     if(curr >= target){
                         clearInterval(scroll);
                     }
                     curr += 50;
                   window.scrollBy(0 , 50);
                  } , 50);
                    
              });
              var idr = document.getElementById("blogs-t");
              idr.addEventListener('click' , function(){
                console.log("u are in loop");
             
     
                let curr = 0;
                let target = 2400;
                  console.log("u are in blogs");
     
                  var scroll = setInterval(function(){
                     if(curr >= target){
                         clearInterval(scroll);
                     }
                     curr += 50;
                   window.scrollBy(0 , 50);
                  } , 50);
                    
              });
              var  ide = document.getElementById("connect-t");
               ide.addEventListener('click' , function(){
                console.log("u are in loop");
             
     
                let curr = 0;
                let target = 3100;
                  console.log("u are in connect");
     
                  var scroll = setInterval(function(){
                     if(curr >= target){
                         clearInterval(scroll);
                     }
                     curr += 50;
                   window.scrollBy(0 , 50);
                  } , 50);
                    
              });

         
  
