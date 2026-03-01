export function slugify(input: string) {
  const base = input
    .trim()
    .toLowerCase()
    .replace(/['"]/g, "")
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");

  return base || "title";
}

export function withSlugSuffix(slugBase: string, suffix: string) {
  const cleanSuffix = suffix.toLowerCase().replace(/[^a-z0-9]+/g, "");
  return cleanSuffix ? `${slugBase}-${cleanSuffix}` : slugBase;
}

