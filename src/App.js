import "./App.css";
import Form from "./components/Form";
import Funct from "./components/Funct";
import List from "./components/List";
import Loading from "./components/Loading";
import Onchange from "./components/Onchange";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
    <Onchange/>
      <Form />
      <List />
      <Loading />
      <Funct />
      <UserProfile />
    </>
  );
}

export default App;
