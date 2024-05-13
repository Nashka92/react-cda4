import "./App.css";
import Title from "./components/Title";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const personsTab = [
    {
      id: 1,
      firstName: "Albert",
      lastName: "DUPONT",
    },
    {
      id: 2,
      firstName: "Maria",
      lastName: "DUPONT",
    },
    {
      id: 3,
      firstName: "Chloé",
      lastName: "DUPONT",
    },
    {
      id: 4,
      firstName: "Sylvia",
      lastName: "MARTEZ",
    },
  ];
  return (
    <div className="App">
      <Title />
      <table className="table table-striped">
        <thead className="thead-dark">
          <tr>
            <th>#</th>
            <th>FirstName</th>
            <th>LastName</th>
          </tr>
        </thead>
        <tbody>
          {personsTab.map((person) => (
            <tr key={person.id}>
              <td>{person.id}</td>
              <td>{person.firstName}</td>
              <td>{person.lastName}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
