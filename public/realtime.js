const socket = io.connect('https://alper-chatapp.herokuapp.com/');
// const socket = io.connect(window.location.href);
let sender;
const message = document.querySelector('#message');
const submitBtn = document.querySelector('#submitButton');
const output = document.querySelector('#output');
const feedback = document.querySelector('#feedback');

submitBtn.addEventListener('click', () =>{
    socket.emit('chat', {
        message: message.value,
        sender: sender.value
    });
    message.value = '';
});

socket.on('chat', data =>{
    output.innerHTML += `
    <div class="message">
        <b>${data.sender} :</b> ${data.message}
    </div> `;
});

$('.loginButton').click(function () {
    $('#login-wrapper').hide();
    sender = document.querySelector('#sender');
    $('#chat').addClass('active');
});




$('.hamburger-menu button').click(function () {
    $('.hamburger-menu').toggleClass('active');
    $('.header-mobile-menu').toggleClass('active');
});

$('.nav-link').click(function () {
    $(this).siblings().toggleClass('active');
    $(this).children().toggleClass('active');
})
$('.lang a').click(function () {
   $(this).siblings('ul').toggleClass('active'); 
});