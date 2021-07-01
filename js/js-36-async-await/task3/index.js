const getUsersData = (userId) =>
  fetch(`https://api.github.com/users/${userId}`).then((response) => {
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return response.json();
  });

const getUsersBlogs = async ([...userId]) => {
  const response = await [...userId].map((userIdItem) =>
    getUsersData(userIdItem).then((body) => body.blog)
  );
  return Promise.all(response)
    .then((value) => value)
    .catch((err) => console.log(err.message));
};

getUsersBlogs(['google', 'facebook', 'gaearon']).then((linksList) =>
  console.log(linksList)
);

