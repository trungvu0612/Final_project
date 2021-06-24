import { Provider } from "react-redux";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import store from "./redux";
import { MainLayout } from "./layout/MainLayout";
import Home from "./page/home";
import About from "./page/about";
import Error404 from "./page/404";
import Auth from "./page/auth";
import Blog from "./page/blog";
import Checkout from "./page/checkout";
import ComingSoon from "./page/coming-soon";
import ContactUs from "./page/contact-us";
import Faq from "./page/faq";
import OrderCompleted from "./page/order-completed";
import Product from "./page/product";
import ShippingAndReturns from "./page/shipping-and-returns";
import Shop from "./page/shop";
import ShoppingCart from "./page/shopping-cart";
import StoreLocator from "./page/store-locator";
import Account from "./page/account";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/account" component={Account} />
            <Route path="/about" component={About} />
            <Route path="/auth" component={Auth} />
            <Route path="/blog" component={Blog} />
            <Route path="/checkout" component={Checkout} />
            <Route path="/coming-soon" component={ComingSoon} />
            <Route path="/contact-us" component={ContactUs} />
            <Route path="/faq" component={Faq} />
            <Route path="/order-completed" component={OrderCompleted} />
            <Route path="/product" component={Product} />
            <Route
              path="/shipping-and-returns"
              component={ShippingAndReturns}
            />
            <Route path="/shop" component={Shop} />
            <Route path="/shopping-cart" component={ShoppingCart} />
            <Route path="/store-locator" component={StoreLocator} />
            <Route path="/error404" component={Error404} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
