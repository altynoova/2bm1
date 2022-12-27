import React, { useState, useEffect } from "react";
import Preloader from "../src/components/Pre";

import Navbar from "./components/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Footer from "./components/Footer";

import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

import ScrollToTop from "./components/ScrollToTop";
import "./style.css";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

import Socials from "./components/Socials/Socials";
import Students from "./components/Students/Students";
import Lessons from "./components/Lessons/Lessons";
import Timetable from "./components/Timetable/Timetable";
import Admin from "./components/Admin/Admin";

import AppContext from "./Context";
import Login from "./components/Login/Login";

function changePath() {
  window.location.pathname = '/'
}

function App() {
  const url = "https://fec5-212-42-96-202.in.ngrok.io";
  const [load, upadateLoad] = useState(true);
  const [students, upadateStudents] = useState([]);
  const [lessons, upadateLessons] = useState([]);
  const [timetable, upadateTimetable] = useState([]);
  const [isLoggedIn, updateLogin] = useState(localStorage.getItem('token') !== null ? true : false);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const getData = async () => {
      fetch(`${url}/api/student`, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "3000",
        }),
      })
        .then((response) => response.json())
        .then((data) => upadateStudents(data));

      fetch(`${url}/api/lesson`, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "3000",
        }),
      })
        .then((response) => response.json())
        .then((data) => upadateLessons(data));

      fetch(`${url}/api/timetable`, {
        method: "get",
        headers: new Headers({
          "ngrok-skip-browser-warning": "3000",
        }),
      })
        .then((response) => response.json())
        .then((data) => upadateTimetable(data));
    };
    getData()
  }, []);

  const lessonsRequest = async (obj, method) => {
    if (method === "PUT") {
      const response = await fetch(`${url}/api/lesson/${obj.id}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj), // body data type must match "Content-Type" header
      });
    } else if (method === "DELETE") {
      const response = await fetch(`${url}/api/lesson/${obj.id}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
    } else if (method === "POST") {
      const response = await fetch(`${url}/api/lesson`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj), // body data type must match "Content-Type" header
      });
    }
    window.location.pathname = '/admin'
  };

  const studentRequest = async (obj, method) => {
    if (method === "PUT") {
      const response = await fetch(`${url}/api/student/${obj.id}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj), // body data type must match "Content-Type" header

      });
    } else if (method === "DELETE") {
      const response = await fetch(`${url}/api/student/${obj.id}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
    } else if (method === "POST") {
      const response = await fetch(`${url}/api/student`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj), // body data type must match "Content-Type" header
      });
    }
    window.location.pathname = '/admin'
  };

  const timetableRequest = async (obj, method) => {
    if (method === "PUT") {
      const response = await fetch(`${url}/api/timetable/${obj.id}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj), // body data type must match "Content-Type" header

      });
    } else if (method === "DELETE") {
      const response = await fetch(`${url}/api/timetable/${obj.id}`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      });
    } else if (method === "POST") {
      const response = await fetch(`${url}/api/timetable`, {
        method: method, // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, *cors, same-origin
        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
        credentials: "same-origin", // include, *same-origin, omit
        headers: {
          "Content-Type": "application/json",
          "ngrok-skip-browser-warning": "3000",
          "Authorization": "Bearer " + localStorage.getItem("token")
        },
        redirect: "follow", // manual, *follow, error
        referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        body: JSON.stringify(obj), // body data type must match "Content-Type" header
      });
    }
    window.location.pathname = '/admin'
  };

  const loginRequest = async (data) => {
    const response = await fetch(`${url}/api/token`, {
      method: "POST", // *GET, POST, PUT, DELETE, etc.
      mode: "cors", // no-cors, *cors, same-origin
      cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
      credentials: "same-origin", // include, *same-origin, omit
      headers: {
        "Content-Type": "application/json",
        "ngrok-skip-browser-warning": "3000",
      },
      redirect: "follow", // manual, *follow, error
      referrerPolicy: "no-referrer", // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
      body: JSON.stringify(data), // body data type must match "Content-Type" header
    })
      .then((response) => response.text())
      .then((token) => {
        localStorage.setItem('token', token)
        updateLogin(true)
      });
  };

  return (
    <AppContext.Provider
      value={{
        students,
        lessons,
        timetable,
        lessonsRequest,
        studentRequest,
        timetableRequest,
        loginRequest,
        isLoggedIn,
      }}
    >
      <Router>
        <Preloader load={load} />
        <div className="App" id={load ? "no-scroll" : "scroll"}>
          <Navbar />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/timetable" element={<Timetable />} />
            {/* <Route path="/socials" element={<Socials />} /> */}
            <Route path="/students" element={<Students />} />
            <Route path="/lessons" element={<Lessons />} />
            {isLoggedIn ? (
              <Route path="/admin/*" element={<Admin />} />
            ) : (
              <Route path="/login" element={<Login />} />
            )}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </AppContext.Provider>
  );
}

export default App;
