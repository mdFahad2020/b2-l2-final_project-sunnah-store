import { useEffect, useState } from "react";
import { Link, Navigate, NavLink, useParams } from "react-router-dom";
import Loading from "../../../components/Shared/Loading";
import { Button } from "@material-tailwind/react";

const categoryData = [
  { catName: "Books", path: "/books" },
  { catName: "Electronics", path: "/electronics" },
  { catName: "Groceries & Foods", path: "/groceries" },
  { catName: "Clothing", path: "/clothing" },
  { catName: "Offers", path: "/offers" },
  { catName: "Others", path: "/others" },
];

function Categories() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    fetch("/database/products.json")
      .then((res) => {
        if (!res.ok) {
          throw new Error("Network respose was not ok");
        }
        return res.json();
      })
      .then((data) => {
        if (data.status && Array.isArray(data.data)) {
          setProducts(data.data);
        } else {
          throw new Error("Fetched data is not in the expexted format");
        }
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  const { key } = useParams();
  const category = categoryData.find((cat) => cat.path === `/${key}`);

  if (!key) {
    return <Navigate to={"/books"} replace />;
  }

  if (!category) {
    throw new Error("Invalid key");
  }

  const filteredProducts = products.filter(
    (product) =>
      product.category.toLowerCase() === category.catName.toLowerCase()
  );

  if (loading) {
    return <Loading />;
  }

  return (
    <>
      <div className="border-b border-gray-300 mt-2">
        <div className="flex flex-wrap justify-center gap-4 lg:gap-5">
          {categoryData.map((category) => (
            <NavLink
              key={category.path}
              to={category.path}
              className={({ isActive }) =>
                `px-4 py-2 text-sm sm:text-base font-medium transition-colors duration-300 ${
                  isActive
                    ? "text-green-500 font-bold border-b-4 border-green-500"
                    : "text-gray-500 hover:text-green-500"
                }`
              }
            >
              {category.catName}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="p-4">
        <h2 className="text-lg sm:text-xl font-bold text-gray-800 mb-4">
          {category?.catName}
        </h2>
        <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.slice(0, 4).map((product) => (
              <div key={product._id} className="border rounded-lg p-4">
                <img
                  className="w-full h-80 object-cover rounded-md"
                  src={product.image}
                  alt={product.name}
                />
                <h3 className="mt-2 text-lg font-bold">{product.name}</h3>
                <p className="text-sm text-gray-600">{product.description}</p>
                <p className="mt-2 text-lg font-semibold">
                  Price: ৳{product.price}
                </p>
              </div>
            ))
          ) : (
            <p>No products available in this category</p>
          )}
        </div>
        {filteredProducts && (
          <Link to={`/products/${key}`}>
            <Button className="bg-[#00BF63] mt-4">Load More</Button>
          </Link>
        )}
      </div>
    </>
  );
}

export default Categories;
