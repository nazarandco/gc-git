
export const getTitle = () => {
    const title = document.querySelector('.title').textContent;
    return title;
}

export const getDescription = () => {
    const about = document.querySelector('.about').innerText;
    return about;
}

export const getPlans = () => {
    const plans = document.querySelector('.plans').innerHTML;
    return plans;
}

export const getGoal = () => {
  const goal = document.querySelector('.goal').outerHTML;
  return goal;
};