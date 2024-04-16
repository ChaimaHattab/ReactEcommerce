import "@fortawesome/fontawesome-free/css/all.css";
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import Listearticle from "./components/articles/Listearticle";
import Viewarticle from "./components/articles/Viewarticle";
import Listcategorie from "./components/categories/Listcategorie";
import ListScategorie from "./components/scategories/ListScategorie";
import Viewcategorie from "./components/categories/Viewcategorie";
import Viewscategorie from "./components/scategories/viewscategorie";
import EditScategorie from "./components/scategories/EditScategorie";
import Editarticle from "./components/articles/Editarticle";
import Editcategorie from "./components/categories/Editcategorie";
import Insertarticle from "./components/articles/Insertarticle";
import Insertcategorie from "./components/categories/Insertcategorie";
import InsertScategorie from "./components/scategories/InsertScategorie";
import Menu from "./components/Menu";
import Listarticlecard from "./components/articles/Listarticlecard";


function App() {
  

  return (
    <>
      
      <Router>
      <Menu/>
        <Routes>
          <Route path="/listart" element={<Listearticle/>}/>
          <Route path="/listcat" element={<Listcategorie/>}/>
          <Route path="/listScat" element={<ListScategorie/>}/>
          <Route path="/Editcat/:id" element={<Editcategorie/>}/>
          <Route path="/Editart/:id" element={<Editarticle/>}/>
          <Route path="/EditScat/:id" element={<EditScategorie/>}/>
          <Route path="/ViewArt/:id" element={<Viewarticle/>}/>
          <Route path="/ViewCat/:id" element={<Viewcategorie/>}/>
          <Route path="/ViewScat/:id" element={<Viewscategorie/>}/>
          <Route path="/InsertArt" element={<Insertarticle/>}/>
          <Route path="/InsertCat" element={<Insertcategorie/>}/>
          <Route path="/InsertScat" element={<InsertScategorie/>}/>
          <Route path="/Listarticlecard" element={<Listarticlecard/>}/>
          

          
          
      
        </Routes>
      </Router>
      
    </>
  )
}

export default App
