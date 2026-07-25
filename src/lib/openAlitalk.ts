interface OpenAlitalkOptions {
  /** Company ID, required */
  bizId: string;
  /** Business type, 2 = storefront (default: 2) */
  bizType?: number;
  /** Whether to hide iframe overlay (default: true) */
  hideIFrame?: boolean;
  /** Loading callback, triggered during initial resource load */
  onLoading?: (loading: boolean) => void;
}

/**
 * Open the Alitalk chat window.
 * Communicates with the parent container via window.openAlitalk.
 */
export function openAlitalk(options: OpenAlitalkOptions): void {
  try {
    if (
      typeof window !== "undefined" &&
      typeof (window as unknown as Record<string, unknown>).openAlitalk === "function"
    ) {
      (window as unknown as Record<string, (o: OpenAlitalkOptions) => void>).openAlitalk(options);
      return;
    }
    if (
      typeof window !== "undefined" &&
      window.parent &&
      window.parent !== window &&
      typeof (window.parent as unknown as Record<string, unknown>).openAlitalk === "function"
    ) {
      (window.parent as unknown as Record<string, (o: OpenAlitalkOptions) => void>).openAlitalk(options);
      return;
    }
  } catch {
    // Cross-origin access to parent may throw — silently ignore
  }
}
