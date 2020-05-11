// **** Helper Functions ***** //
// **                       ** //

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

export const copy = object => JSON.parse(JSON.stringify(object));

export const waitFor = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
