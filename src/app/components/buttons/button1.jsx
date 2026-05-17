export default function Button({children}) {
  return (
    <div className='inline-block rounded-lg p-px bg-linear-to-r from-[rgb(5,3,18)] via-gray-700 to-gray-200'>
      <button className='px-4 py-1 rounded-[7px] bg-[rgb(24,4,34)] text-white'>
        {children}
      </button>
    </div>
  )
}
