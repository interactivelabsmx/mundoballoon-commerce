import { useAddItemToCartMutation } from '@providers/graphql/AddItemToCart.graphql';
import { useDeleteUserCartProductMutation } from '@providers/graphql/DeleteUserCartProduct.graphql';
import { GetUserCartDocument } from '@providers/graphql/GetUserCart.graphql';
import type { UserCartProductFragment } from '@providers/graphql/GetUserCart.graphql';
import { useSubtractItemToCartMutation } from '@providers/graphql/SubtractItemToCart.graphql';

const useAddRemoveCartItems = () => {
  const [
    addItemToCart,
    { loading: loadingAdd, data: dataAdd, error: errorAdd },
  ] = useAddItemToCartMutation();
  const [
    subtractItemToCart,
    { loading: loadingSubtract, data: dataSubtract, error: errorSubtract },
  ] = useSubtractItemToCartMutation();
  const [
    removeItemToCart,
    { loading: loadingRemove, data: dataRemove, error: errorRemove },
  ] = useDeleteUserCartProductMutation();

  const data = dataAdd || dataSubtract || dataRemove;
  const error = errorAdd || errorSubtract || errorRemove;
  const loading = loadingAdd || loadingSubtract || loadingRemove;

  const onAdd = (product: UserCartProductFragment) =>
    addItemToCart({
      variables: { sku: product.variant?.sku || '' },
      refetchQueries: [{ query: GetUserCartDocument }],
    });

  const onSubtract = (product: UserCartProductFragment) =>
    subtractItemToCart({
      variables: { sku: product.variant?.sku || '' },
      refetchQueries: [{ query: GetUserCartDocument }],
    });

  const onRemove = (product: UserCartProductFragment) =>
    removeItemToCart({
      variables: { sku: product.variant?.sku || '' },
      refetchQueries: [{ query: GetUserCartDocument }],
    });

  return { onAdd, onSubtract, onRemove, loading, data, error };
};

export default useAddRemoveCartItems;
