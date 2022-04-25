import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom';

function Members(props) {
    return(
        <div></div>
    )
}

// function Card(props) {
//     let history = useHistory()
//     let path = "/members/" + props.member.id
//     let srcPath = "http://192.249.18.163:3001/api/users/profile/" +  props.member.id

//     return (
//       <div className="col-md-4" >
//         <img src={srcPath} onClick = {()=>{history.push(path);}} style={{
//             width: 'auto',
//             height: 'auto',
//             maxWidth:'300px',
//             maxHeight: '300px',
//             backgroundPosition: 'center',
//             backgroundRepeat: 'no-repeat'
//         }} />
//         <h4 style ={{marginTop:'20px'}}>{props.member.name}</h4>
//         <p  style={{marginBottom:'40px'}}>{props.member.status}</p>
//       </div>
//     )
// }

export default Members;