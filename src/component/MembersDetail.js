/* eslint-disable */

import React, {useEffect, useState} from 'react'
import { useParams } from 'react-router-dom'
import { Container, Form, Button } from 'react-bootstrap';
import '../scss/RollSheet.scss'
import Data from '../dummy/UserDummy.js';

const wrap = {
    marginTop : "30px"
}

const infoBox = {
    marginTop : "20px",
    marginBottom : "20px",
}

const divName = {
    fontSize : "30px",
    fontWeight : "bold"
}

const divStatus = {
    fontSize : "20px"
}

function MembersDetail() {

    const params = useParams();
    const memberID = params.id;
    const info = Data.find(element => element.id == memberID);
    
    const [inputContent, setInputContent] = useState('');

    const handleInputContent = (e) => {
        setInputContent(e.target.value);
    };

    const onClickButton = () => {
        alert(inputContent);
    }

    
    return (<div style={wrap}>
        <div style={infoBox}>
            <div style={divName}>{info.name}</div>
            <div style={divStatus}>{info.status}</div>
        </div>
        <Container>
            <Form>
                <Form.Label>쪽지보내기</Form.Label>
                <Form.Group className="mb-5">
                    <Form.Control
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