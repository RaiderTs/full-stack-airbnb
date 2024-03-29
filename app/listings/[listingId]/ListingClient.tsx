'use client';

import { FC, useMemo } from 'react';
import { Reservation } from '@prisma/client';

import { categories } from '@/app/components/navbar/Categories';
import { SafeListing, SafeUser } from '@/app/types';
import Container from '@/app/components/Container';
import ListingHead from '@/app/components/listings/ListingHead';
import ListingInfo from '@/app/components/listings/ListingInfo';

interface ListingClientProps {
  reservation?: Reservation[];
  listing: any;
  // listing: SafeListing & {
  //   user: SafeUser;
  // };
  currentUser?: SafeUser | null;
}

const ListingClient: FC<ListingClientProps> = ({ listing, currentUser }) => {
  const category = useMemo(() => {
    return categories.find((items) => items.label === listing.category);
  }, [listing.category]);

  return (
    <Container>
      <div className='max-w-screen-lg mx-auto'>
        <div className='flex flex-col gap-6'>
          <ListingHead
            title={listing.title}
            imageSrc={listing.imageSrc}
            locationValue={listing.locationValue}
            id={listing.id}
            currentUser={currentUser}
          />
        </div>
        <div className='grid grid-cols-1 md:grid-cols-7 md:gap-10 mt-6'>
          <ListingInfo
            user={listing.user}
            category={category}
            description={listing.description}
            roomCount={listing.roomCount}
            guestCount={listing.guestCount}
            bathroomCount={listing.bathroomCount}
            locationValue={listing.locationValue}
          />
        </div>
      </div>
    </Container>
  );
};

export default ListingClient;
// 5:54
