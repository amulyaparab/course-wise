export const useDebounce = (func, delay) => {
  let timerId;

  return function () {
    let context = this,
      args = arguments;
    clearTimeout(timerId);
    timerId = setTimeout(() => {
      func.apply(context, args);
    }, delay);
  };
};
