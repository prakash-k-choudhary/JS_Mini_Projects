// This usecase will give empty value but when page loads the value will be empty
// const height = document.querySelector('#height');
// const weight = document.querySelector('#weight');

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  console.log('Form submitted!'); // Check your console for this!
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const result = document.querySelector('#result');

  if (height <= 0 || height == '' || isNaN(height)) {
    result.style.color = 'red';
    result.innerHTML = 'Pls Give a valid height';
  } else if (weight <= 0 || weight == '' || isNaN(weight)) {
    result.style.color = 'red';
    result.innerHTML = 'Pls Give a valid weight';
  } else {
    const bmi = (weight / ((height * height) / 10000)).toFixed(2);
    result.innerHTML = `<span>${bmi}<\span>`;
  }
});
