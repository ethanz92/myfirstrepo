import "./App.css";
import { useEffect, useState } from "react";

const MousePosition = ({ render }) => {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const handleMousePositionChange = (e) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", handleMousePositionChange);

    return () => {
      window.removeEventListener("mousemove", handleMousePositionChange);
    };
  }, []);

  // return a react element and calls that function inside its render logic
  return render(mousePosition);
};

// This component should not receive any props
const PanelMouseLogger = () => {
  return (
    <MousePosition
      render={(mousePosition) => (
        <div className="BasicTracker">
          <p>Mouse position:</p>
          <div className="Row">
            <span>x: {mousePosition.x}</span>
            <span>y: {mousePosition.y}</span>
          </div>
        </div>
      )}
    />
  );
};

// This component should not receive any props
const PointMouseLogger = () => {
  return (
    <MousePosition
      render={(mousePosition) => (
        <p>
          ({mousePosition.x}, {mousePosition.y})
        </p>
      )}
    />
  );
};

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseLogger />
      <PointMouseLogger />
    </div>
  );
}

export default App;
