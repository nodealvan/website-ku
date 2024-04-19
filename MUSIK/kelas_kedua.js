window.onload = () => {
    const player = createPlayer('player_html', [

        {
            src: 'We dont talk anymore.mp3',
            img: 'charlie puth.jpg',
            title: 'We dont talk anymore',
            subTitle: 'Charlie Puth'
        },
        {
            src: 'lana del rey.mp3',
            img: 'lana.jpg',
            title: 'Dark Paradise',
            subTitle: 'Lana Del Rey'
        },
        {
            src: 'creepin.mp3',
            img: 'weeknd.jpg',
            title: 'Creepin',
            subTitle: 'The Weeknd 21 Savage'
        },
        {
            src: 'summertime.mp3',
            img: 'lana.jpg',
            title: 'Summertime',
            subTitle: 'Lana Del Rey'
        },
        {
            src: 'popular.mp3',
            img: 'weeknd.jpg',
            title: 'Popular',
            subTitle: 'The Weeknd 21 Savage'
        },
       
    ]);

    player.audio.volume = 0.9;

    document.getElementById('main').appendChild(player);
};

function createPlayer(name, playlist) {
    const
        audio = document.createElement('audio'),
        player = document.createElement('div'),
        info = document.createElement('div'),
        controller = document.createElement('div');

    let currentTrackIndex = 0;

    audio.hidden = true;
    audio.id = name;
    audio.src = playlist[currentTrackIndex].src;

    player.classList.add('player');

    // Informasi
    const
        img = document.createElement('img'),
        title = document.createElement('h3'),
        subTitle = document.createElement('h4');

    img.src = playlist[currentTrackIndex].img;

    title.textContent = playlist[currentTrackIndex].title;
    subTitle.textContent = playlist[currentTrackIndex].subTitle;

    title.title = playlist[currentTrackIndex].title;
    subTitle.title = playlist[currentTrackIndex].subTitle;

    info.append(img, title, subTitle);
    player.appendChild(info);

    // Controller
    const
        controllers = document.createElement('div'),
        imgPrev = document.createElement('img'),
        imgNext = document.createElement('img'),
        imgPlay = document.createElement('img'),
        bar = document.createElement('div'),
        processBar = document.createElement('div'),
        time = document.createElement('div'),
        duration = document.createElement('span'),
        currentTime = document.createElement('span');

    imgPrev.src = 'right-arrow.png';
    imgPrev.width = 20;
    imgPrev.height = 20;
    imgNext.src = 'left-arrow.png';
    imgNext.width = 22;
    imgNext.height = 22;
    imgPlay.src = 'play.png';

    bar.classList.add('bar');

    bar.addEventListener('click', (event) => {
        let tmp = (event.clientX - bar.offsetLeft),
            width = bar.style.width;

        tmp = (tmp / bar.clientWidth * 100);

        audio.currentTime = audio.duration / 100 * tmp;
    });

    duration.textContent = '00:00';
    currentTime.textContent = '00:00';

    imgNext.addEventListener('click', () => {
        currentTrackIndex++;
        if (currentTrackIndex >= playlist.length) {
            currentTrackIndex = 0;
        }
        loadTrack(playlist[currentTrackIndex]);
        audio.play();
    });

    imgPlay.addEventListener('click', () => {
        if (audio.paused) {
            audio.play();
        } else {
            audio.pause();
        }
        updatePlayer();
    });

    imgPrev.addEventListener('click', () => {
        currentTrackIndex--;
        if (currentTrackIndex < 0) {
            currentTrackIndex = playlist.length - 1;
        }
        loadTrack(playlist[currentTrackIndex]);
        audio.play();
    });

    const loadTrack = (track) => {
        audio.src = track.src;
        img.src = track.img;
        title.textContent = track.title;
        subTitle.textContent = track.subTitle;
    };

    const updatePlayer = () => {
        imgPlay.src = (audio.paused)
            ? 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAABKklEQVQ4jWNwMguzPrDvZOiZU5djCjIbNf7//89ACmaY0jff4tGj5/+heOGZU5c7STGAiZuHW4oBAeLEJEQkHj9+sXDB7NURDEQAJgYGBjE0ZXEg7Oxh63n29JXOwqwmDXzGsDAwMDzFIQdyDUNRZZrE2dNXXhib6pRjUwRywUMCDsXrLZAB74jwKk5vgbzAS4QByK5B8RbIBcokGIBskMSU/oU+IAO+kGEACEjdvf3wMcgLX0nUuOfrl2+fli1YN6F/Wt1FkAt+kqJ505qd8zQ0lYKbOksOM0AD8TcxGi9fvH5i6dy1E5aun/IWWYKQAXDngmz08nHEUADyAi4DMJyLDYBc8I9Y52I14OWL17BoJOhcbIBRU9pB0tPP0Z+bl+sqPqdiBQwMDACvUdjLFtm1SgAAAABJRU5ErkJggg=='
            : 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAASCAYAAABSO15qAAAAaElEQVQ4jWOgFDCC9D9+/GIhAwNDHJJZi2RkxOORzX7y5CWGGllZiXiYAf/RHSIjI86IZgCGGllZCUYmSr0wasCoAaMGQAALiPj65ds6bh4uPgYGBhcGBoY9X798+4SukBg1pAMGBgYAdXcjO7NTRb4AAAAASUVORK5CYII=';
    };

    audio.addEventListener('playing', () => updatePlayer());
    audio.addEventListener('pause', () => updatePlayer());

    audio.addEventListener('timeupdate', () => {
        currentTime.textContent = ajusteTextTime(audio.currentTime);
        duration.textContent = ajusteTextTime(audio.duration);
        processBar.style.width = parseInt(audio.currentTime / audio.duration * 100) + '%';
    });

    controllers.append(imgPrev, imgPlay, imgNext);
    bar.appendChild(processBar);
    time.append(currentTime, duration);

    controller.append(controllers, bar, time);

    player.audio = audio;

    player.appendChild(controller);

    return player;
}

function ajusteTextTime(time) {
    if (isNaN(time)) {
        time = 0;
    }

    time = time.toFixed(2);

    let
        minutos = parseInt((time > 59) ? time / 60 : 0),
        segundos = parseInt(time % 60);

    minutos = ('00' + minutos).slice(-2);
    segundos = ('00' + segundos).slice(-2);

    return minutos + ':' + segundos;
}
