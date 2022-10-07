import React from 'react';
import { ScheduleComponent, ViewsDirective, ViewDirective, Day, Week, WorkWeek, Month, Agenda, Inject, Resize, DragAndDrop } from '@syncfusion/ej2-react-schedule';

// import { extend } from '@syncfusion/ej2-base';
// import { loadCldr } from '@syncfusion/ej2-base';
// import * as numberingSystems from '../numberingSystems.json';
// import * as gregorian from '../ca-gregorian.json';
// import * as numbers from '../numbers.json';
// import * as timeZoneNames from '../timeZoneNames.json';

import { scheduleData } from '../data/dummy';
import { Header } from '../components';

// loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);

const Calendar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header category={'Апплет'} title='Календарь' />
      <ScheduleComponent height='650px' eventSettings={{ dataSource: scheduleData }} selectedDate={new Date(2021, 0, 10)} locale='ru'>
        <ViewsDirective>
          <ViewDirective option='Day' />
          <ViewDirective option='Week' />
          <ViewDirective option='WorkWeek' />
          <ViewDirective option='Month' />
        </ViewsDirective>
        <Inject services={[Day, Week, WorkWeek, Month, Agenda, Resize, DragAndDrop]} />
      </ScheduleComponent>
    </div>
  )
}

export default Calendar