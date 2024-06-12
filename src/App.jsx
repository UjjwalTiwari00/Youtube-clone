import Navbar from './components/Navbar'
import Body from "./components/Body_component/Body"
import { createBrowserRouter} from "react-router-dom"
import Main_side_bar from "./components/Body_component/Main_side_bar"
import WatchPage from "./components/Body_component/WatchPage"
import SuggestionList from "./components/Body_component/SuggestionList"

 export const appRouter=createBrowserRouter([{
  path:"/",
  element:<App/>,
      children:[
        {
          path:"/",
          element:<div><Main_side_bar/></div>
        },
        {
          path:"watch",
          element:<WatchPage/>
        },
        {
          path:"results",
          element:<SuggestionList/>
        },
      ]
    }
  ]
)
function App() {

  return (
   <div className="">
    <Navbar/>
    <Body/>
   </div>
  )
}

export default App
