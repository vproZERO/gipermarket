import React from "react";
import useDebounce from "../../../hooks/useDebounse";
import useSearchAll from "../service/query/useSearchAll";
import Skeleton from "react-loading-skeleton";
import "./search.css";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const [input, setInput] = React.useState("");
  const value = useDebounce(input);
  const { data, isLoading } = useSearchAll(value);

  React.useEffect(() => {
    setInput("");
  }, [location.pathname]);
  return (
    <div className="w-full">
      <div className="">
        <input
          className="w-full py-4 rounded-lg pl-4 pr-4 h-[46px] font-normal text-base text-text placeholder:text-text border outline-gray2 border-gray bg-inherit"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Поиск"
        />
      </div>
      {isLoading ? (
        <div className="absolute left-0 grid md:grid-cols-3 grid-cols-2 z-50  gap-x-10 md:px-10 px-2 right-0 bg-white md:py-10  ">
          <div className="mb-3 z-50">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
          <div className="mb-3 z-50 hidden md:block">
            <Skeleton variant="text" height={45} count={1} />
          </div>
        </div>
      ) : (
        <div
          className={
            data
              ? " search_context bg-white  grid md:grid-cols-3 grid-cols-2 md:gap-3 absolute z-60 py-4 md:py-10"
              : ""
          }
        >
          {data?.map((item) => (
            <div key={item.id} className={data ? "ms:mx-10 mx-2 p-1" : ""}>
              {item.title ? (
                <Link
                  className="transition hover:text-red1 hover:-translate-y-2 md:font-semibold font-normal md:text-xl text-lg text-text block"
                  to={`/catalog/${item.title}`}
                >
                  {item.title}
                </Link>
              ) : (
                <Skeleton />
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
