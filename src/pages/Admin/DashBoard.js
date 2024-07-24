import React, { useState } from 'react'
import LogoImg from '../../assets/Without slogan.png'
import { IoMenu } from "react-icons/io5";
import LineChartMonth from './LineChartMonth';
import LineChartWeek from './LineChartWeek';
function DashBoard() {
    const [clicked, setClicked] = useState(false)
    const toggleClicked = () => {
        setClicked(prevClicked => !prevClicked)
    }
    return (
        <>
            <div className='flex relative bg-blue_a2dde8 mr-0 ml-auto w-5/6'>
                <div className='p-5 mt-20 mr-10 w-full'>
                    <p className='font-semibold text-2xl my-5'>SỐ LIỆU CHÍNH</p>
                    <div className='flex'>
                        <div className='bg-blue_177f9f text-white p-2 w-[30%] '>
                            <p className='text-3xl font-bold'>8.91B</p>
                            <p className='text-blue_073d4d font-semibold'>TỔNG DOANH THU</p>
                        </div>
                        <div className='bg-blue_177f9f text-white p-2 w-[30%] ml-5'>
                            <p className='text-3xl font-bold'>123.4K</p>
                            <p className='text-blue_073d4d font-semibold'>TỔNG ĐƠN HÀNG</p>
                        </div>
                        <div className='bg-blue_177f9f text-white p-2 w-[30%] ml-5'>
                            <p className='text-3xl font-bold'>246.7K</p>
                            <p className='text-blue_073d4d font-semibold'>TỔNG SẢN PHẨM ĐÃ BÁN</p>
                        </div>
                    </div>
                    <p className='font-semibold text-2xl my-5'>DOANH THU THÁNG</p>
                    <LineChartMonth />
                    <p className='font-semibold text-2xl my-5'>DOANH THU TUẦN</p>

                    <LineChartWeek />

                    <p className='font-semibold text-2xl my-5'>TOP 5 SẢN PHẨM BÁN CHẠY</p>
                    <div className='flex'>
                        <p className='text-blue_177f9f font-bold text-xl'>Tính Theo: </p>
                        <select className='ml-2'>
                            <option value="">Tháng</option>
                            <option value="">Năm</option>
                            <option value="">Ngày</option>
                        </select>
                    </div>
                    <div>
                        <table class="min-w-full divide-y divide-gray-200 mt-5">
                            <thead class="bg-gray-50">
                                <tr>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">STT</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Tên sản phẩm</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Danh mục</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Nhà Phân Phối</th>
                                    <th class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Giá sản phẩm</th>
                                </tr>
                            </thead>
                            <tbody class="bg-white divide-y divide-gray-200">
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">1</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Sản phẩm A</td>
                                    <td class="px-6 py-4 whitespace-nowrap">TPBS</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Hãng A</td>
                                    <td class="px-6 py-4 whitespace-nowrap">800.000VND</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">2</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Sản phẩm B</td>
                                    <td class="px-6 py-4 whitespace-nowrap">TPTY</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Hãng B</td>
                                    <td class="px-6 py-4 whitespace-nowrap">122.000VND</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">3</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Sản phẩm C</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Trang phục</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Hãng C</td>
                                    <td class="px-6 py-4 whitespace-nowrap">95.000VND</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">4</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Sản phẩm D</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Y Tế</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Hãng D</td>
                                    <td class="px-6 py-4 whitespace-nowrap">560.000VND</td>
                                </tr>
                                <tr>
                                    <td class="px-6 py-4 whitespace-nowrap">5</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Sản phẩm E</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Giải trí</td>
                                    <td class="px-6 py-4 whitespace-nowrap">Hãng E</td>
                                    <td class="px-6 py-4 whitespace-nowrap">125.000VND</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>

            </div>
        </>
    )
}


export default DashBoard
