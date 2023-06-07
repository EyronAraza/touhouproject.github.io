// References
const navLinks = document.querySelectorAll('.nav-link')

// Loop through all navigation links
navLinks.forEach(link => {
    // Hover over one of the links
    link.addEventListener('mouseover', () => {
        navLinks.forEach(otherLinks => {
            // Make other links transparent except for hovered link
            if (otherLinks !== link) {
                otherLinks.style.opacity = '0.4'
            }
        })
    })

    // When not hovered, all links back to 100% transparency
    link.addEventListener('mouseout', () => {
        navLinks.forEach(otherLink => {
            otherLink.style.opacity = '1'
        })
    })
})