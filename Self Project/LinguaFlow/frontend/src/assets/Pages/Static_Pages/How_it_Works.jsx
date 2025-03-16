import React, { useCallback, useMemo, useState } from "react";
import ReactFlow, { MiniMap, Controls, Background, addEdge } from "reactflow";
import "reactflow/dist/style.css";

const initialNodes = [
  // Basic Level
  { id: "1", type: "input", data: { label: <strong>🟢 Basic Level: Start Learning</strong> }, position: { x: 500, y: 50 } },
  { id: "2", data: { label: <div><strong>🟢 Basic Level:</strong><br /> Learn Basics: Alphabet & Common Words</div> }, position: { x: 300, y: 150 } },
  { id: "3", data: { label: <div><strong>🟢 Basic Level:</strong><br /> Practice Speaking & Listening</div> }, position: { x: 700, y: 150 } },

  // Intermediate Level
  { id: "4", data: { label: <div><strong>🟡 Intermediate Level:</strong><br /> Improve Vocabulary & Grammar</div> }, position: { x: 300, y: 250 } },
  { id: "5", data: { label: <div><strong>🟡 Intermediate Level:</strong><br /> Read Books, Articles & Blogs</div> }, position: { x: 500, y: 250 } },
  { id: "6", data: { label: <div><strong>🟡 Intermediate Level:</strong><br /> Engage in Conversations & Language Exchange</div> }, position: { x: 700, y: 250 } },

  // Advanced Level
  { id: "7", data: { label: <div><strong>🔵 Advanced Level:</strong><br /> Write Daily (Essays, Blogs, Journals)</div> }, position: { x: 500, y: 350 } },
  { id: "8", data: { label: <div><strong>🔵 Advanced Level:</strong><br /> Watch Movies & Listen to Podcasts</div> }, position: { x: 700, y: 350 } },

  // Fluent/Expert Level
  { id: "9", data: { label: <div><strong>🔴 Fluent/Expert Level:</strong><br /> Think in the Language</div> }, position: { x: 500, y: 450 } },
  { id: "10", type: "output", data: { label: <strong>🔴 Fluent/Expert Level: Mastery Achieved 🎉</strong> }, position: { x: 500, y: 550 } },
];

const initialEdges = [
  // Basic Level Connections
  { id: "e1-2", source: "1", target: "2", animated: true },
  { id: "e1-3", source: "1", target: "3", animated: true },

  // Intermediate Level Connections
  { id: "e2-4", source: "2", target: "4", animated: true },
  { id: "e3-6", source: "3", target: "6", animated: true },
  { id: "e4-5", source: "4", target: "5", animated: true },
  { id: "e5-7", source: "5", target: "7", animated: true },
  { id: "e6-7", source: "6", target: "7", animated: true },

  // Advanced Level Connections
  { id: "e7-9", source: "7", target: "9", animated: true },
  { id: "e8-9", source: "8", target: "9", animated: true },

  // Fluent/Expert Level
  { id: "e9-10", source: "9", target: "10", animated: true },
];

const LanguageLearningFlowchart = () => {
  const [nodes, setNodes] = useState(initialNodes);
  const [edges, setEdges] = useState(initialEdges);

  const onConnect = useCallback((connection) => {
    setEdges((eds) => addEdge(connection, eds));
  }, []);

  const nodeTypes = useMemo(() => ({}), []);

  return (
    <div style={{ width: "100vw", height: "100vh", overflow: "hidden" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
        fitView
      >
        <MiniMap />
        <Controls />
        <Background />
      </ReactFlow>
    </div>
  );
};

export default LanguageLearningFlowchart;
