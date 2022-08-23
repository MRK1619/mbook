import "./App.css";
import Header from "./Header";
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Login from "./Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{user},dispatch]=useStateValue();


  return (
    <div className="app">
      {!user ? (
        <Login/>
      ) : (
        <>
          {/* Header */}
          <Header />
          {/* App Body */}

          <div className="body">
            {/* Slidebar */}
            <Sidebar />
            {/* Feed */}
            <Feed />
            {/* Widgate */}
          </div>
        </>
      )}
    </div>
  );
}

export default App;
