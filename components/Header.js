import Image from "next/image";
import {
  SearchIcon,
  GlobeAltIcon,
  MenuIcon,
  UsersIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";
import { useState } from "react";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";
function Header({placeholder}) {
  const [searchInput, setSearchInput] = useState("");
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [noOfGuest, setNoOfGuest] = useState(1);
  const router = useRouter();

  const selectionDate = {
    startDate,
    endDate,
    key: "selection",
  };
  const handleCancel = () => {
    setSearchInput("");
  };
  const handleSearch = () => {
    router.push({
      pathname: "search",
      query: {
        location: searchInput,
        noOfGuest,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
      },
    });
  };
  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };
  return (
    <header className='sticky top-0 z-50 grid grid-cols-3 bg-white shadow-md px-5 py-5 md:px-10'>
      {/* Left */}
      <div
        onClick={() => router.push("/")}
        className='relative flex items-center h-10 cursor-pointer my-auto'
      >
        <Image
          src='https://links.papareact.com/qd3'
          layout='fill'
          objectFit='contain'
          objectPosition='left'
        />
      </div>
      {/* Center */}
      <div className='flex items-center md:border-2 rounded-full py-2 md:shadow-sm'>
        <input
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
          className='pl-5 bg-transparent outline-none flex-grow text-sm text-gray-600 placeholder-gray-400'
          type='text'
          placeholder={placeholder ||'Start your search'}
        />
        <SearchIcon className=' hidden h-8 md:inline-flex bg-red-500 text-white rounded-full p-2 cursor-pointer md:mx-2' />
      </div>
      {/* Right */}
      <div className='flex items-center space-x-4 justify-end text-gray-500 '>
        <p className='hidden md:inline cursor-pointer'>Become a Host</p>
        <GlobeAltIcon className='h-6 cursor-pointer' />
        <div className='flex p-2 items-center space-x-2 rounded-full border-2'>
          <UserCircleIcon className='h-6 cursor-pointer' />
          <MenuIcon className='h-6 cursor-pointer' />
        </div>
      </div>
      {searchInput && (
        <div className='flex flex-col col-span-3 mx-auto mt-4'>
          <DateRangePicker
            ranges={[selectionDate]}
            minDate={new Date()}
            rangeColors={["#fd5b61"]}
            onChange={handleSelect}
          />
          <div className='flex items-center border-b mb-4'>
            <h2 className='text-2xl pl-2 flex-grow font-semibold'>
              Number of Guests
            </h2>
            <UsersIcon className='h-5' />
            <input
              type='number'
              min={1}
              onChange={(e) => setNoOfGuest(e.target.value)}
              value={noOfGuest}
              className='w-12 pl-2 text-lg outline-none text-red-400'
            />
          </div>
          <div className='flex'>
            <button onClick={handleCancel} className='flex-grow text-gray-400'>
              Cancel
            </button>
            <button onClick={handleSearch} className='flex-grow text-red-400'>
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
