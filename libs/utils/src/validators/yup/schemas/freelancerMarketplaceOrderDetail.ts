import * as y from 'yup';

export const freelancerMarketplaceOrderDetailForm = y.object().shape({
  orderPrice: y
    .number()
    .typeError('Số tiền không hợp lệ')
    .min(50000, 'Ít nhất 50.000đ'),
});
