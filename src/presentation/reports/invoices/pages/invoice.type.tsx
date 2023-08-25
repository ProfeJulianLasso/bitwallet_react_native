import {StackScreenProps} from '@react-navigation/stack';
import {PaymentHistoryRouteParams} from '@routes';

export type InvoicePageProps = StackScreenProps<
  PaymentHistoryRouteParams,
  'PaymentDetailPage'
>;
