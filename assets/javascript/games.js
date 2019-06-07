$(document).ready(function(){
    var wins = 0;
    var losses = 0;
    var scoreNum = [] //comp random number
    var totalNum = 0;
   
    

    //start of game function / reset function to create new random numbers.
    function start(){
        totalNum = 0;
        scoreNum = Math.floor((Math.random() * 120) +19);
        result = 0;
    
        //show random number for game and assign vaule
        $("#ranNum").text(scoreNum).val(scoreNum)
        console.log(ranNum.value + " ranNum")

        //button1
        $("#button1").val(Math.floor((Math.random() * 12) +1))
        console.log(button1.value + " b1")

        //button2
        $("#button2").val(Math.floor((Math.random() * 12) +1))
        console.log(button2.value + " b2")
        
        //button3
        $("#button3").val(Math.floor((Math.random() * 12) +1))
        console.log(button3.value + " b3")

        //button4        
        $("#button4").val(Math.floor((Math.random() * 12) +1))
        console.log(button4.value + " b4")
      
    }
    start();
    //on button click add number value to total score.
    $(".btn").on("click", function(){
       if(totalNum < scoreNum){
           var cbtnval = parseInt(this.value)
           
           totalNum = totalNum + cbtnval
            
                      
            console.log(this.value + " btn value")
            console.log(totalNum + " total value")
            

            $("#userNum").text(totalNum);


        }if(totalNum === scoreNum){      //if Total = score then add to wins, reset. 
          
            wins++;

            $(".winsDisplay").html(wins)
                      
        //reset function needed
            return start();

        
        }if(totalNum > scoreNum){    //if total is greater than score add to loses, reset.
            losses++;
            $(".losesDisplay").html(losses);
        

        //reset function needed
            return start();
        }
        
        
    })       

    
        
    





    
    
    
    
    
    
    



})

