import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from 'next';
import Link from 'next/link';
import { BiArrowBack } from 'react-icons/bi';
import axios from 'axios';
import { GooglePlaceResult } from '../services/places';
import { MockPlaceMenu, placeMenu, placePhotoUrls } from '../mocks';
import { PlacePhotoCarousel } from '../components/placePhotoCarousel';
import { AiFillStar } from 'react-icons/ai';
import { PlaceMenu } from '../components/placeMenu';
import { FaUserAlt } from 'react-icons/fa';
import { PlaceReviewForm } from '../components/placeReviewForm';

export const getServerSideProps: GetServerSideProps<{
  data: GooglePlaceResult & { photoUrls: string[]; menu: MockPlaceMenu[] };
}> = async ({ params }) => {
  const placeId = params?.id as string;
  const fields = ['name', 'rating', 'formatted_address', 'photo', 'contact'];

  const placeDetailsUrl =
    'https://maps.googleapis.com/maps/api/place/details/json';

  try {
    const placeDetails = await axios.get<{ result: GooglePlaceResult }>(
      placeDetailsUrl,
      {
        params: {
          place_id: placeId,
          key: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
          fields,
        },
      }
    );

    let placeResult = placeDetails.data.result;

    const data = {
      ...placeResult,
      // === Mocked Data ===
      // google api does not send imageUrls by default
      // + Places don't have attached Menu
      photoUrls: placePhotoUrls,
      menu: placeMenu,
    };

    return {
      props: {
        data,
      },
    };
  } catch (error) {
    console.error('Failed to get Place Details', error);
    throw error;
  }
};

const RestaurantPage = ({
  data,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  console.log('DATA on frontend', data);

  return (
    <div className='flex h-screen w-screen flex-col py-4 bg-gray-100 overflow-auto'>
      <div className='container w-full max-w-3xl h-full mx-auto mt-4 flex flex-col'>
        <div className='flex justify-between items-center gap-5'>
          {/* Go back button */}
          <Link href='/'>
            <button className='btn btn-outline'>
              <BiArrowBack />
            </button>
          </Link>

          {/* Restaurant name */}
          <h2 className='flex-1 text-4xl font-bold text-center'>{data.name}</h2>
        </div>

        <SectionDivider />

        <PlacePhotoCarousel photoUrls={data.photoUrls} />

        <SectionDivider />

        <h4 className='text-lg font-bold'>Address:</h4>
        <p>{data.formatted_address}</p>

        <SectionDivider />

        <section className='flex'>
          <div className='w-3/4'>
            <h4 className='text-lg font-bold'>Opening hours:</h4>
            <div className='rounded-xl p-4 border shadow-md bg-gray-50'>
              {data.opening_hours?.weekday_text?.map((dayText, idx) => (
                <div key={idx} className='text-xl'>
                  {dayText}
                </div>
              ))}
            </div>
          </div>

          <div className='w-1/4 flex text-5xl justify-end text-end'>
            <AiFillStar className='text-3xl text-yellow-500' />
            {data.rating}
          </div>
        </section>

        <SectionDivider />

        <section>
          <h4 className='text-lg font-bold'>Menu:</h4>
          <PlaceMenu menu={data.menu} />
        </section>

        <SectionDivider />

        {/* Review Form */}
        <section>
          <h4 className='text-lg font-bold'>Leave review:</h4>
          <PlaceReviewForm />
        </section>

        <SectionDivider />

        {/* User Reviews */}
        <section>
          <h4 className='text-lg font-bold'>Reviews:</h4>
          <div className='w-full rounded-xl bg-gray-50 shadow-md'>
            {data.reviews?.map((review, idx) => {
              return (
                <div key={idx} className='card card-side bg-base-100 flex p-2'>
                  <figure className='w-1/6'>
                    <FaUserAlt className='text-2xl' />
                  </figure>
                  <div className='card-body w-5/6'>
                    <h2 className='card-title text-lg'>{review.text}</h2>
                    <p className='flex'>
                      rating: {review.rating}{' '}
                      <AiFillStar className='text-xl text-yellow-500' />
                    </p>

                    <p className='text-sm'>
                      {review.relative_time_description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        <SectionDivider />
      </div>
    </div>
  );
};

const SectionDivider = () => <div className='py-4'></div>;

export default RestaurantPage;
