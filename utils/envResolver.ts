export function resolveValue(value: string): string {

  if (!value) return value;

  if (value.startsWith('<') && value.endsWith('>')) {

    const key = value.slice(1, -1);
    return process.env[key] || value;

  }

  return value;

}