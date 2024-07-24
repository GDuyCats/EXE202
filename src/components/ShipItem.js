import React, { useState } from 'react'
import { useGetAllShipCompany } from '../hooks/useGetAllShipCompany';

function ShipItem() {

    const [isActive, setIsActive] = useState(0);

    const handleCardClick = (id) => {
        setIsActive(id);
    };
    const { data } = useGetAllShipCompany();

    const currentDate = new Date();
    const startDate = new Date(currentDate.getTime() + 5 * 24 * 60 * 60 * 1000); // add 5 days
    const endDate = new Date(currentDate.getTime() + 7 * 24 * 60 * 60 * 1000); // add 7 days
  
    const startDateString = `${startDate.getDate()}/${startDate.getMonth() + 1}`;
    const endDateString = `${endDate.getDate()}/${endDate.getMonth() + 1}`;


    return (
        <div className="h-fit py-5">
            {data?.map(item => (
                <div className="p-3">
                    <div className={`flex  ${item.id == isActive ? 'border-blue_cart border-4' : ''}`}
                        onClick={() => handleCardClick(item.id)}
                    >
                        <div className="bg-blue_177f9f w-2">
                        </div>
                        <div className="bg-white w-full ">
                            <div className="flex pt-2">
                                <h1 className="text-blue_cart font-normal text-3xl ml-5">{item?.name}</h1>
                                <h3 className="text-blue_0e4759 text-3xl line-through mx-10">20.000 VND</h3>
                                <h1 className="text-red_ff0000 font-normal text-3xl">MIỄN PHÍ</h1>
                            </div>
                            <div className="flex ml-5 py-5">
                                <h3 className="text-blue_0e4759 text-xl">Nhận hàng vào</h3>
                                <h3 className="text-blue_0e4759 text-xl">: {startDateString} - {endDateString}</h3>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )
}

export default ShipItem