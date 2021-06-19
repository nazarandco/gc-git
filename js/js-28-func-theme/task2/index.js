const favorites = ['id-2'];
const tree = {
  id: 'id-1',
  name: 'Products',
  nodes: [
    {
      id: 'id-2',
      name: 'Food',
      nodes: [],
    },
  ],
};

const markFavorites = (treePar, favoritesPar) => {
  const isFavorite = favoritesPar.includes(treePar.id); // favoritesPat === treePar.id, в даному випадку фіксує одразу готове значення, скажімо,
  // тут це false - і далі воно не є динамічним. а так як includes це метод, то він викликається якраз при кожному наступному виклику перемінної isFavorite ! 

  return {
    ...treePar,
    isFavorite, // === isFavorite: isFavorite,
    nodes: treePar.nodes.map((childNode) =>
      markFavorites(childNode, favoritesPar)
    ),
  };
};
const result = markFavorites(tree, favorites);

console.log(result);
