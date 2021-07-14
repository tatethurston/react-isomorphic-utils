/**
 * Convenience utility for checking whether running in a client or server context.
 */
export function isClient(): boolean {
  return typeof window !== "undefined";
}
