
interface NavLinksProps {
    title: string,
    Icon: any,
    active?: boolean
}
function NavLink({title, Icon, active}: NavLinksProps) {

  return (
    <div className={`${active && 'bg-neutral-800'} flex items-center space-x-5 px-3 py-3 hover:bg-neutral-800 rounded-lg duration-100 cursor-pointer`}>
        <Icon className='h-6 text-gray-200' />
        <h2 className='text-sm text-gray-200 font-medium'>{title}</h2>
    </div>
  )
}

export default NavLink