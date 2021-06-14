export const getSection = (num) => {
  const spanFinder = document.querySelector(
    `div.box span[data-number="${num}"]`
  );

  const spanParent = spanFinder.closest('div');
  return spanParent.dataset.section;
};
