import "./App.css";
import { useState, useEffect } from "react";

// withMousePosition HOC
const withMousePosition = (WrappedComponent) => {
  return (props) => {
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

      // It's important to remove any subscription when your component unmounts. The way to do that is by returning a function from use effect and then performing any cleanup needed.
      return () => {
        window.removeEventListener("mousemove", handleMousePositionChange);
      };
    }, []);

    return <WrappedComponent {...props} mousePosition={mousePosition} />;
  };
};

// PanelMouseLogger and PointMouseLogger both use mousePosition prop to display something
// You could implement the mouse tracking logic in each component but recall that it would incur code repetition and duplication of the same logic in two different places. Therefore we use HOC.
const PanelMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <div className="BasicTracker">
      <p>Mouse position:</p>
      <div className="Row">
        <span>x: {mousePosition.x}</span>
        <span>y: {mousePosition.y}</span>
      </div>
    </div>
  );
};

const PointMouseLogger = ({ mousePosition }) => {
  if (!mousePosition) {
    return null;
  }
  return (
    <p>
      ({mousePosition.x}, {mousePosition.y})
    </p>
  );
};

// To enhance the two components previously defined panel mouse logger and point mouse logger, I will use the HOC to create two new component versions that will be aware of the mouse position data and I'll call them panel mouse tracker and point mouse tracker respectively.
const PanelMouseTracker = withMousePosition(PanelMouseLogger);
const PointMouseTracker = withMousePosition(PointMouseLogger);

function App() {
  return (
    <div className="App">
      <header className="Header">Little Lemon Restaurant 🍕</header>
      <PanelMouseTracker />
      <PointMouseTracker />
    </div>
  );
}

export default App;
