import "./App.css";
import Header from "./components/Header";
import ImageGrid from "./components/ImageGrid";
import { Provider } from "react-redux";
import { store } from "./utils/store";

function App() {
  return (
    <main className="container">
      <Provider store={store}>
        <Header />
        <ImageGrid />
      </Provider>
    </main>
  );
}

export default App;
