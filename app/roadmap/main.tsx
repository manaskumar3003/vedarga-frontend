
import { Handle, Position } from 'reactflow';
 

 
function TextUpdaterNode({ data }:{data:any}) {
 
  return (
    <>
      
      <div className="!bg-gray-100 h-36 w-36 shadow-md rounded-md flex items-center justify-center  p-4 px-20 border border-gray-300">
        
        <label>{data.label}</label>
      </div>
      <Handle type="target"  position={Position.Left} id="a" />
      <Handle id="b" type="source"  position={Position.Right} />
      <Handle id="a" type="source"  position={Position.Left} />
      
    </>
  );
}

export default TextUpdaterNode;