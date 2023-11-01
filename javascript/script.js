$( document ).ready(function() {
    if(window.innerWidth<1023){
        $("#navbar").hide(0);
    }
    $("#hamberger_btn").click(function(){
    $("#navbar").slideToggle(500);
   })
   console.log(document.with)
   function test_nav_status(){
        if(window.innerWidth>=1023){
            $("#navbar").show(0);
        }
       
        setTimeout(test_nav_status,500)
   }
   test_nav_status();
});