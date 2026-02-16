import {
  UserCardOne,
  UserCardTwo,
} from "./components/01_RequiredOptionalProps";
import { Badge } from "./components/03_asConstVariables";

function App() {
  return (
    <>
      <UserCardOne id={123} name="ReThIk" email="rethik@gmail.com">
        <button>Click Me</button>
      </UserCardOne>

      <UserCardTwo id={123} name="ReThIk">
        <button>Click Me</button>
      </UserCardTwo>

      <Badge label="rethik" variant="primary" />
    </>
  );
}

export default App;
