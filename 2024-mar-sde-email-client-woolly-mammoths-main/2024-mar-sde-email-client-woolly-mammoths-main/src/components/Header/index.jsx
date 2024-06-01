function Header({ toggleMenu }) {
  return (
    <div>
      <header className="bg-gray-500 py-4 px-2.5 text-white flex justify-between items-center w-full">
        <button onClick={toggleMenu} className="border rounded p-1 md:hidden">
          Menu
        </button>
        <h1 className="text-2xl font-semibold">Email Client</h1>
        <div className="username flex items-center">
          <span>
            <i className="fa-solid fa-user text-black border-black border p-1 rounded-full"></i>
          </span>
          <h4 className="text-sm ml-1.5">User Name</h4>
        </div>
      </header>
    </div>
  );
}

export default Header;
