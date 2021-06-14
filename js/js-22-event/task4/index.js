const checkboxElem = document.querySelector('.task-status');

const checkboxChecker = () => checkboxElem.checked ? console.log(true) : console.log(false);

checkboxElem.addEventListener('change', () => checkboxChecker());
