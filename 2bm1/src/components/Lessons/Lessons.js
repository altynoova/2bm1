import React, { useContext } from "react";
import { TableControl } from "react-bootstrap-table-control";
import AppContext from "../../Context";

function Lessons() {
  const {lessons} = useContext(AppContext)
  return (
    <section className="expand">
      <div className="lessons" style={{backgroundColor: '#101827', padding: '50px'}}>
      <div className="lessons-list" style={{color: 'white'}}>
        <TableControl
          header={[
            { key: "id", name: "Id" },
            { key: "lessonscode", name: "Code" },
            { key: "lessonsname", name: "Name" },
          ]}
          itens={lessons}
        />
      </div>
      </div>
    </section>
  );
}

export default Lessons;
