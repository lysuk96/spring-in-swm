// Message Schema
/*
const messageSchema = new Schema({
  sender: String,
  receiver: String,
  content: String,
  time: Date
  matched: Boolean // 새로 추가
})
*/

export default
[{
  content: "ㅎㅇ",
  matched: true,
  sender: "김우연",
},
{
  content: "ㅋ반가워 우리 친해지자",
  matched: true,
  sender: "잔망루피"
},
{
  content: "우와 너 밥 좋아한다고? 나랑 맛집 찾아다니면서 놀러다니자 어때????",
  sender: "정찬이",
  matched: false
},
{
  content: "이거 마시면 우리,,,,",
  sender: "뽀로로",
  matched: true
},
{
  content: "내가 낯을 가려서 말을 걸고 싶지만 ㅠㅠ 어렵네 소마하는 기간동안 친해졌으면 좋겠어",
  sender: "뽀로로",
  matched: false
},
{
  content: " 반가워요:) 웃는 모습이 너무 예쁘세요 ㅎㅎ 혹시 도를 믿으세요?",
  sender: "정찬이",
  matched: false
},
{
  content: "( ͡° ͜ʖ ͡°)",
  sender: "복학생​",
  matched: true
},

]