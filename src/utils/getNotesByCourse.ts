import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

/**
 * Retrieve all notes for a specific course.
 *
 * @param notes The whole collection of notes
 * @param course The course slug
 * @returns
 */
const getNotesByCourse = (notes: CollectionEntry<"notes">[], course: string) =>
  notes.filter(note => slugifyStr(note.data.course) === course);

export default getNotesByCourse;
