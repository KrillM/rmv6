import { Outlet } from "react-router-dom";
import Header from "./components/Header.tsx"

function App() {
  return (
    <div>
      <Header />

      {/* 자녀와 연결하기 위함 + 데이터도 전송됨 */}
      <Outlet />
    </div>
  );
}

export default App;
