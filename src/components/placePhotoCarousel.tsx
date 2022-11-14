interface PlacePhotoCarouselProps {
  photoUrls: string[];
}

export const PlacePhotoCarousel = ({ photoUrls }: PlacePhotoCarouselProps) => {
  return (
    <div className='w-full rounded-xl bg-gray-50 shadow-md'>
      <div className='carousel w-full h-80 rounded-xl'>
        {photoUrls.map((photoUrl, idx) => {
          return (
            <div key={idx} id={idx.toString()} className='carousel-item w-full'>
              <img
                src={photoUrl}
                className='w-full object-cover'
                alt={`place photo ${idx}`}
              />
            </div>
          );
        })}
      </div>
      <div className='flex justify-center w-full py-2 gap-2'>
        {photoUrls.map((_, idx) => (
          <a href={`#${idx}`} key={idx} className='btn btn-xs'>
            {idx}
          </a>
        ))}
      </div>
    </div>
  );
};
