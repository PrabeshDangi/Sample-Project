import "./App.css";
import HomePage from "./Components/HomePage";
import Register from "./Components/RegisterComp/Register";
import LoginPage from "./Components/Login/LoginPage";
import Producer from "./Components/RegisterComp/Producer";
import Consumer from "./Components/RegisterComp/Consumer";
import Data from "./Components/AdminUI/DataStats";
import Products from "./Components/ProducerUI/Products";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./Components/RootLayout";
import ProducerInterface from "./Components/ProducerUI/ProducerInterface";
import ConsumerInterface from "./Components/ConsumerUI/ConsumerInterface";
import ConsumerForm from "./Components/ConsumerUI/ConsumerForm";
import RecommendedList from "./Components/ConsumerUI/RecommendedList";
import AdminInterface from "./Components/AdminUI/AdminInterface";
import ReceivedOrder from "./Components/AdminUI/ReceivedOrder";
function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<RootLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/producer" element={<Producer />} />
        <Route path="/consumer" element={<Consumer />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/producerUI" element={<ProducerInterface />} />
        <Route path="/consumerUI" element={<ConsumerInterface />} />
        <Route path="/consumerForm" element={<ConsumerForm />} />
        <Route path="/recommendation" element={<RecommendedList />} />

        <Route path="/admin-panel" element={<AdminInterface />} />
        <Route path="/datastats" element={<Data />} />
        <Route path="/receivedOrder" element={<ReceivedOrder/>}/>

        <Route path="/products" element={<Products />} />

      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
