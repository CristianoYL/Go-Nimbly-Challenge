/*
 encasulate the newton api caller into a module thus we can make use of it
 more conveniently everywhere in our code.
*/
const askNewton = (operation, expression) => {
  const url = `https://newton.now.sh/${operation}/${expression}`;
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Newton API Server Error.');
    })
    .catch((/* e */) => {
      // console.log(e);
      throw new Error('An error has occurred.');
    });
};

export { askNewton };
