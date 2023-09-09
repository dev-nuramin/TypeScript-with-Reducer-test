import Admin from "./components/Admin";
import ButtonComponent from "./components/ButtonComponent";
import ClassCounter from "./components/ClassCounter";
import Counter from "./components/Counter";
import Info from "./components/Info";

function App() {
  const devs = {
    name: "Nur Amin",
    age: 30,
    skill: true
  }
 
  const users = [
    {
      name: "Nur Amin",
      age: 20,
      skill: true
    },
    {
      name: "Sabbir Rahman",
      age: 25,
      skill: false
    },
    {
      name: "Mamun vai",
      age: 26,
      skill: true
    },
    {
      name: "Achem islam",
      age: 35,
      skill: false
    },
  ]
  const foods = ['alo', 'potol', 'lao', 'kumra',];
  const handleButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    id: number
  ) => {
    console.log(event, id)
  };
  return (
    <>
      <Info
        title="This is JavaScript/TypeScript"
        amount={2000}
        desc="Hello this is TypeScript"
        isAdmin={true}
        devs={devs}
        foods={foods}
        users={users}
      />
      <ButtonComponent handleButtonClick={handleButtonClick}>
         add me
      </ButtonComponent>
      <Counter />

      <Admin msg="Hi Admin" isUser={true}/>
      <ClassCounter />
    </>
  );
}

export default App;
