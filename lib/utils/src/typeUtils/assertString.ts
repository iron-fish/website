export function assertString(x: unknown, fallback?: string) {
  if (typeof x !== "string" && typeof fallback !== "undefined") {
    return fallback;
  }

  if (typeof x !== "string") {
    throw new Error("Expected string");
  }

  return x as string;
}
