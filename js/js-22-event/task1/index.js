const elementDiv = document.querySelector('.rect_div');
const elementP = document.querySelector('.rect_p');
const elementSpan = document.querySelector('.rect_span');
const eventsListElem = document.querySelector('.events-list');

const logTarget = (text, color) => {
  eventsListElem.innerHTML += `<span style="color: ${color}; margin-left: 8px;">${text}</span>`;
};

const logGreenDiv = logTarget.bind(null, 'div', 'green');
const logGreenP = logTarget.bind(null, 'p', 'green');
const logGreenSpan = logTarget.bind(null, 'span', 'green');

const logGreyDiv = logTarget.bind(null, 'div', 'grey');
const logGreyP = logTarget.bind(null, 'p', 'grey');
const logGreySpan = logTarget.bind(null, 'span', 'grey');

elementDiv.addEventListener('click', logGreyDiv, true);
elementDiv.addEventListener('click', logGreenDiv);

elementP.addEventListener('click', logGreyP, true);
elementP.addEventListener('click', logGreenP);

elementSpan.addEventListener('click', logGreySpan, true);
elementSpan.addEventListener('click', logGreenSpan);

const clearBtn = document.querySelector('.clear-btn');
const attachBtn = document.querySelector('.attach-handlers-btn');
const removeBtn = document.querySelector('.remove-handlers-btn');

const clearBtnFunc = () => {
  elementDiv.removeEventListener('click', logGreyDiv, true);
  elementDiv.removeEventListener('click', logGreenDiv);

  elementP.removeEventListener('click', logGreyP, true);
  elementP.removeEventListener('click', logGreenP);

  elementSpan.removeEventListener('click', logGreySpan, true);
  elementSpan.removeEventListener('click', logGreenSpan);
};

clearBtn.removeEventListener('click', () => clearBtnFunc());
