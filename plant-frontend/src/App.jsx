// // src/App.jsx
// import React from 'react';
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';  
// import Login from './components/Login';
// import Signup from './components/Signup';
// import Search from './components/Search';
// import PlantDisease from './components/PlantDisease';

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Login />,
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
//   {
//     path: "/search",
//     element: <Search />,
//   },
//   {
//     path: "/plantdisease",
//     element: <PlantDisease />,
//   },
// ]);

// function App() {
//   return (
//     <RouterProvider router={router} />
//   );
// }

// export default App;
// src/App.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';  
import Login from './components/Login';
import Signup from './components/Signup';
import Search from './components/Search';
import PlantDisease from './components/PlantDisease';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search" element={<Search />} />
        <Route path="/plantdisease/:id" element={<PlantDisease />} />
      </Routes>
    </Router>
  );
}

export default App;
