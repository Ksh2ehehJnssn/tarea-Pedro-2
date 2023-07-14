import Enlace from './Enlaces'

type Props = {}

export default function Header({}: Props) {
  return (
    <div className='flex justify-between px-4 py-2 text-white border bg-slate-950'> 
        <ul className='flex gap-2'>
            <li><Enlace text='Todos' route='/'  /></li>
            <li><Enlace text='Exteriores' route='/Exteriores'  /></li>
            <li><Enlace text='Interiores' route='/Interiores' /></li>
            <li><Enlace text='Jardin' route='/Jardin' /></li>
        </ul>
    </div>
  )
}