export function formatDate(input) {
    const arrObj = input.map((x) => {
      return {
        date: x[0].slice(6, 10) + "-" + x[0].slice(3, 5) + "-" + x[0].slice(0, 2),
        value: x[1],
      };
    });
  
    return arrObj;
  }