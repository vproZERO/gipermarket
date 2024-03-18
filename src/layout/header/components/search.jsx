import React from "react";
import useDebounce from "../../../hooks/useDebounse";
import useSearchAll from "../service/query/useSearchAll";
import Skeleton from "react-loading-skeleton";
import './search.css'
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Search = () => {
  const location = useLocation();
  const [input, setInput] = React.useState("");
  const value = useDebounce(input);
  const { data, isLoading } = useSearchAll(value);

  React.useEffect(() => {
      setInput("");
  }, [location.pathname])
  return (
    <div className="w-[673px]">
      <div className="">
        <input
          className="w-full py-4 pl-4 pr-4 h-[48px] font-normal text-base text-text placeholder:text-text border border-[#857372]"
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Поиск"
        />
      </div>
      {isLoading ? (
        <Skeleton height={20} count={6} />
      ) : (
        <div className={data ? ' search_context bg-white  grid grid-cols-3 gap-3 absolute z-60 py-10' : ''}>
          {data?.map((item) => (
            <div key={item.id} className={data ? 'mx-10 p-1' : ''}>
             {item.title ? (
              <Link className="transition hover:text-red1 hover:-translate-y-2 font-semibold text-xl text-text block" to={`/catalog/${item.title}`}>{item.title}</Link>
             ) : (
              <h2>Hech narsa topilmadi</h2>
             )}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
