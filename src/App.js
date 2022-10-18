import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';

import { Navbar, Footer, Sidebar, ThemeSettings } from './components';
import { Ecommerce, Orders, Calendar, Employees, Customers, Editor, Kanban, } from './pages';

import { useStateContext } from './contexts/ContextProvider';

import './App.css';

const App = () => {
  const { activeMenu, setCurrentMode, currentMode, themeSettings, setThemeSettings } = useStateContext();

  useEffect(() => {
    const currentThemeMode = localStorage.getItem('themeMode');
    if (currentThemeMode) {
      setCurrentMode(currentThemeMode);
    }
  });

  return (
    <div className={currentMode === 'Dark' ? 'dark' : ''}>
      <BrowserRouter>
        <div className='flex relative dark:bg-main-dark-bg'>
          <div className='fixed right-4 bottom-4' style={{ zIndex: '1000' }}>
            <TooltipComponent content={"Настройки"} position="Top">
              <button type='button' onClick={() => setThemeSettings(true)} className='text-xl p-3 drop-shadow-md hover:drop-shadow-xl hover:bg-light-gray text-white' style={{ background: 'blue', borderRadius: '50%' }}>
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>
          {activeMenu ? (
            <div className='w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white'>
              <Sidebar />
            </div>
          ) : (
            <div className='w-0 dark:bg-secondary-dark-bg'>
              <Sidebar />
            </div>
          )}
          <div className={`${activeMenu ? 'dark:bg-main-bg bg-main-bg min-h-screen w-full md:ml-72' : 'dark:bg-main-bg bg-main-bg min-h-screen w-full flex-2'}`
          }>
            <div className='fixed md:static bg-main-bg dark:bg-main-bg navbar w-full'>
              <Navbar />
            </div>

            <div>

              {themeSettings && (<ThemeSettings />)}

              <Routes>
                {/* Пульт*/}
                <Route path='/' element={<Ecommerce />} />
                <Route path='/ecommerce' element={<Ecommerce />} />
                {/*Страницы */}
                <Route path='/orders' element={<Orders />} />
                <Route path='/employees' element={<Employees />} />
                <Route path='/customers' element={<Customers />} />
                {/*Проги */}
                <Route path='/kanban' element={<Kanban />} />
                <Route path='/editor' element={<Editor />} />
                <Route path='/calendar' element={<Calendar />} />
              </Routes>
            </div>
            <Footer />
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
