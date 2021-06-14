export const squaredNumbers = () => {
  let listItems = document.querySelectorAll('.number');

  const listItem = [...listItems];
  const sqListItems = listItem.map((el) => el.dataset.number ** 2);

  listItem[0].dataset.squaredNumber = sqListItems[0];
  listItem[1].dataset.squaredNumber = sqListItems[1];
  listItem[2].dataset.squaredNumber = sqListItems[2];
};
