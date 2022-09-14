import Logo from "../Logo/Logo";
import Subtitle from "../Subtitle/Subtitle";
import PaymentMethodListStyle from "./style/PaymentMethodListStyle";

const PaymentMethodList = () => {
  return (
    <>
      <PaymentMethodListStyle>
        <Subtitle text="Métods de pago" />
        <div>
          <Logo src="/assets/img/mastercard.svg" alt="Mastercard" />
          <Logo src="/assets/img/visa.svg" alt="Visa" />
          <Logo src="/assets/img/applePay.svg" alt="Apple Pay" />
          <Logo src="/assets/img/googlePay.svg" alt="Google Pay" />
        </div>
      </PaymentMethodListStyle>
    </>
  );
};

export default PaymentMethodList;
