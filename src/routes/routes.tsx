import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import InvoicePage from "../pages/Invoice/Invoice";
import EmployeeDetailsPage from "../pages/Employee/EmployeeDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <EmployeeDetailsPage />,
      },
      {
        path: "/invoice",
        element: <InvoicePage />,
      },
    ],
  },
]);

export default router;
