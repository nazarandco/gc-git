const btn = document.querySelectorAll('.btn');

const handleClick = (event) => {
  console.log(event.target.textContent);
};

btn[0].addEventListener('click', handleClick);
btn[1].addEventListener('click', handleClick);
