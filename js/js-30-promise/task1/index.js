const addImage = (imgSrc) => {
  const p = new Promise((resolveCb, rejectCb) => {
    const imgElem = document.createElement('img');
    imgElem.setAttribute('alt', 'Landscape photo');
    imgElem.src = imgSrc;
    const containerElem = document.querySelector('.page');
    containerElem.append(imgElem);

    const imageLoadHandler = () => {
      const { width, height } = imgElem;
      resolveCb({ width, height });
    };

    imgElem.addEventListener('load', imageLoadHandler);
    imgElem.addEventListener('error', () =>
      rejectCb(new Error('Image load is failed...'))
    );
  });

  return p;
};

const imgSrc =
  'https://p.bigstockphoto.com/GeFvQkBbSLaMdpKXF1Zv_bigstock-Aerial-View-Of-Blue-Lakes-And--227291596.jpg';

const result = addImage(imgSrc);
console.log(result);

// // callack example
// const onImageLoaded = (error, imgElem) => {
//   if (error) {
//     console.log(error);
//     return;
//   }
//   const { width, height } = imgElem;
//   const sizeElem = document.querySelector('.image-size');
//   sizeElem.textContent = `${width} x ${height}`;
// };
