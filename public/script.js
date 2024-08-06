
//jquery for loginpage
$(document).ready(function () {
  $("#action_menu_btn").click(function () {
    $(".action_menu").toggle();
  });
});

//client side
const socket = io();

let chatmessage = document.getElementById("submit-btn");





// message from the server
socket.on("message", (message) => {
  console.log(message);
  outputMessage(message);
  
});

// message handle
chatmessage.addEventListener("click", (element) => {
  element.preventDefault();
  
  // message to the server
  const message = document.getElementById("msg").value;
  socket.emit("chatmessage", message);

});


// message to the Dom
function outputMessage(message) {
  const div = document.createElement("div");
  div.classList.add("message");
  div.innerHTML = `<div class="chat-message d-flex justify-content-end mb-4">
                        
						<div class="msg_cotainer_send">
									
                                    <div>${message}</div>
								<span class="msg_time_send">${message.time}</span>
						    </div>
						<div class="img_cont_msg">
						    <img src="" class="rounded-circle user_img_msg">
						</div>
					</div>`;

document.querySelector('.msg_card_body').appendChild(div)

}

