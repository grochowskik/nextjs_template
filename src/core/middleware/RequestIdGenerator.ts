class RequestIdGenerator {
  private static counter = 0;
  private static readonly prefix =
    typeof window !== 'undefined' ? `web-${Date.now()}-` : `ssr-${Date.now()}-`;

  static generate(): string {
    this.counter = (this.counter + 1) % 100000;
    return `${this.prefix}${this.counter}`;
  }

  static extract(
    requestId: string
  ): { timestamp: number; counter: number } | null {
    const match = requestId.match(/^(?:web|ssr)-(\d+)-(\d+)$/);
    if (!match) return null;

    return {
      timestamp: parseInt(match[1], 10),
      counter: parseInt(match[2], 10),
    };
  }
}

export default RequestIdGenerator;
