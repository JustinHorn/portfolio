import Link from "next/link";

import { useRouter } from "next/router";

const Links = ({ links, prefix = "" }) => {
  const router = useRouter();

  links = links.map((l) => new LinkType(l));

  return links.map((l) => (
    <span className={router.pathname.includes(l.path) && "activeLink"}>
      <Link href={prefix + l.path}>{l.name}</Link>
    </span>
  ));
};

function LinkType(path, name) {
  this.path = path;
  this.name = (name && name) || path.slice(1, 2).toUpperCase() + path.slice(2);
}

export default Links;
