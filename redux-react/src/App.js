import Counter from './components/Counter';
import Auth from './components/Auth';
import { useSelector } from "react-redux"
import Header from './components/Header';
import UserProfile from './components/UserProfile';


function App() {

  const isauth = useSelector(state => state.auth.isauth)
  return (
    <>
      <Header></Header>
      {!isauth && <Auth></Auth>}
      {isauth && <UserProfile></UserProfile>}
      <Counter />
    </>
  );
}

export default App;
