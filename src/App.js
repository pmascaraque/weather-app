const api = {
  key: "60eafcec4afef1397e02df3bcc16f20c",
  base: "https://api.openweathermap.org/data/2.5",
};

function App() {
  return (
    <div className="app">
      <main>
        <div id="search-box">
          <input
            type="text"
            id="search-bar"
            placeholder="Search a city"
          ></input>
        </div>
      </main>
    </div>
  );
}

export default App;
