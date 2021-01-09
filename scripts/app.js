const list = document.querySelector('.chat-list');
const new_name = document.querySelector('.new-name');
const new_chat = document.querySelector('.new-chat');
const room_acc = document.querySelector('.chat-rooms');

const user = localStorage.username ? localStorage.username : 'Dev';

const chat = new chatUI(list);
const chatroom = new Chatroom('general', user);

chatroom.getChats( data => chat.render(data));

//update username
new_name.addEventListener('submit' , e =>{
    e.preventDefault();
    chatroom.updateUsername(new_name.name.value.trim());
    alert('Username updated!');
    new_name.reset();
});

//add new msg to grp
new_chat.addEventListener('submit' , e =>{
    e.preventDefault();
    chatroom.addChat(new_chat.message.value.trim())
        .then(new_chat.reset())
        .catch( err => console.log(err) );
});

room_acc.addEventListener('click', e => {
    
    if(e.target.tagName == "BUTTON"){
        chat.clear();
        chatroom.updateRoom(e.target.getAttribute('id'));
        chatroom.getChats( data => chat.render(data));
    }
});