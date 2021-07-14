import { useJSEnabled } from "../useJSEnabled";

/**
 * Returns true when JS has booted and is executing in a client context.
 */
export const useClientOnly = useJSEnabled;
