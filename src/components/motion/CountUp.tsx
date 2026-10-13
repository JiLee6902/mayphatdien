/**
 * Static number display. Previously animated a count-up on scroll; now renders
 * the final value immediately (no client JS) to keep the page fast.
 * `prefix`/`suffix` wrap the number (e.g. suffix "+" → "70+").
 */
export function CountUp({
  value,
  prefix = '',
  suffix = '',
  className = '',
}: {
  value: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}) {
  return (
    <span className={className}>
      {prefix}
      {value}
      {suffix}
    </span>
  );
}
