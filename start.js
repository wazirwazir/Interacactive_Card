const tab = document.querySelector('.tab')
const ul = document.querySelector('ul')
const x = document.querySelector('#x')
const ham = document.querySelector('#ham')
const go = document.getElementById('gobutton')
const input = document.getElementById('mailinput')
const error = document.getElementById('error')
const upcon = document.getElementById('upcon')
const mailformat = /^\w+([\.-]?\w+)@\w+([\.-]?\w+)(\.\w{2,3})+$/;

function tar() {
    ul.classList.toggle('hide')
    x.classList.toggle('hide')
    ham.classList.toggle('hide')
    mainContent.classList.toggle('navshadow')
    
}
function update() {
    if (input.value.match(mailformat)) {
        upcon.innerHTML = "You've sucessfully signed in for updates!"
    } else {
        error.classList.remove('hide')
    }
}
tab.addEventListener('click', tar)
go.onclick = update