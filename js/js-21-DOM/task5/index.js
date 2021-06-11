
export const setTitle = (text) => {
    const title = document.querySelector('.title').textContent = text;
    return title;
}