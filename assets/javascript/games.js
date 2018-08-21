$(document).ready(function(){
    var wins = 0;
    var loses = 0;
    var scoreNum = Math.floor((Math.random() * 120) +19); //comp random number
    var beerNum = Math.floor((Math.random() * 12) +1); //button number generator
   
    function start(){
            //show random number for game and assign vaule
        $("#ranNum").append(scoreNum).val(scoreNum)
        console.log(ranNum.value)

        $("#button1").val(beerNum)
        console.log(button1.value + " b1")

        
        $(".button").on("click", function(){
            


        })
    }

    if(ranNum.value === userNum.value){
        wins++;
        $("winsDisplay").html() = wins;

        console.log(winsDisplay)

    }else if(userNum.value > ranNum.value){
        losses--;
        $("losesDisplay").html() = loses;

        console.log(losesDisplay)
    }



    
    
    
    
    
    
    



})
