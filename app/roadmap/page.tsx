'use client'

import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
  Edge,
  Connection,
  BackgroundVariant,
} from 'reactflow';
 
import 'reactflow/dist/style.css';
import TextUpdaterNode from './main';
import Heading from './heading';
import HeadingLeft from './headingLeft';
 
const initialNodes = [
  { id: '1', type:'main', position: { x: 300, y: 200 }, data: { label: 'StartUp' } },
  { id: '2', type:'headingleft', position: { x: 700, y: 200 }, data: { label: 'Idea Generation' }, },
  { id: '3', type:'headingleft', position: { x: 1100, y: 200 }, data: { label: 'Market Research' }, },
   { id: '4', type:'headingleft', position: { x: 1500, y: 200 }, data: { label: 'Business Plan' }, },
   { id: '5', type:'headingleft', position: { x: 1400, y: 350 }, data: { label: 'Funding' }, },
  { id: '6', type:'headingleft', position: { x: 950, y: 350 }, data: { label: 'Legal Structure' }, },

  //heading left side
       { id: '7', type:'headingleft', position: { x: 600, y: 350 }, data: { label: 'Product Development' }, },
      { id: '8', type:'headingleft', position: { x: 200, y: 350 }, data: { label: 'Branding' }, },
      { id: '9', type:'headingleft', position: { x: 400, y: 500 }, data: { label: 'Marketing Strategy' }, },
       { id: '10', type:'headingleft', position: { x: 750, y: 500 }, data: { label: 'Launch' }, },
       { id: '11', type:'headingleft', position: { x: 1200, y: 500 }, data: { label: 'Continuous Improvement and Innovation' }, },
  

];
const initialEdges = [
  { id: 'e1-2', source: '1',sourceHandle: 'b', target: '2',targetHandle:'a' },
  { id: 'e1-3', source: '2',sourceHandle: 'b', target: '3',targetHandle:'a' },
  { id: 'e1-4', source: '3',sourceHandle: 'b', target: '4',targetHandle:'a' },
  { id: 'e1-5', source: '4',sourceHandle: 'b', target: '5',targetHandle:'b',type:"step" },
  { id: 'e1-6', source: '5',sourceHandle: 'a', target: '6',targetHandle:'b' },
  //left side main to heading


  { id: 'e1-6', source: '6',sourceHandle: 'a', target: '7',targetHandle:'b' },
  { id: 'e1-8', source: '7', sourceHandle: 'a',target: '8',targetHandle:'b' },
  { id: 'e1-9', source: '8', sourceHandle: 'a',target: '9',targetHandle:'a',type:"step" },
  { id: 'e1-10', source: '9', sourceHandle: 'b',target: '10',targetHandle:'a' },
  { id: 'e1-11', source: '10', sourceHandle: 'b',target: '11',targetHandle:'a' },
  




];

const nodeTypes = { main: TextUpdaterNode,heading:Heading,headingleft:HeadingLeft };


 
export default function Roadmap() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  
 
  const onConnect = useCallback(
    (params:Connection|Edge) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

 
  return (
    <div style={{ width: '100vw', height: '100vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        nodeTypes={nodeTypes}
      >
        <Controls />
        <MiniMap />
        
        <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}