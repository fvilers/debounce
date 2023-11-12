export type Debounced<T> = T & {
  clear(): void;
};

type F<T extends unknown[]> = (...args: T) => void;

export function debounce<T extends unknown[]>(
  f: F<T>,
  timeoutMs = 300
): Debounced<F<T>> {
  let timeout: number | undefined = undefined;

  const clear = () => clearTimeout(timeout);
  const wrapper: F<T> = (...args) => {
    clear();
    timeout = setTimeout(() => f(...args), timeoutMs);
  };

  return Object.assign(wrapper, { clear });
}
