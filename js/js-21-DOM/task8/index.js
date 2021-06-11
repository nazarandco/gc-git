
export const createButton = (buttonText) => {
    const button = document.createElement('button');
    button.textContent = buttonText;
    return document.querySelector('body').append(button);
}

createButton('Send Email');