import { CATEGORIES } from "@/utils/links";

interface CategoryProps {
  categories: string[];
  selectedCategory: string;
  onSelect: (category: string) => void;
}

function Categories({ categories, selectedCategory, onSelect }: CategoryProps) {
  return (
    <section className="flex group w-full px-3 py-1 pb-2 flex-shrink-0 gap-3 scrollbar-thin scrollbar-thumb-neutral-700 scrollbar-track-transparent overflow-x-scroll scrollbar-thumb-rounded-full scrollbar-track-rounded-full">
      {categories.map((category, id) => (
        <div
          onClick={() => onSelect(category)}
          key={id}
          className={`${
            selectedCategory === category
              ? "bg-white text-neutral-800"
              : "bg-neutral-800"
          } hover:bg-neutral-700' } whitespace-nowrap text-gray-200 px-3 py-2 rounded-lg  duration-100 font-semibold text-sm cursor-pointer`}
        >
          {category}
        </div>
      ))}
    </section>
  );
}

export default Categories;
