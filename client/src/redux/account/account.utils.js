import { firestore } from '../../firebase/firebase.utils';

export const createNewOrder = async (lineItems, orderDetails) => {
  const orderRef = firestore.collection(`orders`).doc();

  const createdAt = new Date();
  try {
    await orderRef.set({
      lineItems,
      orderDetails,
      createdAt,
    });
  } catch (error) {
    console.log('error creating the order doc', error.message);
  }
  return orderRef;
};
