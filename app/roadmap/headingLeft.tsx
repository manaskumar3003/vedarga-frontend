
import { Handle, Position } from 'reactflow';
 

 
function HeadingLeft({ data }:{data:any}) {
  
 
  return (
    <>
      <Handle type="target" position={Position.Left} id="a" />
      <Handle type="target" position={Position.Right} id="b" />
      <div className="!bg-red-200 shadow-md rounded-md p-4 px-30 border border-gray-300">
        
        <label>{data.label}</label>
      </div>
      <Handle type="source" position={Position.Left} id="a" />
      <Handle type="source" position={Position.Right} id="b" />
      
    </>
  );
}

export default HeadingLeft;