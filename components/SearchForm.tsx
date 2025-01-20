import React from "react";
import Image from "next/image";
import Form from "next/form";
import SearchFormReset from "./SearchFormReset";
import { SearchIcon } from "lucide-react";

const SearchForm = ({ query }: { query?: string }) => {
  return (
    <Form action="/" scroll={false} className="search-form">
      <input
        name="query"
        defaultValue={query}
        placeholder="Search for Ideas"
        className="search-input"
      />
      <div className="flex gap-2">
        {query && <SearchFormReset />}
        <button type="submit" className="search-btn text-white">
          <SearchIcon size={24} />
        </button>
      </div>
    </Form>
  );
};

export default SearchForm;
