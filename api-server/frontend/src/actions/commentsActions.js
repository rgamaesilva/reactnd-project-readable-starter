export const GET_COMMENTS = 'GET_COMMENTS'
export const CHANGE_COMMENT_VOTE_SCORE = 'CHANGE_COMMENT_VOTE_SCORE'
export const DELETE_COMMENT = 'DELETE_COMMENT'
export const DELETE_PARENT_COMMENT = 'DELETE_PARENT_COMMENT'
export const EDIT_COMMENT = 'EDIT_COMMENT'

export function getComments (comments) {
  return {
    type: GET_COMMENTS,
    comments
  }
}

export function changeCommentVoteScore ( {commentId, voteChangeValue} ) {
  return{
    type: CHANGE_COMMENT_VOTE_SCORE,
    commentId,
    voteChangeValue,
  }
}

export function deleteComment ( {commentId, deleted} ) {
  return{
    type: DELETE_COMMENT,
    commentId,
    deleted,
  }
}

export function deleteParentComment ( {parentId, commentId, parentDeleted} ) {
  return{
    type: DELETE_PARENT_COMMENT,
    parentId,
    commentId,
    parentDeleted,
  }
}

export function editComment ({commentId, timestamp, body}) {
  return {
    type: EDIT_COMMENT,
    commentId,
    timestamp,
    body
  }
}
