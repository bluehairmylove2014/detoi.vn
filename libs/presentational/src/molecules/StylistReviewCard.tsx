import { formatDate } from '@utils/helpers';

import { IReviewBase } from '@business-layer/services/entities';
import RatingStar from '@presentational/atoms/RatingStar';

function StylistReviewCard({ review }: { review: IReviewBase }) {
  return (
    <div className="w-[90%] h-full bg-white float-right rounded-md">
      <div className="w-2/3 h-fit p-5 ml-auto">
        <RatingStar
          point={review.ratingPoint}
          style="full"
          size="sm"
          color="#566483"
        />
        <h3 className="mt-4 leading-[0.65rem]">{review.name}</h3>
        <small>
          Đánh giá gần nhất: {formatDate(review.reviewDate).dateMonthYear}
        </small>
        <p className="mt-4 text-justify line-clamp-6">{review.content}</p>
      </div>
    </div>
  );
}

export default StylistReviewCard;
