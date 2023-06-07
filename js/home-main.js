// For hovering over image to change to another image
function changeImageOnHover(idElement, anotherImage) {
    var characterPortrait = document.getElementById(idElement)
    characterPortrait.src = anotherImage
}

// For redirecting to an element's ID
function scrolltToElement(idElement) {
    const element = document.getElementById(idElement)
    if (element) {
        element.scrollIntoView()
    }
}