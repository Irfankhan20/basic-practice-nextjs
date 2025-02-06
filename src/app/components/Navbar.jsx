const Navbar = () => {
  return (
    <div>
      <nav className="flex justify-center bg-slate-600 text-white font-medium py-3 shadow-xl">
        <ul className="flex justify-between w-1/2">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
