import { addImage } from './addImage.js';

export const addImageV2 = (url) => {
  // put your code here
  const p = new Promise((resolve, reject) => {
    addImage(url, (resolve, reject));
  });

  return p;
};

// examples

addImageV2('https://server.com/image.png')
  .then((data) => console.log(data)) // ==> { width: 200, height: 100 }
  .catch((error) => console.log(error)); // ==> 'Image load failed'
