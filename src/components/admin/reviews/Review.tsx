import { useEffect, useState } from 'react';
import { MakeReviewPublic, getAllReviewsDetail } from '@/src/redux/service/AdminApi';
import { Divider, Grid } from '@mui/material';
import Image from 'next/image';
import { FaStar } from 'react-icons/fa';

interface StarRatingProps {
  rating: number; // The rating value from 0 to 5
}

const StarRating: React.FC<StarRatingProps> = ({ rating }) => {
  // Ensure the rating is between 0 and 5
  const clampedRating = Math.min(Math.max(rating, 0), 5);

  return (
    <div className='flex gap-[2px] text-sm'>
      {[...Array(5)].map((_, index) => (
        
        <FaStar
          key={index}
          color={index < clampedRating ? '#FFA500' : '#E9E9E9'}
        />
      ))}
    </div>
  );
};


const Review: React.FC = ({review,user,tour,fetchData}) => {


const heandleMakePublicReview = async ()=>{
  const res =await MakeReviewPublic(review._id)
  console.log(res)
  await fetchData();
  console.log(review._id)
  // fetchData();
}


  return (
    <>
        <Grid item xs={12} md={4}>
              <div className="flex p-4">
                <div>
                  <img src={tour.imageUrl} alt="" className="w-[5rem] h-[5rem] rounded-md object-cover" />
                </div>
                <div className="flex flex-col justify-evenly pl-3  ">
                  <h1 className="font-semibold text-md">{tour.name}</h1>
                  <div className="text-xs font-medium mt-[-2px]">
                    Days: <span className="font-semibold">{tour.duration} days</span>
                  </div>
                  <div className="text-xs font-medium ">
                    Date: <span className="font-semibold">{tour.startDate}</span>
                  </div>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <div className="p-4">
                <div className="flex">
                  <div>
                    <img src={user.profile_image} alt={user.name} className="w-12 object-cover h-12" />
                  </div>
                  <div className="flex flex-col pl-3 gap-1 py-1">
                    <h1 className="font-semibold">{user.name + " " + user?.last_name }</h1>
                    <div className="text-xs font-medium">{user.email}</div>
                    <div className="text-xs font-medium mt-1"><StarRating rating={review.rating}/></div>
                  </div>
                </div>
                <p className="text-xs mt-4">
                 {review.review}
                </p>

                <div className="gap-2 flex">
                  <button onClick={heandleMakePublicReview} className="bg-[#FFA500] text-white font-medium text-xs px-6 py-2 rounded-lg mt-5">
                    Public Comment
                  </button>

                  <button className="bg-[#E9E9E9] text-[#626262] font-medium text-xs px-6 py-2 rounded-lg mt-5">
                    Direct Message
                  </button>
                </div>
              </div>
            </Grid>
            <Grid item xs={12} md={2} />
            <Grid item xs={12} px={2}>
              <Divider />
            </Grid>
    </>
  );
};

export default Review;
