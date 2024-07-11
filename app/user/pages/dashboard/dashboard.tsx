import React from 'react'
import Topcard from './topcard'
import Transaction from './transaction'
import ChartApp from './charts/area'



const Dashboard = () => {
  return (
    <div className="pl-24 h-full dark w-full bg-gray-100">
      
      <Topcard />

      {/* transaction and charts */}
      <div className="grid grid-cols-2 gap-2">
        <div className="ml-8 pr-4"><Transaction /></div>
        {/* <div className="pr-4"><ChartApp /></div> */}
      </div>
      

    </div>
  )
}

export default Dashboard


