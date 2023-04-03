import styles from './app.module.scss';
import NxWelcome from './nx-welcome';

import { Route, Link } from 'react-router-dom';
import News from './news/news';
import CreateNews from './create-news/create-news';

export function App() {
  return (
    <>
      {/*<NxWelcome title="web" />*/}
      <div />

      {/* START: routes */}
      {/* These routes and navigation have been generated for you */}
      {/* Feel free to move and update them to fit your needs */}
      <div role="navigation">
        <ul>
          <li>
            <Link to="/">Главная</Link>
          </li>
          <li>
            <Link to="/news">Новости</Link>
          </li>
          <li>
            <Link to="/create">Добавить новость</Link>
          </li>
        </ul>
      </div>
      <Route
        path="/"
        element={<h1>Главная страница</h1>}
      />
      <Route
        path="/news"
        element={<News />}
      />
      <Route
        path="/create"
        element={<CreateNews />}
      />
      {/* END: routes */}
    </>
  );
}

export default App;