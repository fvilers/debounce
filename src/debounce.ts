type F<T extends unknown[]> = (...args: T) => void;

export function debounce<T extends unknown[]>(f: F<T>, timeoutMs = 300): F<T> {
  let timeout: number | undefined = undefined;

  const wrapper: F<T> = (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => f(...args), timeoutMs);
  };

  return wrapper;
}
