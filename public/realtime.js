const socket = io.connect('https://anonnychat.herokuapp.com');

const sender = document.querySelector('#sender');
const message = document.querySelector('#message');
const submitBtn = document.querySelector('#submitButton');
const output = document.querySelector('#output');
const feedback = document.querySelector('#feedback');

submitBtn.addEventListener('click', () =>{
    socket.emit('chat', {
        message: message.value,
        sender: sender.value
    });
});

socket.on('chat', data =>{
    output.innerHTML += `<div class="message">${data.sender} : ${data.message}</div> `;
});