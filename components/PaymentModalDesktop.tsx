import Image from "next/image";
import { useState } from "react";
import { QRCode } from "react-qrcode-logo";

// Just shows the modal and nothing else
// All other logic are in the parent component
export default function PaymentModalDesktop(props: any) {
  const [amount, setAmount] = useState(`50`);
  const validateAmount = () => {
    if (amount == "") setAmount(`50`);
    if (parseInt(amount) < 50) setAmount(`50`);
    console.log("Amount Validated. Amount Should be between 50 and 5000");
  };

  return (
    <div>
      <div className="absolute modal_position bg-gray-400/60 z-50 ">
        <div className="bg-brown4 pt-3 pb-5 px-3 rounded-2xl w-full h-fit md:w-1/2">
          <div className="flex items-end justify-end">
            <a
              className="text-black hover:bg-yellow-100 hover:scale-105 hover:cursor-pointer transition-all shadow-md rounded-xl p-1 mb-2"
              onClick={props.handleModal}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </a>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              validateAmount();
            }}
            className="flex flex-col py-3 px-5 space-y-1"
          >
            <div className="flex flex-row space-x-2">
              {/* <input
                type="email"
                placeholder="Email Id"
                className="text-brown4 mx-auto custom_input w-3/5 bg-brown1"
              /> */}
              <input
                type="number"
                placeholder="Amount (INR)"
                className="text-brown4 mx-auto custom_input w-3/5 bg-brown1"
                step={10}
                min={0}
                onChange={(e) => {
                  setAmount(Math.abs(parseInt(e.target.value)).toString());
                }}
                value={amount}
              />
            </div>

            <div className="mx-auto pb-2">
              <div className="shadow-lg">
                <QRCode
                  value={`upi://pay?pa=${process.env.NEXT_PUBLIC_PAYEE_VPA}&pn=${
                    process.env.NEXT_PUBLIC_PAYEE_NAME
                  }&tn=${process.env.NEXT_PUBLIC_TXN_NOTE}&mam=${
                    process.env.NEXT_PUBLIC_MIN_AMOUNT
                  }&am=${parseInt(amount)}&cu=INR`}
                  size={128}
                />
              </div>
            </div>
            <div className="flex justify-around">
              <button
                className="modal_button hover:bg-yellow-500"
                onClick={props.handleModal}
              >
                cancel
              </button>
              <button className="modal_button hover:bg-green-500">
                Validate
              </button>
            </div>
          </form>
          <p className="text-brown2 text-xs text-center">
            NOTE: After validating amount, scan the QR Code and Complete the
            Payment in Your UPI app.
          </p>
          <p className="text-brown2 text-xs text-center">
            NOTE: Min Donation Amount = RS 50/-, Max Donation Amount = RS 5000/-
          </p>
        </div>
      </div>
    </div>
  );
}
