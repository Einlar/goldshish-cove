import type { CollectionEntry } from "astro:content";

const getSortedNotes = (notes: CollectionEntry<"notes">[]) => {
  return notes.sort(
    (a, b) =>
      // Sort by year first (desc) and name second (asc)
      b.data.year - a.data.year || a.data.course.localeCompare(b.data.course)
  );
};

export default getSortedNotes;
