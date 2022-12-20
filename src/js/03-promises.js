import Notiflix from 'notiflix';

const refs = {
  formEl: document.querySelector('.form'),
};
refs.formEl.addEventListener('submit', submitButton);

function submitButton(e) {
  e.preventDefault();

  const data = new FormData(e.target);
  const firstDelay = Number(data.get('delay'));
  const step = Number(data.get('step'));

  for (let i = 0; i < data.get('amount'); i++) {
    createPromise(i + 1, firstDelay + i * step)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(
          `✅ Fulfilled promise ${position} in ${delay}ms`
        );
        
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(
          `❌ Rejected promise ${position} in ${delay}ms`
        );
        // console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      });
  }
}

function createPromise(position, delay) {
  // console.log(position, delay);
  const shouldResolve = Math.random() > 0.3;
  return new Promise((resolte, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolte({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
