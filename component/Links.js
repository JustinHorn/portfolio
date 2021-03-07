import Link from 'next/link';

import { useRouter } from 'next/router';

const Links = ({ links, prefix = '' }) => {
  const router = useRouter();

  links = links.map((l) => new LinkType(l));

  console.log(router.pathname);
  return links.map((l) => (
    <span className={router.pathname.includes(l.path) ? 'activeLink' : ''}>
      <Link href={prefix + l.path} scroll={false}>
        {l.name}
      </Link>
    </span>
  ));
};

function LinkType(path, name) {
  this.path = path;

  this.name =
    name ??
    path.slice(1, 2).toUpperCase() + path.slice(2, getSecondSlash(path));
}

const getSecondSlash = (string) => {
  let secondSlash = string.indexOf('/', 1);
  secondSlash === -1 && (secondSlash = string.length);
  return secondSlash;
};

export default Links;
