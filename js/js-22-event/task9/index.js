const checkboxEL = document.querySelector('.task-status');

const checkboxFunc = (event) => {
  console.log(event.target.checked);
};

checkboxEL.addEventListener('change', checkboxFunc);
