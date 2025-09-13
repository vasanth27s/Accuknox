import React, { useEffect, useRef, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useRecoilState, useRecoilValue } from 'recoil';
import { searchQueryState } from '../atoms/dashboardAtom';
import { permanentData } from '../atoms/dataAtom';

const NavSearchBar = () => {
  const [searchQuery, setSearchQuery] = useRecoilState(searchQueryState);
  const [filteredWidgets, setFilteredWidgets] = useState([]);
  const data = useRecoilValue(permanentData);
  const dropdownRef = useRef(null);

  const handleSearchChange = (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    const allWidgets = data.categories.flatMap(category => category.widgets);
    const filtered = allWidgets.filter(widget =>
      widget.widgetName.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredWidgets(filtered);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setSearchQuery('');
      setFilteredWidgets([]);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div className="flex items-center bg-[#f1f5fa] w-[18vw] border border-[#d1d9e6] rounded-md px-2 py-1">
        <FontAwesomeIcon
          icon={faMagnifyingGlass}
          className="text-gray-500 text-sm mr-2"
        />
        <input
          type="text"
          placeholder="Search anything..."
          value={searchQuery}
          onChange={handleSearchChange}
          className="bg-transparent text-sm focus:outline-none w-full"
        />
      </div>

      {searchQuery && filteredWidgets.length > 0 && (
        <ul className="absolute bg-white border border-gray-300 rounded-md w-[18vw] mt-1 max-h-48 overflow-y-auto shadow-md text-sm">
          {filteredWidgets.map((widget, index) => (
            <li key={index} className="p-2 hover:bg-gray-100 cursor-pointer">
              {widget.widgetName}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavSearchBar;
