import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import "./Pay_Pal.css";

function Pay_Pal() {
  return (
    <div className="paypal">
      <PayPalScriptProvider
        options={{ "client-id": import.meta.env.VITE_CLIENT_ID }}
      >
        <PayPalButtons
          createOrder={(data, actions) => {
            return actions.order.create({
              purchase_units: [
                {
                  amount: {
                    value: "2.00",
                  },
                },
              ],
            });
          }}
          onApprove={async (data, actions) => {
            const details = await actions.order!.capture();
            const name = details.payer.name!.given_name;
            alert("Transaction completed by " + name);
            console.log("Transaction completed by " + name);
          }}
        />
      </PayPalScriptProvider>
    </div>
  );
}

export default Pay_Pal;
