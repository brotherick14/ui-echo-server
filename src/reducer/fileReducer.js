import { FETCH_FILES_SUCCESS, FETCH_FILES_FAILURE, FETCH_FILE_DATA_SUCCESS, FETCH_FILE_DATA_FAILURE } from '../actions/fileActions';

const initialState = {
  files: [],
  error: null,
  dataNotFound: false,
};

const fileReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FILES_SUCCESS:
      return {
        ...state,
        files: action.payload,
        error: null,
      };
    case FETCH_FILES_FAILURE:
      return {
        ...state,
        files: [],
        error: action.payload,
      };
    case FETCH_FILE_DATA_SUCCESS:
      return {
        ...state,
        dataNotFound: false,
      };
    case FETCH_FILE_DATA_FAILURE:
      return {
        ...state,
        dataNotFound: true,
      };
    default:
      return state;
  }
};

export default fileReducer;
