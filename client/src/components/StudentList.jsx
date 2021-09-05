// import React, { useEffect, useState } from 'react';
// import PropTypes from 'prop-types';
// import axios from 'axios';
// import { Tooltip, Paper, Grid } from '@material-ui/core';

// import UpdateStudent from './UpdateStudent.jsx';

// import { makeStyles } from '@material-ui/core/styles';

// const useStyles = makeStyles((theme) => ({
//   tooltip: {
//     backgroundColor: "red",
//     display: "flex",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     height: '25vh',
//     border: "2px solid black",
//     borderRadius: "6px",
//   }
// }));

// const StudentList = ({ students, getAllStudents }) => {
//   const classes = useStyles();
//   const [studentList, setStudentList] = useState([]);
//   const [hover, setHover] = useState(false);

//   const handleMouseIn = () => {
//     setHover(true);
//   };

//   const handleMouseOut = () => {
//     setHover(false);
//   };

//   const updateStudentList = () => {
//     setStudentList(students);
//   };

//   useEffect(() => {
//     updateStudentList();
//   }, [students]);

//   return (
//     <Grid className="students-grid" container spacing={3} item xs={12}>
//       {studentList.map((studentObj) => (
//         <Tooltip title={`Stripes: ${studentObj.stripes},  Medals: ${studentObj.medals}`} placement="top" key={studentObj._id}>
//         <Grid item xs={6} sm={3} className="student-container" >

//             {/* // eslint-disable-next-line no-underscore-dangle */}
//             <UpdateStudent studentObj={studentObj} getAllStudents={getAllStudents} />

//         </Grid>
//         </Tooltip>
//       ))}
//     </Grid>
//   );
// };

// StudentList.propTypes = {
//   students: PropTypes.arrayOf(PropTypes.object),
// };
// StudentList.defaultProps = {
//   students: [],
// };

// export default StudentList;

//  // // eslint-disable-next-line no-underscore-dangle
//         // <Tooltip title={`Stripes: ${studentObj.stripes}`} placement="top" key={studentObj._id}>

//         //   <Grid item xs={6} sm={3} className="student-container">
//         //     <UpdateStudent studentObj={studentObj} />
//         //     <img
//         //       className="student-pic"
//         //       src={studentObj.profile_pic}
//         //       alt="dist/blank-profile-pic"
//         //       style={{
//         //         border: `8px solid ${studentObj.belt_color}`,
//         //         borderRadius: '25px',
//         //       }}
//         //     />
//         //     <div>{studentObj.name}</div>
//         //   </Grid>
//         // </Tooltip>