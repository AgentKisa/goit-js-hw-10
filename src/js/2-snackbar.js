import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const forma = document.querySelector('.form');

forma.addEventListener('submit', createForma);

function createForma(event) {
  event.preventDefault();

  const delay = event.target.elements.delay.value;
  const state = event.target.elements.state.value;

  formaPromis(delay, state)
    .then(message => console.log(`✅ Fulfilled promise in ${delay}ms`))
    .catch(message => console.error(`❌ Rejected promise in ${delay}ms`));
}

const formaPromis = (delay, state) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (state === 'fulfilled') {
        resolve(
          iziToast.success({
            title: `✅ Fulfilled promise in ${delay}ms`,
            position: 'topRight',
          })
        );
      } else {
        reject(
          iziToast.error({
            title: `❌ Rejected promise in ${delay}ms`,
            position: 'topRight',
          })
        );
      }
    }, delay);
  });
};
