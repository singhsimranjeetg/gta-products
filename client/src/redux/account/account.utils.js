import { firestore } from '../../firebase/firebase.utils';

export const createNewOrder = async (currentUser, lineItems, orderDetails) => {
  const orderRef = firestore.collection(`orders`).doc();
  var orderId = Math.floor(100000 + Math.random() * 9000);
  const createdAt = new Date();
  try {
    await orderRef.set({
      userId: currentUser.id,
      orderId,
      lineItems,
      orderDetails,
      createdAt
    });
  } catch (error) {
    console.log('error creating the order doc', error.message);
  }
  return orderRef;
};

export const getUserOrdersRef = async (userId) => {
  const ordersRef = firestore.collection('orders').where('userId', '==', userId);
  const snapShot = await ordersRef.get();
  return snapShot.docs[0].ref;
};
