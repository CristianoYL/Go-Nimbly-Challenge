/*
 encasulate the newton api caller into a module thus we can make use of it
 more conveniently everywhere in our code.
*/
const askNewton = (operation, expression) => {
  // remove illegal chars
  let cleanExpression = expression.replace(/[^a-z0-9A-Z+\-/*().\^]/g, '');
  // replace / with (over) as per required by API
  cleanExpression = cleanExpression.replace(/[/]/g, '(over)');
  const url = `https://newton.now.sh/${operation}/${cleanExpression}`;
  return fetch(url)
    .then((res) => {
      if (res.ok) {
        return res.json();
      }
      throw new Error('Newton API Server Error.');
    })
    .then((jsonData) => {
      if (jsonData.result.includes('error')) {
        throw new Error('Invalid Syntax found in your input.');
      } else {
        return jsonData;
      }
    })
    .catch((/* e */) => {
      // console.log(e);
      throw new Error('An error has occurred.');
    });
};

export { askNewton };
