import{ React}from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./layout/layout";
import Policy from "./policy/policy";
 
import "./../styles/index.scss"
const App = () => {
  
  const router = createBrowserRouter([{
    path : "/",
    element : <Layout />, 
  },
  {
    path: "/policy",
    element : <Policy/>
  }
])

  return(
    <div>
       <RouterProvider router = {router}/>
    </div>
  )
}
  export default App;
 
 