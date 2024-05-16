import type { CollectionEntry } from "astro:content";
import { slugifyStr } from "./slugify";

interface Course {
  /**
   * The slugified course name.
   */
  course: string;

  /**
   * The course name.
   */
  courseName: string;
}

const getCourses = (notes: CollectionEntry<"notes">[]) => {
  const courses: Course[] = notes
    .map(n => n.data.course)
    .filter((course, index, self) => self.indexOf(course) === index)
    .sort()
    .map(course => ({ course: slugifyStr(course), courseName: course }));

  return courses;
};

export default getCourses;
