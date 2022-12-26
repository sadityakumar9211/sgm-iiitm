export default function PaymentModalMobile(props: any) {
  return (
    <a
      className="relative button_class mt-4 md:mt-24 z-30"
      href={`paytmmp://pay?pa=${process.env.NEXT_PUBLIC_PAYEE_VPA}&pn=${process.env.NEXT_PUBLIC_PAYEE_NAME}&tn=${process.env.NEXT_PUBLIC_TXN_NOTE}&mam=${process.env.NEXT_PUBLIC_MIN_AMOUNT}&cu=INR`}
    >
      Donate
    </a>
  );
}
