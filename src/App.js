import './App.css';
import React from 'react'
import { Routes, Route } from 'react-router-dom';
import NoMatch from './pages/NoMatch';
import Navbar from './components/Navbar';
import Home from './pages/Home'
import About from './pages/About'
import NestedRoute from './pages/NestedRoute';
import NestedOne from './pages/NestedRoute/NestedOne'
import NestedTwo from './pages/NestedRoute/NestedTwo'
import Users from './pages/Users';
import UsersDetail from './pages/Users/UsersDetail';
import Profile from './pages/Profile';
import Login from './pages/Login';
import RequireAuth from './components/RequireAuth';
// import BigChunk from './pages/BigChunk';
const LazyBigChunk = React.lazy(() => import('./pages/BigChunk'))

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        {/* Nested routing demo */}
        <Route path="nested-route" element={<NestedRoute />}>
          <Route index element={<NestedOne />} />
          <Route path="nested-one" element={<NestedOne />} />
          <Route path="nested-two" element={<NestedTwo />} />
        </Route>
        {/* Dynamic routing demo */}
        <Route path="users" element={<Users />} />
        <Route path="users/:userId" element={<UsersDetail />} />
        {/* Lazy Loading demo */}
        {/* <Route path="big-chunk" element={<LazyBigChunk />} /> */}
        <Route path="big-chunk" element={
          <React.Suspense fallback="Loading...">
            <LazyBigChunk />
          </React.Suspense>}
        />
        {/* Authentication demo */}
        <Route path="profile" element={<RequireAuth><Profile /></RequireAuth>} />
        <Route path="login" element={<Login />} />
        {/* No Match demo */}
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </div>
  );
}

export default App;
