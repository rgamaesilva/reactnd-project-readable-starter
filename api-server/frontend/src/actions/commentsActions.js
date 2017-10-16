export const GET_COMMENTS = 'GET_COMMENTS'
export const CHANGE_COMMENT_VOTE_SCORE = 'CHANGE_COMMENT_VOTE_SCORE'
export const DELETE_COMMENT = 'DELETE_COMMENT'

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
