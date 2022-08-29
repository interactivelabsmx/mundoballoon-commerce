import { StarIcon } from '@heroicons/react/24/solid';
import classNames from '@lib/utils/classnames';
import PrimaryLink from '../links/PrimaryLink';

interface IStarsYellow {
  rating: number;
  count: number;
  href: string;
}

const StarsYellow = ({ rating, count, href }: IStarsYellow) => (
  <>
    <h4 className="sr-only">Reviews</h4>
    <div className="flex items-center">
      <div className="flex items-center">
        {[0, 1, 2, 3, 4].map((rtn) => (
          <StarIcon
            key={`${rtn}${href}`}
            className={classNames(
              rating > rtn ? 'text-yellow-400' : 'text-gray-200',
              'h-5 w-5 flex-shrink-0'
            )}
            aria-hidden="true"
          />
        ))}
      </div>
      <p className="sr-only">{rating} out of 5 stars</p>
      <PrimaryLink href={href} className="text-sm ml-2">
        {count} reviews
      </PrimaryLink>
    </div>
  </>
);

export default StarsYellow;
