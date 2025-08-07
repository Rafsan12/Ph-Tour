import { Outlet } from "react-router";
import CommonLayout from "./components/layout/commonlayout";

function App() {
  return (
    <CommonLayout>
      <Outlet />
    </CommonLayout>
  );
}

export default App;
