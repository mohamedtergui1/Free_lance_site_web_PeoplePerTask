$( document ).ready(function() {
   $("#btn_sidebar").click(function(){
      $("#sidebar").addClass("-translate-x");
      $("#sidebar").removeClass("-translate-x-full");
      
   })
   $("#close_btn_side_bar").click(function(){
    $("#sidebar").removeClass("-translate-x");
    $("#sidebar").addClass("-translate-x-full");
   });
    
});
  const btns_dele=document.querySelectorAll(".dele_btn")
  const users =document.querySelectorAll(".user")
  for(let i=0;i<btns_dele.length;i++){
   btns_dele[i].addEventListener('click',()=>{
      users[i].style.display="none"
   })
  }
  const btn_dele_cetegpry = document.querySelectorAll(".btn_dele_cetegory")
  const cetegories =document.querySelectorAll(".category")
  for(let i=0;i<btn_dele_cetegpry.length;i++){
   btn_dele_cetegpry[i].addEventListener('click',()=>{
      
      cetegories[i].style.display="none"
   })
  }
