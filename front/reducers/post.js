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
  addPostLoading: false, // 게시글 추가가 완료되었을때 true로 변경
  addPostDone: false,
  addPostError: null,
};

export const ADD_POST_REQUEST = 'ADD_POST_REQUEST';
export const ADD_POST_SUCCESS = 'ADD_POST_SUCCESS';
export const ADD_POST_FAILURE = 'ADD_POST_FAILURE';

export const ADD_COMMENT_REQUEST = 'ADD_COMMENT_REQUEST';
export const ADD_COMMENT_SUCCESS = 'ADD_COMMENT_SUCCESS';
export const ADD_COMMENT_FAILURE = 'ADD_COMMENT_FAILURE';

export const addPost = (data) => ({
  type: ADD_POST_REQUEST,
  data,
});

export const addComment = (data) => ({
  type: ADD_COMMENT_REQUEST,
  data,
});

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
    case ADD_POST_REQUEST:
      return {
        ...state,
        addPostLoading: true,
        addPostDone: false,
        addPostError: null,
      }
    case ADD_POST_SUCCESS:
      return {
        ...state,
        mainPost: [dummyPost, ...state.mainPost],
        addPostLoading: false,
        addPostDone: true,
      }
    case ADD_POST_FAILURE:
      return {
        ...state,
        addPostLoading: false,
        addPostError: action.error,
      }

    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentDone: false,
        addCommentError: null,
      }
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentDone: true,
      }
    case ADD_COMMENT_FAILURE:
      return {
        ...state,
        addCommentLoading: false,
        addCommentError: action.error,
      }

    default:
      return state;
  }
};

export default reducer;