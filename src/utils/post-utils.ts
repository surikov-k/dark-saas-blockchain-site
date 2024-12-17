export const categoryColors = {
  "Technology": "fuchsia",
  "Security": "violet",
  "Innovation": "cyan",
  "Sustainability": "lime"
}

export const jobCategoryColors = {
  "Engineering": "lime",
  "Design": "fuchsia",
  "Product": "cyan",
  "Marketing": "violet"
}

export const jobTypeColors = {
  "Full Time": "lime",
  "Part Time": "cyan",
  "Contract": "violet",
  "Remote": "fuchsia"
}

export function getPostColor(category: string) {
  return categoryColors[category as keyof typeof categoryColors] || 'fuchsia';
}

export function getJobTypeColor(jobType: string) {
  return jobTypeColors[jobType as keyof typeof jobTypeColors] || 'fuchsia';
}

export function getJobCategoryColor(jobCategory: string) {
  return jobCategoryColors[jobCategory as keyof typeof jobCategoryColors] || 'fuchsia';
}