import React from "react";

function Display({ days, hours, minutes, seconds }) {
  return (
    <div>
      <h1>COUNNTDOWN TIMER</h1>
      <h2>Sale Starts In</h2>

      <table>
        <tbody>
          <tr>
            <th>{days}</th>&nbsp;&nbsp;
            <th>{hours}</th>&nbsp;&nbsp;
            <th>{minutes}</th>&nbsp;&nbsp;
            <th>{seconds}</th>&nbsp;&nbsp;
          </tr>

          <tr>
            <th>DAYS</th>&nbsp;&nbsp;
            <th>Hours</th>&nbsp;&nbsp;
            <th>Minutes</th>&nbsp;&nbsp;
            <th>Seconds</th>&nbsp;&nbsp;
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Display;
