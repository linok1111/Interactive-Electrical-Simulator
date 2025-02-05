import { useState } from "react";
import { Stage, Layer, Rect, Line, Circle } from "react-konva";

const ElectricalSimulator = () => {
  const [components, setComponents] = useState([
    { id: 1, type: "switch", x: 50, y: 50, state: false },
    { id: 2, type: "breaker", x: 200, y: 50, state: false },
  ]);

  const [wires, setWires] = useState([]);
  const [draggingComponent, setDraggingComponent] = useState(null);

  const handleDragMove = (e) => {
    const id = e.target.id();
    setComponents((prev) =>
      prev.map((comp) =>
        comp.id === Number(id) ? { ...comp, x: e.target.x(), y: e.target.y() } : comp
      )
    );
  };

  const toggleComponent = (id) => {
    setComponents((prev) =>
      prev.map((comp) =>
        comp.id === id ? { ...comp, state: !comp.state } : comp
      )
    );
  };

  const addWire = (x1, y1, x2, y2) => {
    setWires([...wires, { x1, y1, x2, y2 }]);
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-2xl font-bold mb-4">Electrical Workbench</h1>
      <Stage width={800} height={600} className="border">
        <Layer>
          {components.map((comp) => (
            <Rect
              key={comp.id}
              id={comp.id.toString()}
              x={comp.x}
              y={comp.y}
              width={50}
              height={50}
              fill={comp.state ? "green" : "gray"}
              draggable
              onDragMove={handleDragMove}
              onClick={() => toggleComponent(comp.id)}
            />
          ))}
          {wires.map((wire, index) => (
            <Line
              key={index}
              points={[wire.x1, wire.y1, wire.x2, wire.y2]}
              stroke="black"
              strokeWidth={2}
            />
          ))}
        </Layer>
      </Stage>
    </div>
  );
};

export default ElectricalSimulator;
