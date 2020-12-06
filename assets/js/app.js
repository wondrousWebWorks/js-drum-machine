window.addEventListener('keydown', e => {
  const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
  const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
  key.classList.add('pressed');

  const removeTransition = (e) => {
    if (e.propertyName !== 'transform') return;

    e.target.classList.remove('pressed');
  }

  const keys = document.querySelectorAll('.key');

  keys.forEach(key => {
    key.addEventListener('transitionend', (e) => {
      removeTransition(e);
    });
  });
  
  if (!audio) {
    return;
  }

  audio.currentTime = 0;
  audio.play();
});