import React from 'react'

const SearchBar = () => {
  return (
    <form action="" className="">
      <div className="relative">
        <input
          type="text"
          placeholder="Search for movies"
          className="px-10 py-2 rounded-full text-sm bg-gray-800 text-white w-64 focus:outline-none focus:bg-gray-900"
        />
        <img
          src={searchIcon}
          className="absolute w-5 top-[30%] left-[10px]"
          alt="Search Icon"
        />
      </div>
    </form>
  )
}

export default SearchBar