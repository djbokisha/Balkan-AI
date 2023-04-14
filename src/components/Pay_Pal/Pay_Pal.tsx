import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Pay_Pal.css";
import Axios from "axios";
import Footer from "../Footer/Footer";

function Pay_Pal() {
  const initialOptions = {
    "client-id": import.meta.env.VITE_CLIENT_ID_PAYPAL,
    currency: "EUR",
    intent: "capture",
  };
  return (
    <>
      {" "}
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
              console.log(email);

              if (status === "COMPLETED") {
                Axios.patch(
                  `${import.meta.env.VITE_URL}/tokens/addTokens`,
                  null,
                  {
                    params: {
                      email: email,
                    },
                  }
                )
                  .then((res) => {
                    console.log("aa", res);
                  })
                  .catch((err) => {
                    console.log(err);
                    console.error();
                  });
              }
              Axios.post(`${import.meta.env.VITE_URL}/users`, {
                payments: payments,
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
      <Footer />
    </>
  );
}

export default Pay_Pal;
