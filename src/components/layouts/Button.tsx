type Props = {
    text: string
}

export default function Button(props: Props) {
  return (
    <button type='button' className='p-4 font-bold text-white bg-blue-400' >
        {props.text}
    </button>
  )
}