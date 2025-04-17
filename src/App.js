import "./App.css";
import Funct from "./components/Funct";
import List from "./components/List";
import Loading from "./components/Loading";
import UserProfile from "./components/UserProfile";

function App() {
  return (
    <>
    <List/>
    <Loading/>
      <Funct/>
      <UserProfile/>
    </>
  );
}

export default App;
