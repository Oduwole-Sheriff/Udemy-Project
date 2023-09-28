const buttons = document.querySelectorAll('.faq-toggle')

buttons.forEach((button) =>{
    button.addEventListener('click', () =>{
        // removeClass()
        button.parentNode.classList.toggle('active')
    })
})

// function removeClass(){
//     buttons.forEach(button =>{
//         button.parentNode.classList.remove('active')
//     })
// }



