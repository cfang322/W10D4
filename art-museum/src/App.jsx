import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import harvardArt from './data/harvardArt';
import GalleryNavigation from './components/GalleryNavigation';


const router = createBrowserRouter([
  {
    path: "/galleries",
    // element: <><h2>Harvard Art Museum</h2><p>Look, but Don&apos;t Touch. Please select a Gallery in the navigation bar.</p></>
    element: <GalleryNavigation galleries={harvardArt.records} />
  },
  { 
    path: "*",
    element: <h2>Page Not Found</h2>
  }
]);

function App() {
  // console.log(harvardArt);
  return <RouterProvider router={router}/>;
}

export default App;
