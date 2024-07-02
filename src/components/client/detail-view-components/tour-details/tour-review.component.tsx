import { API_DOMAIN } from '@/src/redux/service/APIs';
import { handleCreateReview } from '@/src/redux/service/AdminApi';
import { useState, ChangeEvent, FormEvent } from 'react';

interface ReviewFormProps {
  user: { _id: string };
  tourId: string;
}

const ReviewForm: React.FC<ReviewFormProps> = ({ user, tourId ,bookingId,setshowreview}) => {
  const [reviewData, setReviewData] = useState({
    userId: user._id,
    tourId: tourId,
    bookingId:bookingId,
    rating: 0,
    review: ''
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setReviewData({
      ...reviewData,
      [name]: value,
    });
  };

  const handleRatingChange = (rating: number) => {
    setReviewData({
      ...reviewData,
      rating: rating,
    });
  };

  const submitReview = async (e: FormEvent) => {
    e.preventDefault();
   const res =await handleCreateReview(reviewData);
   if (res.status) {
    setshowreview(false);
    
   }
  };

  return (
   <div className='fixed w-screen h-screen bg-[#000000b5] flex items-center justify-center'>
     <form onSubmit={submitReview} className=" w-[40%] mx-auto p-6 bg-white border border-gray-200 rounded-lg shadow-lg">
      <div className="flex items-center flex-col">
        <label className="block text-gray-700 text-xl font-bold mb-2">Rating:</label>
        <div className="flex gap-2 ">
          {[1, 2, 3, 4, 5].map((star) => (
            <button
              type="button"
              key={star}
              className={`text-3xl ${star <= reviewData.rating ? 'text-[#FFA500]' : 'text-gray-300'}`}
              onClick={() => handleRatingChange(star)}
            >
              &#9733;
            </button>
          ))}
        </div>
      </div>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Comment:</label>
        <textarea
          name="review"
          value={reviewData.review}
          onChange={handleChange}
          className="w-full h-32 p-2 border border-gray-300 rounded-md resize-none focus:outline-none focus:border-[#FFA500]"
          required
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 px-4 bg-[#FFA500] text-white font-bold rounded-md hover:bg-[#ffa600e7]"
      >
        Submit Review
      </button>
    </form>
   </div>
  );
};

export default ReviewForm;
