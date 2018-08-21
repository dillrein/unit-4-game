$(document).ready(function(){
    var wins = 0;
    var loses = 0;
    var scoreNum = Math.floor((Math.random() * 120) +19); //comp random number
    var totalNum = 0;
   
    
    //show random number for game and assign vaule
    $("#ranNum").append(scoreNum).val(scoreNum)
    console.log(ranNum.value + " rng")

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
     
    
    //on button click add number value to total score.
    $(".btn").on("click", function(){   
        totalNum = $(this).val();
        
        $("#userNum").text(totalNum);

        

    })       


        
    

    // if(ranNum.value === userNum.value){
    //     wins++;
    //     $("winsDisplay").html() = wins;

    //     console.log(winsDisplay)

    // }else if(userNum.value > ranNum.value){
    //     losses--;
    //     $("losesDisplay").html() = loses;

    //     console.log(losesDisplay)
    // }



    
    
    
    
    
    
    



})
