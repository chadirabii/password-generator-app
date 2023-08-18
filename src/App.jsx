import Button from "./components/button";

function App() {
  return (
    <>
      <Button
        onClick={() => {
          console.log("Button clicked");
        }}
      />
    </>
  );
}

export default App;
