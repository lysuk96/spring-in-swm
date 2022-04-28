// User Schema
/*
const userSchema = new Schema({
    name: String,
    id: {type: String, unique: true},
    passwd: String,
    salt: String,
    profile: String,
    status: String,
    introduction: String
})
*/

export default [
    {
      id : 0,
      name : "이영석",
      status : "선릉 맛집 탐방 하실분..",
      introduction : "동해 물과 백두산이 마르고 닳도록 하느님이 보우하사 우리나라 만세. 무궁화 삼천리 화려 강산 대한 사람, 대한으로 길이 보전하세. \n남산 위에 저 소나무, 철갑을 두른 듯 바람 서리 불변함은 우리 기상일세.",
      tags: "FE"
    },
  
    {
      id : 1,
      name : "이우연",
      status : "Born in Seoul",
      tags: "AI"
    },
  
    {
      id : 2,
      name : "정찬이",
      status : "Born in the States",
      tags: "BE"
    }
  ] 