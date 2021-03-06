import { fork } from 'redux-saga/effects';
import { syncSagas } from 'modules/sync';
import { cryptoSagas } from 'modules/crypto';
import { nodeSagas } from 'modules/node';
import { channelsSagas } from 'modules/channels';
import { accountSagas } from 'modules/account';
import { paymentSagas } from 'modules/payment';
import { ratesSagas } from 'modules/rates';
import { peersSagas } from 'modules/peers';

export default function* rootSaga() {
  yield fork(cryptoSagas);
  yield fork(syncSagas);
  yield fork(nodeSagas);
  yield fork(channelsSagas);
  yield fork(accountSagas);
  yield fork(paymentSagas);
  yield fork(ratesSagas);
  yield fork(peersSagas);
}
