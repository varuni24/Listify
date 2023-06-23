import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import { persistor, store } from "./utils/store";
import { TaskApp } from "./components/todo/TaskApp";
import "./App.css";
import { PersistGate } from "redux-persist/integration/react";
import SmallScreen from "./components/SmallScreen";
import useWindowSize from "./utils/useWindowSize";

function App() {

  const size = useWindowSize();


  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <BrowserRouter>
          <Routes>
            {size.width < 400 && <Route path="/*" element={<SmallScreen />} />}
            <Route path="/" element={<HomePage />} />
            <Route path="/:todoId" element={<TaskApp />} />
          </Routes>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  );
}

export default App;
