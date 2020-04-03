document.addEventListener('DOMContentLoaded', () => {

  const inputNumber = document.querySelector('.number-form__input');
  const setBtn = document.querySelector('.number-form__set-btn');
  const clearBtn = document.querySelector('.number-form__clear-btn');
  const myForm = document.querySelector('.number-form');
  const key = 'num32';

  let storegeValue = () => {
    const oldP = document.querySelector('p');
    let value = localStorage.getItem(key);
    let p = document.createElement('p');
    try {
      oldP.remove();
    } catch (e) {
      // console.error(e);
      
    }

    if (value) {
      p.innerHTML = value;
      myForm.before(p);
    }

    if (value % 2 === 0) {
      p.className = 'even';
    } else {
      p.className = 'odd';
    }
  };

  storegeValue();
  
  inputNumber.addEventListener('input', () => {
    event.target.value = event.target.value.replace(/\D/g, '');
    if (!event.target.value) {
      setBtn.classList.add('disabled');
    } else {
      setBtn.classList.remove('disabled');
    }
  });

  clearBtn.addEventListener('click', () => {
    console.log(document.querySelector('.number-form__input').value);
    inputNumber.value = '';
    localStorage.removeItem(key);
    storegeValue();
  });

  setBtn.addEventListener('click', () => {
    console.log(inputNumber.value);
    localStorage.setItem(key, inputNumber.value);
    storegeValue();
  });

});