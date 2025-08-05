import React from 'react';

import CommentsGenerator from './CommentsGenerator';
import CommentsListEmpty from './CommentsListEmpty';
import { CommentsListProps } from './types';

const CommentsList: React.FC<CommentsListProps> = ({ comments, id }) => {
  return (
    <div className="w-full h-full flex flex-col items-center">
      <>
        {comments.length === 0 && <CommentsListEmpty />}

        {comments.map((comment, index) => (
          <CommentsGenerator {...comment} shareId={id} isFirstIndex={index === 0} key={index} />
        ))}
      </>
    </div>
  );
};

export default CommentsList;
