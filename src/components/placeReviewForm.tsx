export const PlaceReviewForm = () => {
  return (
    <form className='flex flex-col w-full rounded-xl bg-gray-50 shadow-md p-4'>
      {/* Taste */}
      <div className='flex'>
        <p>Taste:</p>
        <div className='rating'>
          <input
            type='radio'
            name='rating-1'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-1'
            className='mask mask-star-2 bg-orange-400'
            checked
          />
          <input
            type='radio'
            name='rating-1'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-1'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-1'
            className='mask mask-star-2 bg-orange-400'
          />
        </div>
      </div>
      {/* Texture */}
      <div className='flex'>
        <p>Texture:</p>
        <div className='rating'>
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-orange-400'
            checked
          />
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-2'
            className='mask mask-star-2 bg-orange-400'
          />
        </div>
      </div>
      {/* Visual presentation */}
      <div className='flex'>
        <p>Visual Presentation:</p>
        <div className='rating'>
          <input
            type='radio'
            name='rating-3'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-3'
            className='mask mask-star-2 bg-orange-400'
            checked
          />
          <input
            type='radio'
            name='rating-3'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-3'
            className='mask mask-star-2 bg-orange-400'
          />
          <input
            type='radio'
            name='rating-3'
            className='mask mask-star-2 bg-orange-400'
          />
        </div>
      </div>

      <textarea
        className='my-2 textarea bg-gray-100 h-44'
        placeholder='Text'
      ></textarea>

      <button className='btn btn-outline' disabled>
        Submit
      </button>
    </form>
  );
};
