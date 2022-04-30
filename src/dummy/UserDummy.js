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
    id: 0,
    name: "이영석",
    status: "선릉 맛집 탐방 하실분..",
    introduction: `
    안녕하세요! 세상을 바꾸는 뽀로로 개발자가 되고 싶은 이영석입니다 ㅎㅎ
    주요 관심분야는 '핀테크'와 '교육'으로, 소마과정동안 해당 도메인에 해당하는 프로젝트를 진행하고자 합니다.

    노는 걸 워낙 좋아하는 한양대 뽀로로의 대표주자로써 소마 여러분들과 기깔나게 노는 것이 제 작은 소망입니다 하핫
    화끈하게 놀고 싶으신 분들은 바로 쪽지 날려주세요~ 바로 Han River 드라이브 조지러 gogo ( ͡° ͜ʖ ͡°)

    저를 한마디로 표현하자면요? 게으른 완벽주의자입니다~
    제 장래희망이요? 꿈은 없고요 그냥 놀고 싶습니다~
    `,
    tags: "FE",
    img: "/imgs/ys.jpeg",
  },

  {
    id: 1,
    name: "최현수",
    status: "이리콤",
    tags: "BE",
    img: "/imgs/chs.jpeg",
  },

  {
    id: 2,
    name: "민향숙",
    status: "ENFP 환영합니다.",
    introduction: `
    안녕하세요~ 민향숙입니다 😊
    주된 연구분야는 시계열 데이터 활용한 딥러닝 모델링 입니다만,,,
    더 흥미를 느끼는 분야를 찾아나가는 중입니다!
    
    롤, 오버워치, 배그, 등 게임 하는 것을 정말 좋아하구요, 
    특히, LCK 및 롤드컵 광팬입니다. 시간 괜찮으면 같이 MSI 직관가요ㅎㅎ
    
    조용하고 반응없어 보이지만 말걸어주면 정말 좋아합니다.
    
    프로젝트만 하지말고 다 같이 재미있는 추억 만들어 나가요~!
    `,
    tags: "AI",
    img: "/imgs/mhs.jpeg",
  },
  {
    id: 3,
    name: "박정재",
    status: "저를.. 데려가주세요..!",
    introduction: `
    날 선택해줄줄은 정말 몰랐어...
    안녕하세요! 소프트웨어를 수단으로 세상을 변화시키고 싶은 박정재입니다.
    백엔드 경험이 있지만 한 분야를 깊게 파기보단 여러 분야를 어느 정도 다룰 수 있는 사람이 되고 싶습니다.
    관심사가 다양해서 넓고 얕은 지식을 가지고 있어서 어느 분이랑도 재밌게 대화할 수 있어요.
    흥미로운 대화와 토론을 좋아합니다.
    편하게 쪽지 보내주세요 :)
    `,
    tags: "BE",
    img: "/imgs/jj.jpeg",
  },

  {
    id: 4,
    name: "이주원",
    status: "스근하네",
    introduction: `
    안녕하세요 ! 사람들과 함께 개발을 하는 것이 재밌는 이주원입니다 :)
    개발에 관련된 것이라면 뭐든 좋아하지만, 이번 소마 과정에서는 백엔드를 맡으려 하고 있습니다.
    
    MBTI 는 ESFP 이고, 취미는 노래방 가는 거랍니다 ~
    프로젝트하다가 스트레스 풀러 노래방 가실 분 연락주세요 ㅎㅎ
    
    소마에서 여러 사람들과 친해지고 싶어요 ~!
    편하게 연락주세요 :)
    `,
    tags: "BE",
    img: "/imgs/jw.jpeg",
  },

  {
    id: 5,
    name: "정찬이",
    status: "Born in the States",
    tags: "BE",
  },
];
