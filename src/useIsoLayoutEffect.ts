import { useEffect, useLayoutEffect } from "react";

/**
 * Isomorphic layout effect that falls back
 * to useEffect when server rendering
 */
const useIsoLayoutEffect =
  typeof window === "undefined" ? useEffect : useLayoutEffect;

export default useIsoLayoutEffect;
