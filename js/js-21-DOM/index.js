const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

const renderListItems = listItems => {
    const listElem = document.querySelector('.list'); // тут звернення обов'язково через крапку

    const listItemsElem = listItems
    .sort((a, b) => a.done - b.done)
    .map(({ text, done }) => {
        const listItemElem = document.createElement('li');
        listItemElem.classList.add('list__item');
        if(done) {
            listItemElem.classList.add('list__item_done');
        }
        const checkboxElem = document.createElement('input');
        checkboxElem.setAttribute('type', 'checkbox');
        checkboxElem.checked = done; // звернення через властивість, а не атрибут - бо атрибут приймає лише string, а нам потрібно працювати з boolean
        checkboxElem.classList.add('list__item-checkbox');
        listItemElem.append(checkboxElem, text);

        return listItemElem;
    });

    listElem.append(...listItemsElem);
};

renderListItems(tasks);