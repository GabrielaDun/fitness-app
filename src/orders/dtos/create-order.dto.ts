export class OrderItemDTO {
  id: string;
  description: string;
  quantity: number;
  orderId: string;
  tourId: string;
}

export class CreateOrderDTO {
  firstName: string;
  surname: string;
  address: string;
  city: string;
  country: string;
  email: string;
  downPayment: number;

  orderItems: OrderItemDTO[];
}
