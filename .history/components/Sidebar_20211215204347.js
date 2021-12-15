import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusCircleIcon,
} from '@heroicons/react/outline';

function Sidebar() {
  return (
    <div>
      <div>
        <button className="flex items-center space-x-2 hover:text-white">
          <HomeIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Home</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <SearchIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Search</p>
        </button>
        <button className="flex items-center space-x-2 hover:text-white">
          <LibraryIcon className="flex items-center space-x-2 hover:text-white" />
          <p>Your Library</p>
        </button>
      </div>
    </div>
  );
}

export default Sidebar;
