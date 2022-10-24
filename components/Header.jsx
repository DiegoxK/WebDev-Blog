import { useState, useEffect } from "react";
import Link from "next/link";
import { getCategories } from "../services";
import DropdownMenu from "./DropdownMenu";

const Header = () => {
  const [categories, setCategories] = useState([]);
  const [toggledDropdown, setToggledDropdown] = useState(true);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="mx-auto text-white mb-8 shadow-lg">
      <div className="w-full flex justify-between px-10 bg-dark py-4">
        <div className="md:float-left block">
          <Link href="/">
            <h1 className="cursor-pointer not-selectable font-bold text-2xl  hover:text-secondary">
              WebDev Blog!
            </h1>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          <DropdownMenu
            toggledDropdown={toggledDropdown}
            setToggledDropdown={setToggledDropdown}
          />
        </div>
      </div>
      <div
        className={`${
          toggledDropdown && "hidden"
        } bg-dark-800 grid px-10 p-5 grid-rows-3 grid-flow-col gap-4 justify-end`}
      >
        {categories.map((category, index) => (
          <Link key={index} href={`/category/${category.slug}`}>
            <span
              onClick={() => setToggledDropdown(true)}
              className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer"
            >
              {category.name}
            </span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Header;
