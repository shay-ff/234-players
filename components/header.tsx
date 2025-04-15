export default function Header() {
  return (
      <header className="flex items-center justify-between p-4 bg-gray-800 text-white shadow-md">
          <h1 className="text-xl font-bold tracking-wide">OG Games</h1>
          <nav>
              <ul className="flex space-x-6 text-sm">
                  <li>
                      <a href="/" className="text-gray-300 hover:text-white transition-colors">
                          Home
                      </a>
                  </li>
                  <li>
                      <a href="/about" className="text-gray-300 hover:text-white transition-colors">
                          About
                      </a>
                  </li>
              </ul>
          </nav>
      </header>
  );
}
