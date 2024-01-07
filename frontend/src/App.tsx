import {
  BrowserRouter as Router,
  Navigate,
  Route,
  Routes,
  useLocation,
} from "react-router-dom";
import "./App.css";
import Layout from "./layouts/Layout";
import Register from "./pages/Register";
import SignIn from "./pages/SignIn";
import { useAppContext } from "./contexts/AppContext";
import AddHotel from "./pages/AddHotel";
import MyHotels from "./pages/MyHotels";
import EditHotel from "./pages/EditHotel";
import Search from "./pages/Search";
import Detail from "./pages/Detail";
import { useEffect } from "react";
import Booking from "./pages/Booking";
import MyBookings from "./pages/MyBookings";
import Home from "./pages/Home";
import HeaderLayout from "./layouts/HeaderLayout";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

function App() {
  const { isLoggedIn } = useAppContext();

  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/search"
          element={
            <Layout>
              <Search />
            </Layout>
          }
        />{" "}
        <Route
          path="/detail/:hotelId"
          element={
            <HeaderLayout>
              <Detail />
            </HeaderLayout>
          }
        />
        <Route
          path="/register"
          element={
            <HeaderLayout>
              <Register />
            </HeaderLayout>
          }
        />{" "}
        <Route
          path="/sign-in"
          element={
            <HeaderLayout>
              <SignIn />
            </HeaderLayout>
          }
        />
        {isLoggedIn && (
          <>
            <Route
              path="/hotel/:hotelId/booking"
              element={
                <HeaderLayout>
                  <Booking />
                </HeaderLayout>
              }
            />
            <Route
              path="/add-hotel"
              element={
                <HeaderLayout>
                  <AddHotel />
                </HeaderLayout>
              }
            />
            <Route
              path="/edit-hotel/:hotelId"
              element={
                <HeaderLayout>
                  <EditHotel />
                </HeaderLayout>
              }
            />
            <Route
              path="/my-hotels"
              element={
                <HeaderLayout>
                  <MyHotels />
                </HeaderLayout>
              }
            />
            <Route
              path="/my-bookings"
              element={
                <HeaderLayout>
                  <MyBookings />
                </HeaderLayout>
              }
            />
          </>
        )}
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </Router>
  );
}

export default App;
