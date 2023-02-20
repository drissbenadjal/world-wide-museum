import Link from 'next/link'

export default function Button({ onClick, linkBtn, children }) {
  return (
    <>
      <Link onClick={onClick} className='btn' href={linkBtn}>{children}</Link>
    </>
  )
}