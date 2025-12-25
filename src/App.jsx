import Folder from "./Folder";

export default function App() {
  return (
    <div>
      <h1 style = {{ textAlign: "center", marginTop: "20px" }}>
        My Portfolio
      </h1>
      <Folder /> {/* My folder and tabs component */}
    </div>
  );
}
