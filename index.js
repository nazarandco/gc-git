const getTitle = () => {
  const title = document.querySelector('.title').textContent;
  return title;
};
console.log(getTitle());

const getDescription = () => {
  const about = document.querySelector('.about').innerText;
  return about;
};
console.log(getDescription());

const getPlans = () => {
  const plans = document.querySelector('.plans').innerHTML;
  return plans;
};
console.log(getPlans());

const getGoal = () => {
  const goal = document.querySelector('.goal').outerHTML;
  return goal;
};
console.log(getGoal());
