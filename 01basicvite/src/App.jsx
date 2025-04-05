import Youtube from "./Youtube";

function checkUser(username) {
  if (username === "Hariom Singh") {
      return "yes";
  }
  return "no";
}

function App() {
  let username="Hariom Singh"
  return (
    <>
      <h1>Vite React App! {2+2} </h1>
      <h1>Hello {username}! </h1>
      <h1>Hello {checkUser(username)}! </h1>
      <Youtube />
    </>
  );
}

export default App;
