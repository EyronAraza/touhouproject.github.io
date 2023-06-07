// Element References
const text = document.getElementById('parax-text-container')
const imgSakuraTreeLeft = document.getElementById('parax-sakura-left')
const imgSakuraTreeRight = document.getElementById('parax-sakura-right')
const imgReimu = document.getElementById('parax-reimu')
const imgMarisa = document.getElementById('parax-marisa')

// Initial values
var imgReimuLeftInit = parseFloat(window.getComputedStyle(imgReimu).getPropertyValue('left'))
var imgReimuBottomInit = parseFloat(window.getComputedStyle(imgReimu).getPropertyValue('bottom'))
var imgMarisaRightInit = parseFloat(window.getComputedStyle(imgMarisa).getPropertyValue('right'))
var imgMarisaBottomInit = parseFloat(window.getComputedStyle(imgMarisa).getPropertyValue('bottom'))

// Get window scroll Y event and make parallax effect
window.addEventListener('scroll', () => {
    let value = window.scrollY

    // Test
    text.style.marginTop = value * 1 + 'px'

    // Sakura trees
    imgSakuraTreeLeft.style.left = value * -0.3 + 'px'
    imgSakuraTreeRight.style.right = value * -0.3 + 'px'

    // Character images
    imgReimu.style.left = imgReimuLeftInit + value * -0.3 + 'px'
    imgReimu.style.bottom = imgReimuBottomInit + value * -0.3 + 'px'
    imgMarisa.style.right = imgMarisaRightInit + value * -0.3 + 'px'
    imgMarisa.style.bottom = imgMarisaBottomInit + value * -0.3 + 'px'
})