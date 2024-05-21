import { slugifyStr } from "@utils/slugify";
import type { CollectionEntry } from "astro:content";

export interface Props {
  href?: string;
  frontmatter: CollectionEntry<"notes">["data"];
  secHeading?: boolean;
}

export default function NoteCard({ href, frontmatter }: Props) {
  const { course, description, year, authors, professor } = frontmatter;
  const title = `${course} (${year})`;

  const headerProps = {
    style: { viewTransitionName: slugifyStr(title) },
    className:
      "text-lg inline-block font-medium decoration-dashed hover:underline",
  };

  const getFormattedName = (fullName: string) => {
    const [firstName, ...rest] = fullName.split(" ");
    const surname = rest.join(" ");
    return `${firstName.charAt(0)}. ${surname}`;
  };

  return (
    <li className="my-6 transform rounded-lg pb-1 pt-1">
      <a
        href={href}
        className="inline-block text-lg font-medium text-skin-accent decoration-dashed underline-offset-4 focus-visible:no-underline focus-visible:underline-offset-0"
      >
        <h2 {...headerProps}>
          {course} ({year})
        </h2>
        <span className="ml-1 text-sm text-gray-400">
          by {authors.map(a => getFormattedName(a)).join(", ")}.
        </span>
      </a>

      <p className="mb-1 text-sm text-gray-300">
        <strong>Professor:</strong> {professor}
      </p>
      <p className="text-normal mt-2 text-gray-200">{description}</p>
    </li>
  );
}
