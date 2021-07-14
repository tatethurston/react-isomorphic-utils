import { useState, useEffect } from "react";

/**
 * Returns true when JS has booted and is executing in a client context. This can be used to implement progressive enhancement. When JS boots on the client this hook will execute and return true.
 */
export function useJSEnabled(): boolean {
  const [enabled, setEnabled] = useState(false);
  useEffect(() => {
    setEnabled(true);
  }, []);
  return enabled;
}
