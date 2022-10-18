import React from 'react';
import { Button } from '.';
import { MdOutlineCancel } from 'react-icons/md';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';
import { useStateContext } from '../contexts/ContextProvider';
import { cartData } from '../data/dummy';

const Cart = () => {
  const { handleClickClose } = useStateContext();
  return (
    <div className='bg-half-transparent w-full fixed nav-item top-0 right-0'>
      <div className='float-right h-screen duration-1000 ease-in-out dark:text-gray-200 transition-all dark:bg-[#484B52] bg-white md:w-400 p-8'>
        <div className='flex justify-between items-center'>
          <p className='font-semibold text-lg'>Корзина покупок</p>
          <button type="button" onClick={() => handleClickClose()} className='text-xl rounded-full p-3 hover:bg-light-gray mt-4 block'>
            <MdOutlineCancel />
          </button>
        </div>
        {cartData?.map((item, index) => (
          <div key={index}>
            <div>
              <div className='flex items-center leading-8 gap-5 border-b-1 border-color dark:border-gray-600 p-4'>
                <img className='rounded-lg h-80 w-24' src={item.image} alt='product' />
                <div>
                  <p className='font-semifold'>{item.name}</p>
                  <p className='text-gray-600 dark:text-gray-400 text-sm font-semibold'>{item.category}</p>
                  <div className='flex gap-4 mt-2 items-center'>
                    <p className='font-semibold text-lg'>
                      {item.price}
                    </p>
                    <div className='flex items-center border-1 border-r-0 border-color rounded'>
                      <p className='p-2 border-r-1 border-color dark:border-gray-600 text-red-600'>{AiOutlineMinus}</p>
                      <p className='p-2 border-r-1 border-color dark:border-gray-600 text-green-600'>0</p>
                      <p className='p-2 border-r-1 border-color dark:border-gray-600 text-green-600'>{AiOutlinePlus}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        ))}
        <div className='mt-3 mb-3'>
          <div className='flex justify-between items-center'>
            <p className='text-gray-500 dark:text-gray-200'>Всего:</p>
            <p className='font-semibold'>$890</p>
          </div>
          <div className='flex justify-between items-center mt-3'>
            <p className='text-gray-500 dark:text-gray-200'>Итого:</p>
            <p className='font-semibold'>$890</p>
          </div>
        </div>
        <div className='mt-5'>
          <Button color='white' bgColor='blue' text='Заказать' borderRadius='10px' width='full' />
        </div>
      </div>
    </div>
  )
}

export default Cart