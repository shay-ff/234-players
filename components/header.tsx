export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 bg-gray-800 text-white">
      <div className="flex items-center">
        <h1 className="ml-2 text-lg font-bold">og-games</h1>
      </div>
      <nav>
        <ul className="flex space-x-4">
          <li>
            <a href="/" className="text-gray-300 hover:text-white">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="text-gray-300 hover:text-white">
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
