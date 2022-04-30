import React, {useState} from 'react';
import '../scss/Home.scss'
import letter from '../scss/image/home/section2_letter.png'
import match from '../scss/image/home/section2_match.png'
import anon from '../scss/image/home/section2_anon.png'
import profile from '../scss/image/home/section3_profile.png'
import shit from '../scss/image/home/section3_shit.png'
import matched from '../scss/image/home/section3_match.png'
import limit from '../scss/image/home/section3_limit.png'
import { useHistory } from 'react-router-dom'

function Home() {
    let path = '/members/'
    let history = useHistory()

    return (
        <div>
            <div class = "section" id ="section1">
                <div class='main'>
                    <h2>
                        난 네게로 넌 내게로,<br></br>
                        <span class="emph_hover" style={{color: "rgb(255, 0, 85)"}}>설렘</span>을 전하다.
                    </h2>
                    <p>
                        지금 당신과 함께하는 그/그녀가 당신에게 <span class="emph_hover">설렘</span>을 주나요?<br></br>
                        <span class="emph_hover">오늘의설렘</span>을 통해 익명의 메시지를 보내보세요.
                    </p>
                    <button class = "square-matched" onClick = {()=>{history.push(path);}}>
                        GO TO GROUPS
                    </button>
                </div>
            </div>
            
            <div class = "section" id ="section2">
                <div class = 'main'>
                    <div class="letter">
                        <img class="img" src={letter}></img>
                        <div class="letter_txt">
                            <h2 class="message">
                            # 하루에 한 번
                            </h2>
                            <p class="message_small">
                                "오늘은 누가 나에게 메시지를 보냈을까?"<br></br>
                                <span class="emph">매일 밤 12시</span><br></br>
                                오늘 나에게 도착한 메시지를 확인할 수 있습니다.
                            </p>
                        </div>
                    </div>

                    <div class="anon">
                        <img class="img" src={anon}></img>
                        <div class="anon_txt">
                            <h2 class="message">
                                # 익명성
                            </h2>
                            <p class="message_small">
                                "직접 연락하기에는 아직은 부담스러워..."<br></br>
                                <span class="emph_hover">오늘의설렘</span> 서비스는 <span class="emph">익명의 메시지</span>로  <br></br>
                                당신의 마음을 전달해 드립니다.
                            </p>
                        </div>
                    </div>

                    <div class="match">
                        <img class="img" src={match}></img>
                        <div class="match_txt">
                            <h2 class="message">
                                # 자동 매칭
                            </h2>
                            <p class="message_small">
                                서로가 메시지를 주고 받으면, <br></br> 서로의 프로필을 알려드립니다.<br></br>
                                <span class="emph">이번 기회에 커피 한잔하며<br></br>서로에 대해 알아보는 건 어떤가요?</span>
                            </p>
                        </div>           
                    </div>
                </div>
            </div>
            <div class = "section" id ="section3">
                <div class = 'bottom'>
                    <h2>
                        " 지금, <span class="ani">설레</span>는 하루를 시작해보세요. "
                    </h2>
                </div>                
                <div class ='main'>
                    <div class = "circle" id="circle1">
                        <p class="circle_head"># 1</p>
                        <img src={profile} class="rounded"></img>
                        <p class="circle_text">
                            나만의 프로필을 <br></br>
                            작성해요.
                        </p>
                    </div>
                    <div  class = "circle" id="circle2">
                        <p class="circle_head"># 2</p> 
                        <img src={shit} class="rounded"></img>
                        <p class="circle_text">
                            익명으로 <br></br>
                            쪽지를 보내요.
                        </p>
                    </div>
                    <div  class = "circle" id="circle3">  
                        <p class="circle_head"># 3</p> 
                        <img src={limit} class="rounded"></img>
                        <p class="circle_text">제한된 횟수만큼만 <br></br>보낼 수 있어요.</p>
                    </div>
                    <div  class = "circle" id="circle4">
                        <p class="circle_head"># 4</p> 
                        <img src={matched} class="rounded"></img>
                        <p class="circle_text">서로 메시지를 보내면<br></br>자동 매칭되어요.</p>
                    </div>
                </div> 

            </div>
        </div>

    )
}

export default Home;

