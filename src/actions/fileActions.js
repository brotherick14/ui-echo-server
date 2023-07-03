import axios from 'axios';

export const FETCH_FILES_SUCCESS = 'FETCH_FILES_SUCCESS';
export const FETCH_FILES_FAILURE = 'FETCH_FILES_FAILURE';
export const FETCH_FILE_DATA_SUCCESS = 'FETCH_FILE_DATA_SUCCESS';
export const FETCH_FILE_DATA_FAILURE = 'FETCH_FILE_DATA_FAILURE';
export const CLEAR_FILES = 'CLEAR_FILES';

export const fetchFilesSuccess = (files) => ({
  type: FETCH_FILES_SUCCESS,
  payload: files,
});

export const fetchFilesFailure = (error) => ({
  type: FETCH_FILES_FAILURE,
  payload: error,
});

export const fetchFileDataSuccess = () => ({
  type: FETCH_FILE_DATA_SUCCESS,
});

export const fetchFileDataFailure = () => ({
  type: FETCH_FILE_DATA_FAILURE,
});

export const clearFiles = () => ({
  type: CLEAR_FILES,
});

export const fetchFiles = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get('http://localhost:3000/files/data');
      dispatch(fetchFilesSuccess(response.data));
    } catch (error) {
      dispatch(fetchFilesFailure(error.message));
    }
  };
};

export const fetchFileDataByName = (fileName) => {
  return async (dispatch) => {
    try {
      const response = await axios.get(`http://localhost:3000/files/data?fileName=${fileName}`);
      if (response.data.length > 0) {
        dispatch(fetchFileDataSuccess());
        dispatch(fetchFilesSuccess(response.data));
      } else {
        dispatch(fetchFileDataFailure());
      }
    } catch (error) {
      dispatch(fetchFileDataFailure());
    }
  };
};
