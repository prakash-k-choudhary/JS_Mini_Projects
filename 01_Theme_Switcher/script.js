const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');

buttons.forEach(function (button) {
  // console.dir(button);
  button.addEventListener('click', (e) => {
    console.dir(e);
    console.dir(e.target);
    if (e.target.id) {
      body.style.backgroundColor = e.target.id;
    }
    // switch(e.target.id){
    //   case e.target.id: body.style.backgroundColor = e.target.id;
    // break;
    // case 'white': body.style.backgroundColor = e.target.id;
    // break;
    // case 'blue':body.style.backgroundColor = e.target.id;
    // break;
    // case 'yellow':body.style.backgroundColor = e.target.id;
    // break;

    // }
  });
});
