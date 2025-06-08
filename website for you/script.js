document.getElementById('hugBtn').addEventListener('click', () => {
  const hugGif = document.getElementById('hugGif');
  hugGif.classList.toggle('hidden');
});

document.getElementById('surpriseBtn').addEventListener('click', () => {
  const surprise = document.getElementById('surprise');
  surprise.classList.toggle('hidden');
});

document.getElementById("pelukBtn").addEventListener("click", function () {
  const audio = document.getElementById("loveAudio");
  audio.play();
});
