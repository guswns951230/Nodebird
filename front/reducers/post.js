export const initialState = {
  mainPost: [{  // Dummy Data
    id: 1,
    User: {
      id: 1,
      nickname: '낙지',
    },
    content: '첫 번째 게시글 #해시태그 #익스프레스',
    Images: [{
      src: 'https://vrthumb.imagetoday.co.kr/2020/11/11/tid292t002803.jpg'
    }, {
      src: 'https://t1.daumcdn.net/cfile/tistory/2214CD4D53F89D7305'
    }, {
      src: 'https://images.chosun.com/resizer/XKL6ePOdAuAn81yF-ZBOY8VyQWs=/616x0/smart/cloudfront-ap-northeast-1.images.arcpublishing.com/chosun/JMI3RCEB2Y7QSIUWJKT2MT7CC4.jpg'
    }],
    Comments: [{
      User: {
        nickname: 'Park',
      },
      content: '아릅답습니다.',
    }, {
      User: {
        nickname: 'Kim'
      },
      content: '멋지네요.',
    }]
  }],
  imagePaths: [], // image 업로드 시 image의 경로를 저장
  postAdded: false, // 게시글 추가가 완료되었을때 true로 변경
};

const ADD_POST = 'ADD_POST'
export const addPost = {
  type: ADD_POST,
}

const dummyPost = {
  id: 2,
  content: 'This is Dummydata.',
  User: {
    id: 1,
    nickname: '낙지',
  },
  Images: [],
  Comments: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        mainPost: [dummyPost, ...state.mainPost],
        postAdded: true,
      }
    default:
      return state;
  }
};

export default reducer;