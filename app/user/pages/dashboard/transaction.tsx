import React from 'react'




const Transaction = () => {
    const spending = [
        {
          title: "domain",
          cost: "250",
        },
        {
          title: "hosting",
          cost: "125",
        },
        {
          title: "advertising",
          cost: "125",
        },
        {
            title: "sales",
            cost: "125",
          },
          {
            title: "hiring",
            cost: "125",
          },
          {
            title: "intern",
            cost: "125",
          },
          
      ]
      
  return (
    <div>
      <div className="bg-white">
  <div className=" overflow-x-auto">
    <div className=" min-w-full inline-block align-middle">
      <div className="border rounded-lg shadow overflow-hidden  ">
        <table className="min-w-full divide-y divide-gray-200 ">
          <thead>
            <tr className="divide-x divide-gray-200 ">
              <th scope="col" className="px-6 pr-36 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Spending title</th>
              
              <th scope="col" className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase ">Cost</th>
              <th scope="col" className="px-6 py-3 text-end text-xs font-medium text-gray-500 uppercase ">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 ">
          {spending.map((spending, index) => (
            <tr key={index}>
              <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 ">{spending.title}</td>
              
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 ">${spending.cost}</td>
              <td className="px-6 py-4 whitespace-nowrap text-end text-sm font-medium">
                <button type="button" className="inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none ">edit</button>
              </td>
            </tr>
            ))}

            
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>
    </div>
  )
}

export default Transaction