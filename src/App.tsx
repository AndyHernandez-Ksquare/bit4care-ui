import { Outlet } from "react-router-dom";
import "./App.css";
import { AdminLayout } from "./modules/admin/AdminLayout";

function App() {
  return (
    <AdminLayout>
      <Outlet />
    </AdminLayout>
  );
}

export default App;
