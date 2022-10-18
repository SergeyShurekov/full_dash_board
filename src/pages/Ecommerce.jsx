import React from 'react'
import { BsCurrencyDollar } from 'react-icons/bs';
import { GoPrimitiveDot } from 'react-icons/go';

import { Button, SparkLine, Stacked } from '../components';
import { earningData, SparklineAreaData, ecomPieChartData } from '../data/dummy';
import { useStateContext } from '../contexts/ContextProvider';

const Ecommerce = () => {
  return (
    <div className='mt-24'>
      <div className='flex flex-wrap lg:flex-nowrap justify-center'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg h-44 rounded-xl w-full lg:w-80 p-8 pt-9 m-3 bg-hero-pattern bg-no-repeat bg-cover bg-center'>
          <div className='flex justify-between items-center'>
            <div>
              <p className='font-bold text-gray-400'>Доходы</p>
              <p className='text-2-xl'>43 455,13 руб.</p>
            </div>
          </div>
          <div>
            <Button color='white' bgColor='blue' text='Загрузка' borderRadius='10px' size='md' />
          </div>
        </div>

        <div className='flex m-3 flex-wrap justify-center gap-1 items-center'>
          {earningData.map((item) => (
            <div key={item.title} className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg md:w-56 p-4 pt-9 rounded-2xl'>
              <button type='button' style={{ color: item.iconColor, backgroundColor: item.iconBg }} className='text-2xl opacity-90 rounded-full p-4 hover:drop-shadow-xl'>
                {item.icon}
              </button>
              <p className='mt-3'>
                <span className='text-lg font-semibold'>
                  {item.amount}
                </span>
                <span className={`text-sl text-${item.pcColor} ml-2`}>
                  {item.percentage}
                </span>
              </p>
              <p className='text-sm mt-1 text-gray-400'>
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className='flex flex-wrap justify-center gap-10'>
        <div className='bg-white dark:text-gray-200 dark:bg-secondary-dark-bg m-3 p-4 rounded-2xl md:w-780'>
          <div className='flex justify-between'>
            <p className='font-semibold text-xl'>Обновление доходов</p>
            <div className='flex items-center gap-4'>
              <p className='flex items-center gap-4 text-gray-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Расходы</span>
              </p>
              <p className='flex items-center gap-4 text-green-600 hover:drop-shadow-xl'>
                <span>
                  <GoPrimitiveDot />
                </span>
                <span>Бюджет</span>
              </p>
            </div>
          </div>
          <div className='gap-10 mt-10 flex flex-wrap justify-center'>
            <div className='border-r-1 border-color m-4 pr-10'>
              <div>
                <p>
                  <span className='text-3xl font-semibold'>93 468 руб.</span>
                  <span className='p-1.5 hover:drop-shadow-xl cursor-pointer rounded-full text-white bg-green-400 ml-3 text-xs'>23%</span>
                </p>
                <p className='text-gray-500 m-1'>Бюджет</p>
              </div>
              <div className='mt-8'>
                <p className='text-3xl font-semibold'>48 735 руб.</p>
                <p className='text-gray-500 m-1'>Расходы</p>
              </div>
              <div className='mt-5'>
                <SparkLine currentColor='blue' id='line-sparkLine' type='Line' height='80px' width='250px' data={SparklineAreaData} color='blue' valueType='Numeric' />
              </div>
              <div className='mt-10'>
                <Button color='white' bgColor={'blue'} text='Скачай отчёт' borderRadius={'10px'} />
              </div>
            </div>
            <div>
              <Stacked width='320px' height='360px' />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Ecommerce