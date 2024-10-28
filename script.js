let alka = new Audio('./assets/audio/alka.mp3');
let arijit = new Audio('./assets/audio/arjit.mp3');
let ananya = new Audio('./assets/audio/ananya.mp3');
let atif = new Audio('./assets/audio/atif.mp3');
let palak = new Audio('./assets/audio/palak.mp3');
let shreya = new Audio('./assets/audio/shreya.mp3');

let images = document.querySelectorAll('.audio-design');
let imageNumber = images.length;

let currentlyPlaying = null; 

for (let i = 0; i < imageNumber; i++) {
    images[i].addEventListener('click', function() {
        let singer = this.getAttribute('value');

        if (currentlyPlaying === singer) {
            // If the clicked card is already active, pause and reset it
            pauseMusic();
            images[i].classList.remove('active');
            currentlyPlaying = null;
        } else {
            // Otherwise, play the new song and update active class
            images[i].classList.add('active');
            for (let j = 0; j < imageNumber; j++) {
                if (j === i) continue;
                images[j].classList.remove('active');
            }
            pauseMusic(); // Pause any previously playing music
            playMusic(singer);
            currentlyPlaying = singer;
        }
    });
}

function playMusic(singer) {
    switch (singer) {
        case 'alka':
            alka.play();
            break;
        case 'arijit':
            arijit.play();
            break;
        case 'ananya':
            ananya.play();
            break;
        case 'atif':
            atif.play();
            break;
        case 'palak':
            palak.play();
            break;
        case 'shreya':
            shreya.play();
            break;
        default:
            break;
    }
}

function pauseMusic() {
    alka.pause();
    arijit.pause();
    ananya.pause();
    atif.pause();
    palak.pause();
    shreya.pause();

    // Reset audios to start
    alka.currentTime = 0;
    arijit.currentTime = 0;
    ananya.currentTime = 0;
    atif.currentTime = 0;
    palak.currentTime = 0;
    shreya.currentTime = 0;
}
