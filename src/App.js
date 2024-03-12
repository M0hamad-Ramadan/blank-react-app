import Header from "./components/Header";
import Posts from "./components/Posts";

let check = true;

function App() {
  return (
    <div className="App">
      <Header />
      <AllPosts />
    </div>
  );
}

// condition rendering

function AllPosts() {
  if (check) {
    return <Posts title={"posts"} />;
  }
  return <></>;
}

export default App;
