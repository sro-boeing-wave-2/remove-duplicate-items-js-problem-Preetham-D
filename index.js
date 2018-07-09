/**
 * Removes all the duplicate items from the collection
 * @param {Array} items
 * @returns {Array}
 */
const removeDuplicateItems = (items) => {
  const set1 = new Set(items);
  const array = Array.from(set1);
  return (array);
};

module.exports = removeDuplicateItems;
