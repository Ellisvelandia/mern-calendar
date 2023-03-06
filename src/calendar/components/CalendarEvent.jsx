import React from "react";

const CalendarEvent = ({ event }) => {
  const { title, user } = event;

  return (
    <>
      <span>{title}</span>
      <span> - {user.name}</span>
    </>
  );
};

export default CalendarEvent;
