import Data from "@/data/Data"


const Category = () => {
  return (
    <div>
  <h2 className='text-center text-3xl font-semibold font-Bree'>Browse By Type</h2>
  <div className="grid grid-col-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-9 gap-4 px-20 mt-8">
    {Data.Category.map((category) => (
        <div key={category.id} className="border rounded-md p-3 items-center flex flex-col hover:shadow-lg transition-all cursor-pointer">
            <img src={category.icon} alt="ICON"  width={35} height={35}/>
            <h2 className="font-poppins tracking-tight font-normal">{category.name}</h2>
        </div>
    ))}
  </div>
    </div>
  )
}

export default Category
