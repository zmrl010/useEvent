import { useCallback, useRef } from "react";
import useIsoLayoutEffect from "./useIsoLayoutEffect";

type Func<Arg, Result> = (...args: Arg[]) => Result;

const throwOnRender = () => {
  throw new Error("Cannot call an event handler while rendering.");
};

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
export default function useEvent<Arg, Result>(handler: Func<Arg, Result>) {
  const ref = useRef<typeof handler>(throwOnRender);

  useIsoLayoutEffect(() => {
    ref.current = handler;
  });

  return useCallback((...args: Arg[]): Result => {
    const fn = ref.current;
    return fn(...args);
  }, []);
}
