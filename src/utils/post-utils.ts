export const categoryColors = {
  "Technology": "fuchsia",
  "Security": "violet",
  "Innovation": "cyan",
  "Sustainability": "lime"
}

export function getPostColor(category: string) {
  return categoryColors[category as keyof typeof categoryColors] || 'fuchsia';
}