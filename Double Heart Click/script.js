const loveMe = document.querySelector('.love-me')
const times = document.getElementById('times')

let clickTime = 0
let timesClicked = 0

loveMe.addEventListener('click', (e) =>{
    if(clickTime === 0){
        clickTime = new Date().getTime()
    } else{
        if ((new Date().getTime() - clickTime) < 800){
            creatHeart(e)
            clickTime = 0
        } else{
            clickTime = new Date().getTime()
        }
    }
})

const creatHeart = (e) =>{
    const heart = document.createElement('i')
    heart.classList.add('fas')
    heart.classList.add('fa-heart')

    const x = e.clientX
    const y = e.clientY

    const OffsetLeft = e.target.offsetLeft
    const OffsetTop = e.target.offsetTop

    const xinside = x - OffsetLeft
    const yinside = y - OffsetTop
    
    heart.style.top = `${yinside}px`
    heart.style.left = `${xinside}px`

    loveMe.appendChild(heart)
    times.innerHTML = ++timesClicked

    setTimeout(() => heart.remove(), 1000)
}