import type { User } from '@firebase/auth';
import useTranslation from 'next-translate/useTranslation';
import { useEffect, useMemo } from 'react';
import PrimarySelectMenu from '@components/UI/SelectMenus/PrimarySelectMenu';
import SimpleTextError from '@components/UI/alerts/SimpleTextError';
import PrimaryButton from '@components/UI/buttons/PrimaryButton';
import LoadingText from '@components/UI/loading/LoadingText';
import { useAuth } from '@providers/AuthProvider';
import { useCommerce } from '@providers/CommerceProvider';
import { GetUserCartDocument } from '@providers/graphql/GetUserCart.graphql';
import type { ProductVariantQuickviewFragment } from '../QuickView/ProductQuickViewFragment.graphql';
import { useGetUserEventsSelectLazyQuery } from './GetUserEventsSelect.graphql';
import type { UserEventSelectFragment } from './UserEventSelectFragment.graphql';

interface IAddToEventCart {
  productVariant: ProductVariantQuickviewFragment;
}

const AddToEventCart = ({ productVariant }: IAddToEventCart) => {
  const { t } = useTranslation('common');
  const { user, openAuthModal } = useAuth();
  const { cart } = useCommerce();
  const [addToCartMutation, { loading: loadingCart, error: errorCart }] =
    cart.useAddItem();
  const [
    addToEventCartMutation,
    { loading: loadingEventCart, error: errorEventCart },
  ] = cart.useAddEventItem();
  const [loadUserEvents, { loading, error, data }] =
    useGetUserEventsSelectLazyQuery();

  useEffect(() => {
    if (user) loadUserEvents();
  }, [user, loadUserEvents]);

  const addToCartData = useMemo(
    () => ({
      quantity: 1,
      sku: productVariant.sku,
      price: productVariant.price,
      productVariantId: productVariant.productVariantId || 0,
    }),
    [productVariant],
  );

  const handleOnAuth = async (authUser: User) => {
    const token = await authUser.getIdToken(true);
    if (authUser && !loadingCart)
      addToCartMutation({
        variables: addToCartData,
        refetchQueries: [{ query: GetUserCartDocument }],
        context: { headers: { authorization: `Bearer ${token}` } },
      });
  };

  const onAddToCart = () => {
    if (user) {
      return addToCartMutation({
        variables: addToCartData,
        refetchQueries: [{ query: GetUserCartDocument }],
      });
    }
    openAuthModal(handleOnAuth);
  };

  const addToEventCart = (event: UserEventSelectFragment) => {
    addToEventCartMutation({
      variables: {
        ...addToCartData,
        userEventId: event.userEventId,
      },
    });
  };

  const onSelectedClick = (event: UserEventSelectFragment) => {
    if (event.userEventId === 0) {
      onAddToCart();
    } else {
      addToEventCart(event);
    }
  };

  if (error) return <SimpleTextError text={error.message} />;
  if (errorCart) return <SimpleTextError text={errorCart.message} />;
  if (errorEventCart) return <SimpleTextError text={errorEventCart.message} />;
  if ((user && (loading || !data)) || loadingCart || loadingEventCart)
    return <LoadingText />;

  const userEvents = data?.userEvents;

  let events;
  if (userEvents) {
    events = [
      {
        userEventId: 0,
        name: 'Add To Bag',
        details: 'Add To Bag',
      },
      ...userEvents,
    ];
  }

  return (
    <div className="mt-4">
      {events ? (
        <PrimarySelectMenu<UserEventSelectFragment>
          label={t('Events')}
          options={events}
          title="name"
          description="details"
          onSelectedClick={onSelectedClick}
        />
      ) : (
        <PrimaryButton
          className="w-full py-4"
          type="button"
          onClick={onAddToCart}
        >
          {t('Add_To_Bag')}
        </PrimaryButton>
      )}
    </div>
  );
};

export default AddToEventCart;
