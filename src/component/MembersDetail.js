/* eslint-disable */

import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap';
import '../scss/RollSheet.scss'
import Data from '../dummy/UserDummy.js';
import { left } from '@popperjs/core';

const wrap = {
    margin : "50px 50px",
    backgroundColor: "#efecf8",
    borderRadius: "8px",
    boxShadow : "0 4px 8px 0 rgba(0, 0, 0, 0.2)",
    color : "#61527f"
}

const infoBox = {
    marginTop : "20px",
    marginBottom : "20px"
}

const divName = {
    marginTop : "10px",
    fontSize : "30px",
    fontWeight : "bold"
}

const divStatus = {
    fontSize : "20px",
    marginBottom : "25px",
    fontWeight : "bold"
}

const divintroduction = {
    marginLeft : "10%",
    marginRight : "10%",
    marginBottom : "30px",
    whiteSpace: "pre-line"
}
const imgimg = {
    width : "350px",
    marginTop : "30px",
    borderRadius : "3%"
}
// const divtag = {
//     padding : "4px 10px",
//     marginRight : "4px",
//     marginTop : "10px",
//     border : "none",
//     fontWeight : "600",
//     color : "white",
//     borderRadius : "8px",
//     fontSize: "15px",
//     background: "#000000"
// }

function MembersDetail() {

    const params = useParams();
    const memberID = params.id;
    const info = Data.find(element => element.id == memberID);
    
    const [inputContent, setInputContent] = useState('');

    const handleInputContent = (e) => {
        setInputContent(e.target.value);
    };

    const onClickButton = (e) => {
        alert("쪽지가 성공적으로 발송되었습니다.");
        e.target.form.elements.paper.value = "";
    }

    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (<div style={wrap}>
        <div style={infoBox}>
            <img style={imgimg}src={info.img} alt="No Image" />
            <div style={divName}>{info.name}</div>
            <div style={divStatus}>{info.status}</div>
            <span style={divintroduction}>{info.introduction}</span>
            {/* <div style={divtag}>{info.tags}</div> */}
        </div>
        <Container>
            <Form>
                <Form.Label>쪽지 보내기</Form.Label>
                <Form.Group className="mb-5">
                    <Form.Control
                    name="paper"
                    as="textarea"
                    rows={3}
                    id="content"
                    value={inputContent}
                    onChange={handleInputContent}
                    />
                    <Button
                    style={{ marginTop: '1rem', marginBottom: '1rem' }}
                    onClick={onClickButton}
                    >
                    보내기
                    </Button>
                </Form.Group>
                </Form>
        </Container>
    </div>)
}


export default MembersDetail;