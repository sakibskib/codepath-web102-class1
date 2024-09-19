import React from "react";
import Event from './Event'

const Calendar = () => {
  return (
    <div className="Calendar">
      <table>
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
        <tbody>
          <tr>
            <td className="time">8am</td>
            <Event event='Fancy Dinner 🎩' location='Maple & Ash' color ='green'/>
            <Event event='Morning Jog 🏃‍♂️' color='blue' />
            <Event event='Team Meeting 🤝' color='blue' />
            <Event event='Lunch Break 🍔' color='blue' />
            <Event event='Coding Workshop 💻' color='pink' />
            <Event event='Movie Night 🎥' color='green' />
            <td></td>
          </tr>
          <tr>
            <td className="time">9am</td>
            <td> </td>
            <Event event='Reading Club 📚' color='pink' />

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">10am</td>
            <Event event='Gym Workout 💪' color='green' />

            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">11am</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">12pm</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <Event event='Dinner with Friends 🍽️' color='blue' />

            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">1pm</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">2pm</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">3pm</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">4pm</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr>
            <td className="time">5pm</td>
            <td> </td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Calendar;
