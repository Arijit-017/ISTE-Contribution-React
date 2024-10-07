import "./Main.css";
import Card from "./Card";

function Main({ userData }) {
  if (!userData || userData.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className="Main">
      {userData.map((user, index) => (
        <Card key={index} data={user}/> 
      ))}
    </div>
  );
}

export default Main;
