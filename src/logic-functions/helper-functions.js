// **** Helper Functions ***** //
// **                       ** //

export const random = (min, max) => {
  return Math.floor(Math.random() * (max - min) + min);
};

export const waitFor = time => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, time);
  });
};
