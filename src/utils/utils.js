let debounceTimer;
export const debounce = (cb, delay) => {
  clearTimeout(debounceTimer);
  debounceTimer = setTimeout(() => {
    cb();
    debounceTimer = undefined;
  }, delay);
};

export const validateEmail = (email) => {
  const regex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  return regex.test(email);
};
