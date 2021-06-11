
export const getTitle = () => {
    const title = document.querySelector('.title');
    return title.textContent;
}
console.log(getTitle());

export const getDescription = () => {
    const about = document.querySelector('.about');
    return about.innerText;
}
console.log(getDescription());

export const getPlans = () => {
    const plans = document.querySelector('.plans');
    return plans.innerHTML;
}
console.log(getPlans());

export const getGoal = () => {
  const goal = document.querySelector('.goal');
  return goal.outerHTML;
};
console.log(getGoal());