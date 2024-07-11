
import { Handle, Position } from 'reactflow';
 

 
function Heading({ data }:{data:any}) {
  
 
  return (
    <>
      <Handle type="target" position={Position.Right} />
      <div className="!bg-gray-100 shadow-md rounded-md p-4 px-30 border border-gray-300">
        
        <label>{data.label}</label>
      </div>
      <Handle type="source" position={Position.Left} id="a" />
      
    </>
  );
}

export default Heading;