import React, { useContext } from "react";
import "./Timetable.css";
import { Container } from "react-bootstrap";
import AppContext from "../../Context";

function Timetable() {
  const { timetable } = useContext(AppContext);
  return (
    <section className="expand">
      <Container fluid className="project-section">
        <Container>
          <div className="timetable-container">
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
          </div>
        </Container>
      </Container>
    </section>
  );
}

export default Timetable;
