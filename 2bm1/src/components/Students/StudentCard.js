import React from "react";
import Card from "react-bootstrap/Card";
import Carousel from "react-bootstrap/Carousel";

function StudentCard(props) {
  return (
    <Card className="project-card-view">
      <Carousel>
        {[props.photo1, props.photo2, props.photo3, props.photo4].map((imgSrc, index) => {
          return (
            <Carousel.Item key={index}>
              <img 
                style={{
                  'width': '100%',
                  'height': 400,
                  'objectFit': 'cover'
                }}
                className="d-block" 
                src={`${imgSrc}`} alt="First slide" />
            </Carousel.Item>
          );
        })}
      </Carousel>
      <Card.Body>
        <Card.Title>{props.name}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          Birthday: {props.dateOfBirth}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          Sign: {props.astrologicalSign}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>
          Where from: {props.motherLand}
        </Card.Text>
        <Card.Text style={{ textAlign: "justify" }}>"{props.phrases}"</Card.Text>
      </Card.Body>
    </Card>
  );
}

export default StudentCard;

// { "Name": "Алтынбекова Мээрим Алтынбековна",
//  "DateOfBirth": "2001-07-02T00:00:00",
//   "AstrologicalSign": "Бөйөн",
//    "MotherLand": "Жалал-Абад",
//     "Profile": "/img/profiles/Meerim.jpg",
//      "Phrases": "Чтобы зарабатывать, деньги нужно знать\r\nкак их применять",
//       "Photos": ["/img/Meerim1.JPG", "Photo2": "/img/Meerim2.JPG",]
//        "Photo3": "/img/Meerim3.JPG", "Photo4": "/img/Meerim4.JPG",
//         "Instagram": "https://www.instagram.com/altynoova/",
//          "Tg": "https://t.me/Altynoova" }