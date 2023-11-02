const btn_dele_cetegpry = document.querySelectorAll(".btn_dele_cetegory")
  const cetegories =document.querySelectorAll(".category")
  for(let i=0;i<btn_dele_cetegpry.length;i++){
   btn_dele_cetegpry[i].addEventListener('click',()=>{
      
      cetegories[i].style.display="none"
   })
  }