//put your code here

const getMostActiveDevs = (obj) =>
  fetch(`https://docs.github.com/rest/reference/repos#list-commits`)
  .then(
    (response) => console.log(response.json())
  );

getMostActiveDevs({ days: 7, userId: 'userId', repoId: 'repoId' });
