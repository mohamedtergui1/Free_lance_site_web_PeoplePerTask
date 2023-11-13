
if (localStorage.getItem("categories")!=null){
  var transftoobject =JSON.parse(localStorage.getItem("categories"));
  console.log(transftoobject)
}
else{
   transftoobject = [];
   localStorage.setItem("categories", JSON.stringify(transftoobject))
   console.log(transftoobject)

}




  $( document ).ready(function() {
   function  append_categories_to_body(){
      var getobjectfromlocalstoreg=localStorage.getItem("categories");
      var transftoobject = JSON.parse(getobjectfromlocalstoreg)
           transftoobject.forEach((category,i) => {
           
            $("#parent_of_categories").append(
                                       `<ul class=" category  flex  text-center items-center  dark:bg-gray-700 dark:text-white ">
                                                <li class="w-2/3  text-xs md:text-lg p-4  ">${category.name}</li>
                                                <li class="w-1/3 text-xs md:text-lg p-4 ">${category.date}</li>
                                                <li class="w-1/3 text-xs flex justify-around md:text-lg p-4 ">
                                                    <button class="btn_edit_cetegor  text-blue-500">EDIT</button> <button
                                                        class="text-red-500 btn_dele_cete btn_dele_cetegory">DELE</button>
                                                </li>
                                            </ul>`
                              );
      });
     
    }
    
    append_categories_to_body();

    

       var btn_dele_cetegpry = document.querySelectorAll(".btn_dele_cetegory")
       var cetegories =document.querySelectorAll(".category")
      for(let i=0;i<btn_dele_cetegpry.length;i++) {
       btn_dele_cetegpry[i].addEventListener('click',()=>{
         append_categories_to_body();
         getobjectfromlocalstoreg=localStorage.getItem("categories");
         transftoobject = JSON.parse(getobjectfromlocalstoreg)
         transftoobject.splice(i, 1);
         localStorage.removeItem("categories")
         localStorage.setItem("categories", JSON.stringify(transftoobject))
         $("#parent_of_categories").html("");
         append_categories_to_body();
         location.reload();

       })
      };

    
            $("#btn_add_cetegory").click(function () { 
             
               btn_dele_cetegpry = document.querySelectorAll(".btn_dele_cetegory")
                cetegories =document.querySelectorAll(".category")
                      
               if( document.querySelector("#value_add_cetegory").value.trim().length){
                var currentDate = new Date();
                    categoey ={

                     "name":`${document.querySelector("#value_add_cetegory").value}`,
                     "date":`${currentDate.getHours()}/${currentDate.getDay()}/${currentDate.getMonth()}`
                    }
                     
                  }
             
                  transftoobject.unshift(categoey);
                  localStorage.setItem("categories", JSON.stringify(transftoobject));
                  $("#parent_of_categories").html("");
                  append_categories_to_body();

                  location.reload();
     })
        


     let edit_btn_category = document.querySelectorAll(".btn_edit_cetegor")
     let modal_cetegory_edit = document.querySelector("#edit_caregory")
       edit_btn_category.forEach((btn,i)=>{
        btn.addEventListener('click',()=>{
          modal_cetegory_edit.showModal();
           
          $("#btn_submit_edit_cztegory").click(()=>{
            const inputValue=$("#input_submit_edit_cztegory").val();
            console.log($("#input_submit_edit_cztegory").val().trim().length)
             if(inputValue.trim().length){
              console.log(inputValue )
              getobjectfromlocalstoreg=localStorage.getItem("categories");
              transftoobject = JSON.parse(getobjectfromlocalstoreg)
              transftoobject[i].name= inputValue;
              localStorage.setItem("categories", JSON.stringify(transftoobject));
             }
       })
        })
       })
    
       $("#clse_btn_category_esdit").click(()=>{
        modal_cetegory_edit.close();
       })

   });











//    function updatecategorylenght(){
//        btn_dele_cetegpry = document.querySelectorAll(".btn_dele_cetegory")
//        cetegories =document.querySelectorAll(".category")
//   setTimeout(updatecategorylenght,500)
//    }
//    updatecategorylenght();
//    var btn_dele_cetegpry = document.querySelectorAll(".btn_dele_cetegory")
//    var cetegories =document.querySelectorAll(".category")
//   for(let i=0;i<btn_dele_cetegpry.length;i++) {
//    btn_dele_cetegpry[i].addEventListener('click',()=>{
//       cetegories[i].style.display="none"
//    })
//   };
   


//   $( document ).ready(function() {
//       $("#btn_add_cetegory").click(function () { 
       
        
                
//          if( document.querySelector("#value_add_cetegory").value.trim().length){
            
//          $("#parent_of_categories").append(
//                         `<ul class=" category  flex  text-center items-center ">
//                                  <li class="w-2/3  text-xs md:text-lg p-4 bg-gray-50">${value_add_cetegory.value}</li>
//                                  <li class="w-1/3 text-xs md:text-lg p-4 bg-gray-50">10/10/2020</li>
//                                  <li class="w-1/3 text-xs flex justify-around md:text-lg p-4 bg-gray-50">
//                                      <button class="text-blue-500">EDIT</button> <button
//                                          class="text-red-500 btn_dele_cete btn_dele_cetegory">DELE</button>
//                                  </li>
//                              </ul>`
//                );
//                cetegories =document.querySelectorAll(".category")
//             btn_dele_cetegpry = document.querySelectorAll(".btn_dele_cetegory")
//                console.log(cetegories.length)
//             }
//             else{
//                alert("you need to enter in name of category ")
//             }
          
            
//       });
//   })
  