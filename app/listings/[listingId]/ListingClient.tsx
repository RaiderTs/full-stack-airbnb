import { SafeListing, SafeUser } from '@/app/types';
import { Reservation } from '@prisma/client';
import { FC } from 'react';

interface ListingClientProps {
  reservation?: Reservation[];
  listing: any
  // listing: SafeListing & {
  //   user: SafeUser;
  // };
  currentUser?: SafeUser | null;
}

const ListingClient: FC<ListingClientProps> = ({ listing, currentUser }) => {
  return <div>ListingClient</div>;
};

export default ListingClient;
// 5:54