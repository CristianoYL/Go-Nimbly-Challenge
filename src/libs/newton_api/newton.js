/*
 encasulate the newton api caller into a module thus we can make use of it
 more conveniently everywhere in our code.
*/

const askNewton = (operation, expression) => {
  // remove illegal chars
  let cleanExpression = expression.replace(/[^a-z0-9A-Z+/*().^-]/g, '');
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
        switch (operation) {
          case 'simplify':
            return `The simplified result of expression ${expression} is: ${jsonData.result}`;
          case 'factor':
            return `The factorized result of expression ${expression} is: ${jsonData.result}`;
          case 'derive':
            return `The derivation of expression ${expression} is: ${jsonData.result}`;
          case 'integrate':
            return `The integration of expression ${expression} is: ${jsonData.result}`;
          case 'zeroes':
            if (jsonData.result.includes(null)) {
              return `Cannot find zero points for expression ${expression}`;
            }
            return `The zero points found for expression ${expression} are: ${jsonData.result}`;
          default:
            throw new Error('Invalid operation');
        }
      }
    });
};

export { askNewton };
