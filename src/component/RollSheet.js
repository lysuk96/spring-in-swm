import React, { useState } from "react";

import "../scss/RollSheet.scss";
import mailBox from "../scss/image/mail.png";
import Data from "../dummy/MessageDummy.js";
import { useHistory } from "react-router-dom";

function RollSheet() {
  let [note, setNote] = useState(Data);

  return (
    <div>
      <div class="container">
        <h1
          style={{
            marginTop: "50px",
            marginBottom: "10px",
            fontFamily: "Yeon Sung, cursive",
            fontSize: "3rem",
          }}
        >
          두근두근 쪽지함
        </h1>
        <h6 style={{ fontFamily: "Yeon Sung, cursive", fontSize: "1.75rem" }}>
          매일 자정 새로운 쪽지들이 열려요! 매칭된 상대를 찾아보세요!
        </h6>
      </div>
      <div class="container" style={{ marginTop: "50px" }}>
        <img
          class="mail-box"
          src={mailBox}
          style={{
            width: "150px",
            height: "150px",
            marginTop: "0px",
            marginBottom: "50px",
            border: "0px",
          }}
        />
        <div class="row">
          {note.map((message, index) => {
            return <Card note={message} index={index} />;
          })}
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <br />
      </div>
    </div>
  );
}

function Card(props) {
  const styledRandom = (idx, isMatched) => {
    var array = ["#FFF9BA", "#B8E2F2", "#FFCCCC", "#FFF36D"];
    var borderArray = ["#FFE08C", "#6699FF", "#FFD9EC", "#D5D5D5"];
    var font = [
      "Gaegu",
      "Gamja Flower",
      "Nanum Pen Script",
      "Yeon Sung",
      "Poor Story",
    ];

    const hashKey = (13 / (idx + 1) + 0.2) % 1;
    const x = Math.floor(hashKey * 40);
    const y = Math.floor(hashKey * 40);
    const rotate = Math.floor(hashKey * (idx % 2 === 0 ? 30 : -30));
    // const idx = idx + Math.floor(Math.random()*5)

    if (isMatched) {
      return {
        boxShadow:
          "0 0 5px " +
          borderArray[idx % 4] +
          ", 0 0 25px " +
          borderArray[idx % 4] +
          ", 0 0 50px " +
          borderArray[idx % 4] +
          ", 0 0 100px " +
          borderArray[idx % 4],
        transform:
          "rotate(" +
          rotate +
          "deg)" +
          "translateX(" +
          x +
          "px)" +
          "translateY(" +
          y +
          "px)",
        backgroundColor: array[idx % 4],
        fontFamily: font[idx % 5] + ", cursive",
        fontSize: "1.5rem",
      };
    } else {
      return {
        transform:
          "rotate(" +
          rotate +
          "deg)" +
          "translateX(" +
          x +
          "px)" +
          "translateY(" +
          y +
          "px)",
        backgroundColor: array[idx % 4],
        fontFamily: font[idx % 5] + ", cursive",
        fontSize: "1.5rem",
      };
    }
  };

  let history = useHistory();
  let path = "/members/";

  console.log(JSON.stringify(props.note));
  if (props.note.matched) {
    return (
      <div
        class="square-matched"
        style={styledRandom(props.index, true)}
        onClick={() => {
          history.push(path);
        }}
      >
        <div class="content">
          {props.note.content}
          <h6></h6>
          <h6></h6>
          <h5>by. {props.note.sender}</h5>
        </div>
      </div>
    );
  } else {
    return (
      <div class="square" style={styledRandom(props.index, false)}>
        <div class="content">{props.note.content}</div>
      </div>
    );
  }
}

export default RollSheet;
