import React from 'react';
import { Route,Routes , BrowserRouter as Router, } from 'react-router-dom';
import PostListPage from './pages/PostListPage';
import PostPage from './pages/PostPage';
import CounterContainer from './containers/CounterContainer';

function App() {
  return (
    <>
    <CounterContainer />
    <Router>
    <Routes>
      <Route path="/" element={<PostListPage/>}  />
      <Route path="/:id" element={<PostPage/>} />
    </Routes>
     </Router>
    </>
  );
}

export default App;