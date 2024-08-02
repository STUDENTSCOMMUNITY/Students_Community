import { FC, ReactNode } from 'react';
import '../styles/globals.css';

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <header>
          <nav>
            <ul>
              <li><a href="/students-community">Students Community</a></li>
              <li><a href="/code-discussion">Code Discussion</a></li>
              <li><a href="/dsa-discussion">DSA Discussion</a></li>
              <li><a href="/room-finding">Room Finding</a></li>
              <li><a href="/notes-sharing">Notes Sharing</a></li>
              <li><a href="/admin-panel">Admin Panel</a></li>
              <li><a href="/login">Login</a></li>
              <li><a href="/register">Register</a></li>
            </ul>
          </nav>
        </header>
        <main>{children}</main>
        <footer>
          <p>&copy; 2024 Students Community</p>
        </footer>
      </body>
    </html>
  );
};

export default Layout;
