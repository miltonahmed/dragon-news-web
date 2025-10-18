import { use } from "react";
import { NavLink } from "react-router";

const categoryPromise = fetch('/categories.json').then(res => res.json());

const Categories = () => {
  const categories = use(categoryPromise);
  console.log(categories)
  return (
    <div>
      <h2 className="font-bold">All Categories({categories.length})</h2>
      <div className="grid grid-cols-1 mt-5 gap-3">
        {categories.map(category => (
          <NavLink
            // Dynamic path  
            to={`/category/${category.id}`}
            key={category.id}
            className={({ isActive }) =>
              // Normal style
              `btn bg-base-100 border-0 hover:bg-base-200 ${
              isActive
                // true
                  ? 'text-primary font-bold bg-base-200'
                  : 'text-accent font-normal hover:text-primary transition-all duration-300'
              }`
            }
          >
            {category.name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default Categories;
