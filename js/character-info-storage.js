// get location of images
const imageLocation = "../img/character-portraits/"

// Objects to store character information
const characterStorage = {
    character1: {
        name: "Reimu Hakurei",
        image: imageLocation + "reimu.png",
        color: "#ff0000",
        species: "Human",
        ability: "Floating / Aura Manipulation",
        occupation: "Shrine Maiden",
        location: "Hakurei Shrine",
        description: "Reimu Hakurei (Hakurei Reimu) is the Main Character of the Touhou Project series, having appeared in all of the main games and in almost every game in the series. As the sole maiden of the Hakurei Shrine, she is commonly called upon (or calls it upon herself) to investigate strange occurrences throughout Gensokyo."
    },
    character2: {
        name: "Marisa Kirisame",
        image: imageLocation + "marisa.png",
        color: "#A8AA00",
        species: "Human",
        ability: "Magic",
        occupation: "Magician / Stealing",
        location: "Magic of Forest",
        description: "Marisa Kirisame (Kirisame Marisa) is a human magician, and is one of the most important sub-characters of the series (according to series producer ZUN). Her personality is sometimes described as disagreeable, but in some other titles, straightforward. Either way, she is a very self-confident person that likes to stick her nose into every trouble out of curiosity. "
    },
    character3: {
        name: "Sakuya Izayoi",
        image: imageLocation + "sakuya.png",
        color: "#827A92",
        species: "Human",
        ability: "Time Manipulation",
        occupation: "Maid",
        location: "Scarlet Devl Mansion",
        description: "Easily one of the most enigmatic characters, despite appearing in so many games, Sakuya Izayoi is the Chief Maid at the Scarlet Devil Mansion. She works for her mistress, Remilia Scarlet, and is apparently the only human working and living within the mansion. She has the power to manipulate time, and is known to place knives in midair and resume time to allow these knives to fly towards her targets. Stopping time is also a handy way of doing large amounts of maid work in a short time. Because nearly everyone living and working at the mansion are maids, being the chief of them all means there are almost no people with more authority within the mansion than Sakuya. "
    },
    character4: {
        name: "Cirno",
        image: imageLocation + "cirno.png",
        color: "#0095F9",
        species: "Fairy",
        ability: "Cold Manipulation",
        occupation: "⑨ The Strongest?! ⑨",
        location: "Misty Lake",
        description: "Cirno is an ice fairy. While she is described as a weak boss in the Touhou series, if we consider the power of average fairies - who appear often as regular enemies - we can certainly say she is exceptionally strong for her kind, and she is implied to be so in Phantasmagoria of Flower View by Eiki Shiki. Her personality is childish and rather incompetent, as you might expect from her appearance. Cirno always claims to be the strongest, but we will never know for sure until she stops goofing around and unleashes her true potential. "
    },
    character5: {
        name: "Yukari Yakumo",
        image: imageLocation + "yukari.png",
        color: "#A858A7",
        species: "Youkai",
        ability: "Boundaries Manipulation",
        occupation: "Gensokyo Sage",
        location: "Shadow Realm",
        description: "An often seen and referenced character, Yukari Yakumo is the youkai of boundaries. She was first introduced in Perfect Cherry Blossom as the sleepy mistress of Ran Yakumo. During Imperishable Night, Yukari teams up with Reimu to find those responsible for the fake moon. In Immaterial and Missing Power, she actually sings her way from battle to battle, stealing everyone's sake, wine, and brandy, even right from the shrine's altar. However, this is all part of her strategy to save the day. "
    }
}