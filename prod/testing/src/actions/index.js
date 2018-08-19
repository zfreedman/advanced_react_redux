import axios from "axios";

import {
  FETCH_COMMENTS,
  SAVE_COMMENT
} from "actions/types";

export const API_URL = "http://jsonplaceholder.typicode.com/comments";

export function fetchComments () {
  const response = axios.get(API_URL);

  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

export function saveComment (comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}
