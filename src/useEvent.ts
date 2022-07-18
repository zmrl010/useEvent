import { useCallback, useEffect, useLayoutEffect, useRef } from "react";

type Func<Args, Result> = (...args: Args[]) => Result;

const throwOnRender = () => {
  throw new Error("Cannot call an event handler while rendering.");
};

/**
 * Isomorphic layout effect that falls back
 * to useEffect when server rendering
 */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

/**
 * Memoize a callback function that holds
 * the same function reference on every render.
 *
 * *Must be called outside of render,
 * usually while handling an event*
 *
 * @param handler - Callback event handler
 *
 * @returns Referentially stable event handler
 */
export default function useEvent<A, R>(handler: Func<A, R>) {
  const ref = useRef<typeof handler>(throwOnRender);

  useIsoLayoutEffect(() => {
    ref.current = handler;
  });

  return useCallback((...args: A[]): R => {
    const fn = ref.current;
    return fn(...args);
  }, []);
}
