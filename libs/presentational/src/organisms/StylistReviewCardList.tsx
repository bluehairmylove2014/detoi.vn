'use client';

import ReviewCard from '@presentational/molecules/StylistReviewCard';
import CardController from '@presentational/molecules/NavigateSteps';
import { IReviewBase } from '@business-layer/services/entities';
import Image from 'next/image';
import { useState } from 'react';

const reviews: IReviewBase[] = [
  {
    id: 1,
    avt: 'https://urashima.sirv.com/detoivn/customer_avt/user-avt%20(3).png',
    name: 'Nguyễn Ba Phương',
    content:
      'Không ngờ làm việc với ứng dụng này lại thú vị đến vậy! Tìm được người giúp nhanh chóng, mọi thứ diễn ra suôn sẻ và kết quả làm mình ngạc nhiên. Rất thích và chắc chắn sẽ tiếp tục sử dụng. Bạn nào cần giúp đỡ, đừng bỏ qua!',
    ratingPoint: '4.8',
    reviewDate: '21-02-2024',
  },
  {
    id: 2,
    avt: 'https://urashima.sirv.com/detoivn/customer_avt/user-avt%20(2).png',
    name: 'Phan Dương Minh',
    content:
      'Ứng dụng này thực sự tuyệt vời! Mọi thứ diễn ra nhanh chóng và thuận tiện. Tìm được sự giúp đỡ một cách dễ dàng, và kết quả làm tôi ngạc nhiên. Rất thích và chắc chắn sẽ tiếp tục sử dụng. Đừng bỏ qua nếu bạn cần giúp đỡ!',
    ratingPoint: '4.4',
    reviewDate: '21-03-2024',
  },
  {
    id: 3,
    avt: 'https://urashima.sirv.com/detoivn/customer_avt/user-avt%20(1).png',
    name: 'Phan Phúc Đạt',
    content:
      'Khám phá ứng dụng này là một trải nghiệm đáng kinh ngạc! Tìm kiếm sự giúp đỡ nhanh chóng, mọi thứ diễn ra suôn sẻ và kết quả làm mình hài lòng beyond measure. Đánh giá cao và chắc chắn sẽ giới thiệu cho người khác. Đừng ngần ngại thử nghiệm!',
    ratingPoint: '4.2',
    reviewDate: '21-05-2024',
  },
];

function ReviewCardList() {
  const [displayedReview, setDisplayedReview] = useState<IReviewBase>(
    reviews[1]
  );
  return (
    <div className="w-full h-full flex flex-col justify-between relative">
      <div className="w-full flex flex-shrink flex-row justify-end py-5">
        <CardController
          nextCardId=""
          prevCardId=""
          setCardId={() => {}}
          theme="blackIncrease"
        />
      </div>
      {displayedReview ? (
        <>
          <div className="w-full flex-grow">
            <ReviewCard review={displayedReview} key={displayedReview.id} />
          </div>
          <div className="absolute top-0 left-0 w-1/3 aspect-square">
            <div className="relative w-full h-full">
              <Image
                src={displayedReview.avt}
                alt="review"
                fill
                sizes="(max-width: 768px) 300px, (max-width: 1200px)  500px, 100vw"
                style={{ objectFit: 'cover' }}
              />
            </div>
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}

export default ReviewCardList;
