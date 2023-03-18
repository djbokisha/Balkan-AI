import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Pay_Pal.css";
import Axios from "axios";

function Pay_Pal() {
  const initialOptions = {
    "client-id": import.meta.env.VITE_CLIENT_ID_PAYPAL,
    currency: "EUR",
    intent: "capture",
  };
  return (
    <div className="paypal">
      <PayPalScriptProvider options={initialOptions}>
        <PayPalButtons
          className="index"
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "4.00",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order!.capture();
            const name = details.payer.name!.given_name;
            console.log("Transaction completed by " + name);
            console.log(details);
            console.log(details.status);
            const status = details.status;
            const email = details.payer.email_address;
            const payments = details.create_time;
            console.log(payments);

            if (status === "COMPLETED") {
              Axios.patch("http://localhost:5000/tokens/addTokens", null, {
                params: {
                  email: email,
                },
                withCredentials: true,
              })
                .then((res) => {
                  console.log(res);
                })
                .catch((err) => {
                  console.log(err);
                });
            }
            Axios.post("http://localhost:5000/users", {
              payments: [payments],
            })
              .then((res) => {
                console.log(res);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Pay_Pal;
