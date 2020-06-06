import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Home from "./core/Home"
import Signup from './user/Signup';
import Signin from './user/Signin';
import AdminRoutes from "./auth/helper/AdminRoutes";
import PrivateRoutes from "./auth/helper/PrivateRoutes";
import UserDashBoard from "./user/UserDashBoard";
import AdminDashboard from "./user/AdminDashBoard";
import AddCategory from "./admin/AddCategory"
import ManageCategories from './admin/ManageCategories';
import AddProduct from './admin/AddProduct';
import ManageProducts from './admin/ManageProducts';
import UpdateProduct from './admin/UpdateProduct';
import ManageOrders from './admin/ManageOrders';
import Cart from './core/Cart';


const Routes = () =>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/signup" exact component={Signup}/>
                <Route path="/signin" exact component={Signin}/>
                <Route path="/cart" exact component={Cart}/>
                <PrivateRoutes path="/user/dashboard" exact component={UserDashBoard}/>
                <AdminRoutes path="/admin/dashboard" exact component={AdminDashboard} />
                <AdminRoutes path="/admin/create/cotegory" exact component={AddCategory} />
                <AdminRoutes path="/admin/cotegories" exact component={ManageCategories} />
                <AdminRoutes path="/admin/create/product" exact component={AddProduct} />
                <AdminRoutes path="/admin/products" exact component={ManageProducts} />
                <AdminRoutes path="/admin/orders" exact component={ManageOrders} />
                <AdminRoutes path="/admin/product/update/:productId" exact component={UpdateProduct}/>
                
            </Switch> 
        </BrowserRouter>
    )
}

export default Routes;