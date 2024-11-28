import Form from 'next/form'
import { SearchIcon } from "lucide-react";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

function SearchBar() {
//   const router = useRouter();
//   const [query, setQuery] = useState("");
//   const handleSearch = (e: React.FormEvent) => {
//     e.preventDefault();
//     router.push(`/search?q=${encodeURIComponent(query.trim())}`);
//   };

  return (
    <div>
      <Form action={'/search'} className="relative">
        <input
          type="text"
          name="q"
        //   onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for events..."
          className="w-full py-3 px-4 pl-12 bg-white rounded-xl border border-gray-200 shadow-sm focus:outline-none focus:border-transparent focus:ring-2 focus:ring-blue-500 transition-all duration-200"
        />
        <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
        <button
          type="submit"
          className="absolute right-3 top-1/2 -translate-y-1/2 bg-blue-500 text-white px-3 py-1.5 rounded-lg text-sm hover:bg-blue-700 transition-colors duration-200"
        >
          Search
        </button>
      </Form>
    </div>
  );
}

export default SearchBar;
