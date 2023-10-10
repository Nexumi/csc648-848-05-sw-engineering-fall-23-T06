/**
 * This is the Search bar component which can be reused on any page.
 */

import { createSignal } from 'solid-js';

export default function SearchBar({ onSearch }) {
  const [query, setQuery] = createSignal('');

  const handleSearch = () => {
    onSearch(query());
  };

  return (
    <>
      <div>
        <input type="text" value={query()} onInput={(e) => setQuery(e.target.value)} />
        <button onClick={handleSearch}>Search</button>
      </div>
    </>
  );
}