

function test(){
    console.log("Unit Testing");
}

function collect(){
    var num= parseInt(document.getElementById("num").value)
    document.getElementById("unordered").innerHTML= ""
    document.getElementById("unordered2").innerHTML= ""
    document.getElementById("ordered").innerHTML= ""
    document.getElementById("gre").innerHTML= ""

   
    for(index=1; index<=num ; index++){
        var inp = document.createElement("input")
        
        var li = document.createElement("li")
        li.appendChild(inp)
        document.getElementById("ordered").appendChild(li)

        var inp2 = document.createElement("input")
        inp2.id= 'g' + index
        var li2 = document.createElement("li")
        li2.appendChild(inp2)
        document.getElementById("unordered").appendChild(li2)

        var inp3 = document.createElement("input")
        inp3.id= 'c' + index
        inp3.type= "number"
        inp3.min="2"
        inp3.max="3"
        var li3 = document.createElement("li")
        li3.appendChild(inp3)
        document.getElementById("unordered2").appendChild(li3)
        
    
   }
        var but=document.createElement("button")
        but.id="green"
        but.addEventListener('click', function(){
            calculate()
        })
        var gre = document.getElementById("gre");
        gre.appendChild(but)
        document.getElementById("green").innerHTML = "CALCULATE"
        console.log(gre)
        console.log("heeelp!!")

   }

function calculate (){
       var i,agp, result, text, footer, textnode;
       var tgp=0;
       var ap=0;
       var numb = document.getElementById("num").value
       document.getElementById("footer").innerHTML= ""
       for(i=1; i<=numb; i++){
            var grade, gp;
            grade=document.getElementById('g'+i).value
            if (grade=="A"){
                gp=5
            }
            else if(grade=="B"){
                gp=4
            }
            else if(grade=="C"){
                gp=3
            }
            else if(grade=="D"){
                gp=2
            }
            else if(grade=="E"){
                gp=1
            }
            else if(grade=="F"){
                gp=0
            }
            else {return}
            cal = document.getElementById('c'+ i).value
            tgp += gp*cal
            ap += parseInt(document.getElementById('c'+ i).value)
        }
            result=tgp/ap;
            var test=Math.round(result*100)
             agp = test/100

            console.log(tgp);
            console.log(agp);
            console.log(ap);
            console.log(test);
            console.log(result)

            result = document.createElement("p")
            footer= document.getElementById("footer")
            if(agp>=4.5){
            document.getElementById("footer").innerHTML="congrats! First class scholar. Your gp is " + " "+agp  
            }
            else if(agp>=3.5){
                document.getElementById("footer").innerHTML="congrats! second class (upper division) scholar. Your gp is " + " "+agp  

            }
            else if(agp>=2.5){
                document.getElementById("footer").innerHTML="you are presently a second class (lower division) student. Your gp is " + " "+agp  
            }
            else if(agp>1.5){
                document.getElementById("footer").innerHTML="you are presently a third class student. Your gp is " + " "+agp  
            }
            else if(agp>0){
                document.getElementById("footer").innerHTML="you are officially classless. Your gp is " + " "+agp  
            }
            else if(agp>5.0){
                document.getElementById("footer").innerHTML="this gp is unantainable, please crosscheck your details"  

            }
            else return
           
            console.log(result)


}

