import "./App.css";
import Header from "./components/header";
import ImageGrid from "./components/ImageGrid";
import { Provider } from "react-redux";
import { store } from "./utils/store";


function App() {
  return (
    <Provider store={store}>
      <main className="container">
        <Header />
        <ImageGrid/>
      </main>
    </Provider>
  );
}

export default App;
