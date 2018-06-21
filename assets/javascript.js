$(function(){

    $("button").click(function(){
        var buttonName = $(this).html().toLowerCase()
        if(buttonName == "submit"){
            alert("Thank you for your message! I will get in contact with you shortly.");
            buttonName = "index";
        }
        if (buttonName == "about"){buttonName = "index"}
        window.open(buttonName+".html","_self")
    });
 
})