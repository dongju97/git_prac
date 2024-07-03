import React from "react";

const students = [
    {   id: 1,
        name : "민지"
    },
    {id: 2,
        name : "다니엘"
    },
    {id: 3,
        name : "하니"
    },
    {id: 4,
        name : "해린"
    },
    {id: 5,
        name : "혜인"
    },
];

function AttendanceBook(props) {
    return (
        <ul>
            {students.map((student) => {
                return <li key={student.id} >{student.name}</li>
            })}
        </ul>
    );
}

export default AttendanceBook;