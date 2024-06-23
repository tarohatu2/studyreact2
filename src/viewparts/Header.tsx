import { Dropdown } from './DropdownMenu'
import { Link } from 'react-router-dom'

export const Header = () => {
  return (
    <div className="mt-10 ml-3 mr-3 flex justify-between">
      <Link to="/">
        <h1 className="text-3xl font-bold">なんとかApp</h1>
      </Link>
      <Dropdown />
    </div>
  )
}