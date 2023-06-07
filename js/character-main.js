// General References
const radioButtons = document.getElementsByName('radio-characters')
const charInfoWindow = document.getElementById('window-character-info')
const closeButton = document.getElementById('btn-close')
const containerCharBoxes = document.getElementById('container-box-char')
const charBoxes = document.querySelectorAll('.box-char')

// References: Background image
const mainBackgroundImage = document.getElementById('img-background')
const backgroundImageLocation = "../img/character-backgrounds/"
const backgroundImagesArr = ["reimu_bg.png", "marisa_bg.jpg", "sakuya_bg.jpg", "cirno_bg.jpg", "yukari_bg.jpg"]

// References: Character information
const elemCharacterName = document.getElementById('char-info-h1-name') // header
const elemCharacterImage = document.getElementById('char-info-img') // image src
const elemCharacterSpecies = document.getElementById('char-species') // paragraph
const elemCharacterAbility = document.getElementById('char-ability') // paragraph
const elemCharacterOccupation = document.getElementById('char-occupation') // paragraph
const elemCharacterLocation = document.getElementById('char-location') // paragraph
const elemCharacterDescription = document.getElementById('char-description') // paragraph
const elemCharacterBGType = document.querySelectorAll('.table-col-1') // text span

// Loop through all radio buttons (for updating character's information upon selection)
radioButtons.forEach((radio, index) => {
    // Initiallise uncheck all radio buttons
    radio.checked = false

    // Select one of the radio buttons (selecting a character)
    radio.addEventListener('click', function () {
        // Display window
        charInfoWindow.style.animation = 'anim-open 0.5s forwards'
        containerCharBoxes.style.animation = 'anim-close 0.5s forwards'

        // Get index of 'Character Storage' object
        const selectedCharacter = Object.values(characterStorage)[index]

        // Update character information
        elemCharacterName.textContent = selectedCharacter.name
        elemCharacterName.style.color = selectedCharacter.color
        elemCharacterImage.src = selectedCharacter.image
        elemCharacterSpecies.textContent = selectedCharacter.species
        elemCharacterAbility.textContent = selectedCharacter.ability
        elemCharacterOccupation.textContent = selectedCharacter.occupation
        elemCharacterLocation.textContent = selectedCharacter.location
        elemCharacterDescription.textContent = selectedCharacter.description
        elemCharacterBGType.forEach(bgType => {
            bgType.style.backgroundColor = selectedCharacter.color
        })

        // Change background image
        let currentBG = backgroundImagesArr[index]
        mainBackgroundImage.style.backgroundImage = `url(${backgroundImageLocation + currentBG})`
    })
})

// Close button to close window
closeButton.addEventListener('click', () => {
    charInfoWindow.style.animation = 'anim-close 0.5s forwards'
    containerCharBoxes.style.animation = 'anim-open 0.5s forwards'

    radioButtons.forEach((radio, index) => {
        // uncheck all radio buttons
        radio.checked = false
    })
})

// Loop through character boxes
charBoxes.forEach((charBox, index) => {

    // Hover one of the character boxes
    charBox.addEventListener('mouseover', () => {
        let currentBG = backgroundImagesArr[index]

        mainBackgroundImage.style.backgroundImage = `url(${backgroundImageLocation + currentBG})`
        mainBackgroundImage.style.animation = "anim-bg-transition 0.5s forwards ease"
    })

    // If not hovered on one of the character boxes
    charBox.addEventListener('mouseout', () => {
        mainBackgroundImage.style.animation = "none"
    })

})