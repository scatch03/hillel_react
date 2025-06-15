import { Outlet } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";


export default function Layout() {
  return (
    <div className="flex flex-col p-2.5 items-center justify-between min-h-screen bg-gray-100">
      <div className="container min-h-screen flex flex-col items-center justify-between">
        <Header />
        <main className="min-w-full">
          <Outlet />
        </main>
        <Footer />
      </div>
    </div>
  );
}
