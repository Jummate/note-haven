export function generateSlug(title: string) {
  return title
    .toLowerCase()
    .replace(/[^a-z0-9 -]/g, "") // Remove non-alphanumeric characters
    .replace(/\s+/g, "-") // Replace spaces with dashes
    .substring(0, 100); // Limit to 100 characters
}
