let debounceTimer;
export const debounce = (cb, delay) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    cb();
    debounceTimer = undefined;
  }, delay);
};
