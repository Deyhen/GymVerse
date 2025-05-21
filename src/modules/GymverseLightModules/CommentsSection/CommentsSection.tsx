import { Carousel } from '@app/shared/components';
import { comments } from './CommentsDB';
import { CommentBlock } from './components';

export const CommentsSection = () => {
  return (
    <div className="mt-5 lg:mt-12 last:*:*:*:">
      <Carousel
        className="lg:pr-[160px]"
        dotsClassName="bg-[#000] opacity-30"
        activeDotClassName="!bg-[#000] opacity-100"
        slides={comments.map((comment) => (
          <CommentBlock
            title={comment.title}
            rate={comment.rate}
            author={comment.author}>
            {comment.content}
          </CommentBlock>
        ))}
      />
    </div>
  );
};
