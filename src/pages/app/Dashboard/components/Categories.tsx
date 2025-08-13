
import { useQuery } from '@tanstack/react-query'
import { getAllCategories } from '@/api/getAllCategories'
import { Link } from 'react-router-dom'
export function Categories() {

    const {data: categories} = useQuery({
        queryKey: ["categories"],
        queryFn: getAllCategories
    })

  return (
    <div className="bg-purple-100 grid grid-cols-2 place-items-center p-7 gap-x-10 gap-y-3 rounded-3xl my-10">
       {categories?.map((category) => (
         <Link className='bg-white w-[150px] text-sm whitespace-nowrap text-center py-2  rounded-2xl font-bold' to={`/${category.slug}`}>{category.name}</Link>
       ))}
      </div>
  )
}
