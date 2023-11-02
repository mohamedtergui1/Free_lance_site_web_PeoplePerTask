const btn_messagInbox =document.querySelectorAll(".btn_messag_inbox")
  const emailMessage=document.querySelectorAll(".email_message")
  
//    btn_messagInbox.addEventListener('click',()=>{
//       emailMessage.classList.toggle="h-14"
//       emailMessage.classList.toggle="h-full"
      
//    });
btn_messagInbox.forEach((button, i) => {
    button.addEventListener('click', () => {
      emailMessage[i].classList.toggle("h-14");
      emailMessage[i].classList.toggle("h-auto");
      for(let j =0;j<emailMessage.length;j++){
        if(j!==i){
            emailMessage[j].classList.remove("h-auto");
            emailMessage[j].classList.add("h-14");
        }
      }
    });
  });
  const btn_dele_messageInbox=document.querySelectorAll(".btn_dele_message_inbox")

  btn_dele_messageInbox.forEach((button, i) => {
    button.addEventListener('click', () => {
      emailMessage[i].remove();
      
    });
  });