import React from "react";

export const MapDemo10 = () => {
  const slots = [
    { id: 1, arena: "Arena A", time: "6:00 AM - 7:00 AM", booked: true },
    { id: 2, arena: "Arena A", time: "7:00 AM - 8:00 AM", booked: false },
    { id: 3, arena: "Arena B", time: "5:00 PM - 6:00 PM", booked: true },
    { id: 4, arena: "Arena B", time: "6:00 PM - 7:00 PM", booked: false },
    { id: 5, arena: "Arena C", time: "6:00 PM - 7:00 PM", booked: false },
    { id: 6, arena: "Arena C", time: "7:00 PM - 8:00 PM", booked: true }
  ];

  return (
    <div style={{ color: "white", textAlign: "center"}}>
      <h1>MAP DEMO 10</h1>
      <br/>
      <h3>Arena Slot Availability</h3>

      <table class="table table-dark">
        <thead>
          <tr>
            <th>Slot ID</th>
            <th>Arena Name</th>
            <th>Time</th>
            <th>Status</th>
          </tr>
        </thead>

        <tbody>
          {slots.map((slot) => (
            <tr
              key={slot.id}
              style={{
                backgroundColor: slot.booked ? "#402020" : "#204020",
              }}
            >
              <td>{slot.id}</td>
              <td>{slot.arena}</td>
              <td>{slot.time}</td>
              <td style={{ color: slot.booked ? "red" : "lightgreen" }}>
                {slot.booked ? "Booked" : "Available"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
