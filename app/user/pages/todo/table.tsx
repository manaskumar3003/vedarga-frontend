import React from 'react'


const Table = () => {
    const Notes = [
        {
          title: "domain",
          detail:"hello this is a sample notes",
          status:'pending',
          
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
       
<div className="max-w-[74rem] pl-4 py-10 sm:px-6  lg:py-14 mx-auto">

  <div className="flex flex-col">
    <div className="-m-1.5 overflow-x-auto">
      <div className="p-1.5 min-w-full inline-block align-middle">
        <div className="bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden">
        
          <div className="px-6 py-4 grid gap-3 md:flex md:justify-between md:items-center border-b border-gray-200 ">
            <div>
              <h2 className="text-xl font-semibold text-gray-800 ">
                Notes
              </h2>
              <p className="text-sm text-gray-600 ">
                Keep your important work tast for your company
              </p>
            </div>

            <div>
              <div className="inline-flex gap-x-2">
                <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none " href="#">
                  View all
                </a>

                <a className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
                  <svg className="flex-shrink-0 size-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
                  Add user
                </a>
              </div>
            </div>
          </div>
        
          <table className="min-w-full divide-y divide-gray-200 ">
            <thead className="bg-gray-50 ">
              <tr>
                <th scope="col" className="ps-6 py-3 text-start">
                  <label htmlFor="hs-at-with-checkboxes-main" className="flex">
                    <input type="checkbox" className="checkbox" id="hs-at-with-checkboxes-main"/>
                    <span className="sr-only">Checkbox</span>
                  </label>
                </th>

                <th scope="col" className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Note
                    </span>
                  </div>
                </th>

                

                

                <th scope="col" className="px-6 pl-10 py-3 text-start">
                  <div className="flex items-center gap-x-2">
                    <span className="text-xs font-semibold uppercase tracking-wide text-gray-800 ">
                      Status
                    </span>
                  </div>
                </th>

                
                

                <th scope="col" className="px-6 py-3 text-end"></th>
              </tr>
            </thead>

            <tbody className="divide-y divide-gray-200">
            {Notes.map((Notes, index) => (
              <tr key={index}>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 py-3">
                    <label htmlFor="hs-at-with-checkboxes-1" className="flex">
                      <input type="checkbox" className="checkbox [--chkbg:theme(colors.blue.200)] "/>
                      <span className="sr-only">Checkbox</span>
                    </label>
                  </div>
                </td>
                <td className="size-px whitespace-nowrap">
                  <div className="ps-6 lg:ps-3 xl:ps-0 pe-6 py-3">
                    <div className="flex items-center gap-x-3">
                      
                      <div className="grow">
                        <span className="block text-sm font-semibold text-gray-800 ">{Notes.title}</span>
                        <span className="block text-sm text-gray-500 ">{Notes.detail}</span>
                      </div>
                    </div>
                  </div>
                </td>
                
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-3">
                    <span className="py-1 px-1.5 inline-flex items-center gap-x-1 text-xs font-medium bg-red-100 text-red-800 rounded-full ">
                      <svg className="size-2.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-3.97-3.03a.75.75 0 0 0-1.08.022L7.477 9.417 5.384 7.323a.75.75 0 0 0-1.06 1.06L6.97 11.03a.75.75 0 0 0 1.079-.02l3.992-4.99a.75.75 0 0 0-.01-1.05z"/>
                      </svg>
                      {Notes.status}
                    </span>
                  </div>
                </td>
                
                
                <td className="size-px whitespace-nowrap">
                  <div className="px-6 py-1.5">
                    <a className="inline-flex items-center gap-x-1 text-sm text-blue-600 decoration-2 hover:underline font-medium " href="#">
                      Edit
                    </a>
                  </div>
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

    </div>
  )
}

export default Table