import Link from 'next/link'

export default function Button(props) {
  return (
      <>
          <Link className='btn' href={props.linkbtn}>{props.name}</Link>
      </>
  )
}