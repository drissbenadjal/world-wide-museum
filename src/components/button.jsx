import Link from "next/link";

export default function Button({ onClick, linkBtn, children, target }) {
  return (
    <>
      <Link onClick={onClick} className="btn" href={linkBtn} target={target}>
        {children}
      </Link>
    </>
  );
}
