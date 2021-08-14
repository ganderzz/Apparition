export const generateUniqueId = (function generateUniqueId(id = 0) {
  return function () {
      return id++;
  }
})(0);