import { addHours } from "date-fns";
import React from "react";
import { useCalendarStore } from "../../hooks/useCalendarStore";
import { useUiStore } from "../../hooks/useUiStore";

const FabAddNew = () => {

  const { openDateModal } = useUiStore();
  const { setActiveEvent } = useCalendarStore();

  const handleClickNew = () => {
      setActiveEvent({
          title: '',
          notes: '',
          start: new Date(),
          end: addHours( new Date(), 2 ),
          bgColor: '#fafafa',
          user: {
              _id: '1',
              name: 'Ellis'
          }
      });
      openDateModal();
  }

  return (
    <button className="btn btn-primary fab" onClick={handleClickNew}>
      <i className="fas fa-plus"></i>
    </button>
  );
};

export default FabAddNew;
