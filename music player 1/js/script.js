const songProgress = document.getElementById('songProgress');
const playSongBtn = document.querySelector('.playSong');
const playSongColored = document.getElementById('playcolored');
const playIcone = document.querySelector('.playIcone');
const audio = document.getElementById('song');

playSongBtn.addEventListener('click', () => {
    if(playIcone.classList.contains('fa-play'))
        playing();
    else
        pausePlaying();
});

function playing(){
    playIcone.classList.add('fa-pause');
    playIcone.classList.remove('fa-play');
    playSongColored.style.animationPlayState = 'running';
    audio.play();
}

function pausePlaying(){
    playIcone.classList.add('fa-play');
    playIcone.classList.remove('fa-pause');
    playSongColored.style.animationPlayState = 'paused';
    audio.pause();
}

function updateProgress(){
    const duration = audio.duration;
    const currentTime = audio.currentTime;
    const progressPercent = (currentTime / duration) * 100;
    songProgress.style.width = `${progressPercent}%`;
}

audio.addEventListener('timeupdate', updateProgress);
audio.addEventListener('ended', pausePlaying);