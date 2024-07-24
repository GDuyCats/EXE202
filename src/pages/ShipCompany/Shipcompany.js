import React, { useState } from 'react';
import CreateShipCompany from './CreateShipCompany';
import GetAllShipCompany from './GetAllShipCompany';
export default function Shipcompany() {
  const [refresh, setRefresh] = useState(false);

  const handleRefresh = () => {
    setRefresh(true);
    console.log(refresh)
  };


  return (
    <div className='w-5/6 mr-0 ml-auto py-36'>
      <CreateShipCompany onCreateSuccess={handleRefresh} />
      <GetAllShipCompany refresh={refresh} setRefresh={setRefresh} />
    </div>
  )
}
