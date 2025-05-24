import Data from "@/Shared/Data";

const Categories = () => {
  return (
    <div className="mt-3 sm:mt-10 md:mt-20 lg:mt-36 mb-10">
      <h2 className="font-bold text-3xl text-center mb-7">Car Categories</h2>
      <ul className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-8 gap-4 px-20">
        {Data.CarCategories.map(category => (
          <li key={category.id} className="flex flex-col items-center justigy-center border rounded-xl p-3  hover:scale-105 hover:shadow-xl transition-all cursor-pointer">
            <img src={category.icon} alt={category.name} className="w-10 h-10 inline-block mr-2" />
            <span className="text-lg mt-1">{category.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Categories