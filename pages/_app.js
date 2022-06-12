import Layout from "../components/layout/Layout";
import "../styles/globals.css";
import "../styles/app.css";
import "./styles/cartcontrol.scss";
import "react-toastify/dist/ReactToastify.css";
import { PersistGate } from "redux-persist/lib/integration/react";
import { Provider } from "react-redux";
import { store, persistor } from "../redux/store";

function MyApp({ Component, pageProps }) {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </PersistGate>
    </Provider>
  );
}

export default MyApp;
