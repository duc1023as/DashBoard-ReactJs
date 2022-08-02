import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import "./app.css";
import Home from "./pages/home/Home";
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import UserList from "./pages/userlist/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";

function App() {
  return (
    <BrowserRouter>      
      <Topbar/>
      <div className="container">
        <Sidebar/>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route path="/users" element={<UserList></UserList>}></Route>
          <Route path="/users/:userId" element={<User></User>}></Route>
          <Route path="/newUser" element={<NewUser></NewUser>}></Route>
          <Route path="/products" element={<ProductList></ProductList>}></Route>
          <Route path="/product/:productId" element={<Product></Product>}></Route>
          <Route path="/newProduct" element={<NewProduct></NewProduct>}></Route>
        </Routes> 
      </div>
    </BrowserRouter>
  );
}

export default App;
