import throttle from 'lodash.throttle';
// Get the text field that we're going to track
const form = document.querySelector(".feedback-form")
form.addEventListener("input", throttle(500, onForm))
form.addEventListener("submit", onSubmit)
const formData = {};
checkData()

function onForm(e){
formData[e.target.name] = e.target.value;
localStorage.setItem('feedback-form-state', JSON.stringify(formData));

}

function onSubmit(e){
    e.preventDefault();
    console.log(localStorage.getItem('feedback-form-state', JSON.parse(formData)));
    e.currentTarget.reset
    localStorage.removeItem('feedback-form-state');
}
function checkData() {
    const data = JSON.parse(localStorage.getItem('feedback-form-state'));
    const email = document.querySelector('.feedback-form input');
    const message = document.querySelector('.feedback-form textarea');
    if (data) {
      email.value = data.email;
      message.value = data.message;
    }
  };
