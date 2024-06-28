document.addEventListener("DOMContentLoaded", () => {
    let albumi = `[
        {
            "id": "1",
            "title": "Anja - Where am I",
            "song": "./songs/Anja - Where I Am (Denmark) Eurovision 2017 - Official Music Video (256).mp3",
            "photo": "./Img/anja-where am i.png",
            "color": "white"
        },
        {
            "id": "2",
            "title": "Indila - Dernière Danse ",
            "song": "./songs/Indila - Dernière Danse (Lyrics) (320).mp3",
            "photo": "./Img/indila.png",
            "color": "white"
        },
        {
            "id": "3",
            "title": "Katy Perry - Firework ",
            "song": "./songs/Katy Perry - Firework (Lyrics) (192).mp3",
            "photo": "./Img/firework.png",
            "color": "white"
        },
        {
            "id": "4",
            "title": "KDA (Feat. Madison Beer X Kim Petras) - \\"Villain\\"",
            "song": "./songs/KDA (Feat. Madison Beer X Kim Petras) - 'Villain' _ Color Coded Lyrics-Tradução (320).mp3",
            "photo": "./Img/kda.png"
        },
        {
            "id": "5",
            "title": "The Greatest Showman - Never Enough",
            "song": "./songs/The Greatest Showman - Never Enough (Vídeo con letra) (320).mp3",
            "photo": "./Img/enough.png",
            "color": "white"
        },
        {
            "id": "6",
            "title": "Once upon a december",
            "song": "./songs/Once upon a december lyrics.mp3",
            "photo": "https://i.pinimg.com/originals/fb/40/6d/fb406dfb1db5e639e56518cccd64e7c7.jpg",
            "color": "white"
        },
        {
            "id": "7",
            "title": "Moana - How far I'll go",
            "song": "./songs/Moana.mp3",
            "photo": "https://hips.hearstapps.com/digitalspyuk.cdnds.net/17/12/1490086765-moana.jpg?crop=0.463xw:1.00xh;0.176xw,0&resize=1200:*"
        },
        {
            "id": "8",
            "title": "Fall out boys - Immortals",
            "song": "./songs/Immortals.mp3",
            "photo": "https://images6.fanpop.com/image/photos/37400000/Hiro-icon-big-hero-6-37406520-200-200.png"
        },
        {
            "id": "9",
            "title": "Dwayne Johnson - You're Welcome",
            "song": "./songs/Dwayne Johnson - You're Welcome (Lyrics).mp3",
            "photo": "https://lumiere-a.akamaihd.net/v1/images/au_character_moana_maui_0d62211a.jpeg?region=0,0,600,600"
        }
    ]`;

    let divat = document.getElementsByClassName('song');

    let IMG = document.getElementById('foto');
    let MyAudio = document.getElementById('myAudio');
    let Title = document.getElementById('song_name');
    // let Circle = document.getElementById('circle')

    let idea = JSON.parse(albumi);

    function checkSong(event) {
        let targetId = event.target.id;
        let kenga = idea.find(song => song.id === targetId);
        if (kenga) {
            IMG.src = kenga.photo;
            MyAudio.src = kenga.song;
            Title.innerHTML = kenga.title;
            // Circle.style.backgroundColor = kenga.color;
        } else {
            alert("Ja ke huq dikun");
        }
    }

    // Attach the click event listener to each .bot element
    for (let i = 0; i < divat.length; i++) {
        divat[i].addEventListener('click', checkSong);
    }
});
