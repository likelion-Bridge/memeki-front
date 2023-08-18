import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component';
import Detail from './component/detail/Detail';
import Country from './component/list/country/Country';
import Year from './component/list/year/Year';
import Search from './component/search/Search';
import Upload from './component/upload/Upload';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/country" element={<Country />} />
          <Route path="/year" element={<Year />} />
          <Route path="/search" element={<Search />} />
          <Route path="/upload" element={<Upload />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
