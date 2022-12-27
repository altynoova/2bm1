import React, { useContext } from "react";
import AppContext from "../../../Context";
import { Button } from "react-bootstrap";

function Timetable() {
  const { timetable, timetableRequest } = useContext(AppContext);
  const handleSubmit = (method) => {
    const {
      Id,
      Day,
      First,
      Second,
      Third,
      Fourth,
      Fifth,
      Sixth,
      Seventh,
      Eighth,
      Ninth,
      Tenth,
    } = document.forms[0];

    const data = {
      day: Day.value,
      first: First.value,
      second: Second.value,
      third: Third.value,
      fourth: Fourth.value,
      fifth: Fifth.value,
      sixth: Sixth.value,
      seventh: Seventh.value,
      eighth: Eighth.value,
      ninth: Ninth.value,
      tenth: Tenth.value,
    };

    if (method !== 'POST') data.id = Id.value;

    console.log(data, method);
    timetableRequest(data, method)
  };

  return (
    <section className="expand">
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Pazartesi</th>
            <th>Salı</th>
            <th>Çarşamba</th>
            <th>Perşembe</th>
            <th>Cuma</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>8:00-8:45</td>
            <td>{timetable[0].first}</td>
            <td>{timetable[1].first}</td>
            <td>{timetable[2].first}</td>
            <td>{timetable[3].first}</td>
            <td>{timetable[4].first}</td>
          </tr>
          <tr>
            <td>8:55-9:40</td>
            <td>{timetable[0].second}</td>
            <td>{timetable[1].second}</td>
            <td>{timetable[2].second}</td>
            <td>{timetable[3].second}</td>
            <td>{timetable[4].second}</td>
          </tr>
          <tr>
            <td>9:50-10:35</td>
            <td>{timetable[0].third}</td>
            <td>{timetable[1].third}</td>
            <td>{timetable[2].third}</td>
            <td>{timetable[3].third}</td>
            <td>{timetable[4].third}</td>
          </tr>
          <tr>
            <td>10:45-11:30</td>
            <td>{timetable[0].fourth}</td>
            <td>{timetable[1].fourth}</td>
            <td>{timetable[2].fourth}</td>
            <td>{timetable[3].fourth}</td>
            <td>{timetable[4].fourth}</td>
          </tr>
          <tr>
            <td>11:40-12:25</td>
            <td>{timetable[0].fifth}</td>
            <td>{timetable[1].fifth}</td>
            <td>{timetable[2].fifth}</td>
            <td>{timetable[3].fifth}</td>
            <td>{timetable[4].fifth}</td>
          </tr>
          <tr>
            <td>13:30-14:15</td>
            <td>{timetable[0].sixth}</td>
            <td>{timetable[1].sixth}</td>
            <td>{timetable[2].sixth}</td>
            <td>{timetable[3].sixth}</td>
            <td>{timetable[4].sixth}</td>
          </tr>
          <tr>
            <td>14:25-15:10</td>
            <td>{timetable[0].seventh}</td>
            <td>{timetable[1].seventh}</td>
            <td>{timetable[2].seventh}</td>
            <td>{timetable[3].seventh}</td>
            <td>{timetable[4].seventh}</td>
          </tr>
          <tr>
            <td>15:20-16:05</td>
            <td>{timetable[0].eighth}</td>
            <td>{timetable[1].eighth}</td>
            <td>{timetable[2].eighth}</td>
            <td>{timetable[3].eighth}</td>
            <td>{timetable[4].eighth}</td>
          </tr>
          <tr>
            <td>16:15-17:00</td>
            <td>{timetable[0].ninth}</td>
            <td>{timetable[1].ninth}</td>
            <td>{timetable[2].ninth}</td>
            <td>{timetable[3].ninth}</td>
            <td>{timetable[4].ninth}</td>
          </tr>
          <tr>
            <td>17:10-17:55</td>
            <td>{timetable[0].tenth}</td>
            <td>{timetable[1].tenth}</td>
            <td>{timetable[2].tenth}</td>
            <td>{timetable[3].tenth}</td>
            <td>{timetable[4].tenth}</td>
          </tr>
        </tbody>
      </table>

      <div className="timetable">
        <form onSubmit={handleSubmit}>
          <div className="input-container">
            <label>Id</label>
            <input type="number" name="Id" placeholder="Id" />
          </div>
          <div className="input-container">
            <label>Day</label>
            <input type="text" name="Day" placeholder="Day" />
          </div>
          <div className="input-container">
            <label>8:00-8:45</label>
            <input type="text" name="First" placeholder="First" />
          </div>
          <div className="input-container">
            <label>8:55-9:40</label>
            <input type="text" name="Second" placeholder="Second" />
          </div>
          <div className="input-container">
            <label>9:50-10:35</label>
            <input type="text" name="Third" placeholder="Third" />
          </div>
          <div className="input-container">
            <label>10:45-11:30</label>
            <input type="text" name="Fourth" placeholder="Fourth" />
          </div>
          <div className="input-container">
            <label>11:40-12:25</label>
            <input type="text" name="Fifth" placeholder="Fifth" />
          </div>
          <div className="input-container">
            <label>13:30-14:15</label>
            <input type="text" name="Sixth" placeholder="Sixth" />
          </div>
          <div className="input-container">
            <label>14:25-15:10</label>
            <input type="text" name="Seventh" placeholder="Seventh" />
          </div>
          <div className="input-container">
            <label>15:20-16:05</label>
            <input type="text" name="Eighth" placeholder="Eighth" />
          </div>
          <div className="input-container">
            <label>16:15-17:00</label>
            <input type="text" name="Ninth" placeholder="Ninth" />
          </div>
          <div className="input-container">
            <label>17:10-17:55</label>
            <input type="text" name="Tenth" placeholder="Tenth" />
          </div>
          <div className="button-container" style={{marginTop: '30px'}}>
            <Button
              className="form-btn"
              variant="primary"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit("POST");
              }}
            >
              Add
            </Button>
            <Button
              className="form-btn"
              variant="primary"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit("PUT");
              }}
            >
              Update
            </Button>
            <Button
              className="form-btn"
              variant="primary"
              type="submit"
              onClick={(event) => {
                event.preventDefault();
                handleSubmit("DELETE");
              }}
            >
              Delete
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Timetable;
