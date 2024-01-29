'use client';

import StylistReviewCard from '@presentational/molecules/StylistReviewCard';
import CardController from '@presentational/molecules/NavigateSteps';
import { IReviewBase } from '@business-layer/services/entities';
import { PRODUCT_LOADER } from '@constants/base64img';
import Image from 'next/image';
import { useState } from 'react';

const reviews: IReviewBase[] = [
  {
    id: 1,
    avt: 'https://urashima.sirv.com/detoivn/customer_avt/user-avt%20(3).png',
    name: 'Nguyễn Ba Phương',
    content:
      'Không ngờ làm việc với ứng dụng này lại thú vị đến vậy! Tìm được người giúp nhanh chóng, mọi thứ diễn ra suôn sẻ và kết quả làm mình ngạc nhiên. Rất thích và chắc chắn sẽ tiếp tục sử dụng. Bạn nào cần giúp đỡ, đừng bỏ qua!',
    ratingPoint: 4.8,
    reviewDate: '2024-01-23T17:06',
  },
  {
    id: 2,
    avt: 'https://urashima.sirv.com/detoivn/customer_avt/user-avt%20(2).png',
    name: 'Phan Dương Minh',
    content:
      'Ứng dụng này thực sự tuyệt vời! Mọi thứ diễn ra nhanh chóng và thuận tiện. Tìm được sự giúp đỡ một cách dễ dàng, và kết quả làm tôi ngạc nhiên. Rất thích và chắc chắn sẽ tiếp tục sử dụng. Đừng bỏ qua nếu bạn cần giúp đỡ!',
    ratingPoint: 4.4,
    reviewDate: '2024-01-25T17:06',
  },
  {
    id: 3,
    avt: 'https://urashima.sirv.com/detoivn/customer_avt/user-avt%20(1).png',
    name: 'Phan Phúc Đạt',
    content:
      'Khám phá ứng dụng này là một trải nghiệm đáng kinh ngạc! Tìm kiếm sự giúp đỡ nhanh chóng, mọi thứ diễn ra suôn sẻ và kết quả làm mình hài lòng beyond measure. Đánh giá cao và chắc chắn sẽ giới thiệu cho người khác. Đừng ngần ngại thử nghiệm!',
    ratingPoint: 4.2,
    reviewDate: '2024-01-30T17:06',
  },
];

function ReviewCardList() {
  const [displayedReviewIndex, setDisplayedReviewIndex] = useState<number>(1);
  return (
    <div className="w-full h-full flex flex-col justify-between relative">
      <div className="w-full flex flex-shrink flex-row justify-end py-5">
        <CardController
          nextCardId={
            displayedReviewIndex + 1 >= reviews.length
              ? 0
              : displayedReviewIndex + 1
          }
          prevCardId={
            displayedReviewIndex === 0
              ? reviews.length - 1
              : displayedReviewIndex - 1
          }
          setCardId={setDisplayedReviewIndex}
          theme="blackIncrease"
        />
      </div>
      <div className="w-full flex-grow">
        <StylistReviewCard
          review={reviews[displayedReviewIndex]}
          key={reviews[displayedReviewIndex].id}
        />
      </div>
      <div className="absolute top-0 left-0 w-1/3 aspect-[3/4] max-w-[220px]">
        <div className="relative w-full h-full">
          <Image
            src={reviews[displayedReviewIndex].avt + `?v=${Math.random()}`}
            alt="review"
            fill
            sizes="(max-width: 768px) 300px, (max-width: 1200px)  500px, 100vw"
            style={{ objectFit: 'cover', borderRadius: '8px' }}
            placeholder="blur"
            blurDataURL={PRODUCT_LOADER}
          />
        </div>
      </div>
    </div>
  );
}

export default ReviewCardList;
