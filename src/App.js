import store from "./app/store";
import { Provider } from "react-redux";
import List from "./Components/List";
import Form from "./Components/Form";
import "./App.css";
import { useState } from "react";
function App() {
  const [isRefetch, setIsRefetch] = useState(false);
  return (
    <Provider store={store}>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          width: "70%",
          margin: "auto",
        }}
      >
        <List isRefetch={isRefetch} setIsRefetch={setIsRefetch} />
        <Form setIsRefetch={setIsRefetch} />
      </div>
    </Provider>
  );
}

export default App;
