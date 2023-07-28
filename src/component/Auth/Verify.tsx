import React, { useState, useEffect } from "react";
import axios from "axios";
import { useRouter } from "next/router";

const Verify = () => {
  const [params, setParams] = useState("");
  const [data, setData] = useState("");
  const [verificationMessage, setverificationMessage] = useState("");

  const router = useRouter();
  const url =
    "https://rymistc0jk.execute-api.us-east-1.amazonaws.com/dev/subscription/verify";

  useEffect(() => {
    const { reference } = router.query;

    async function verifyPayment(args: string) {
      await axios
        .get(`${url}/${reference}`)
        .then((response) => {
            console.log("VERIFY SUBSCRIPTION :", response.data)
          if (response.data.status === 200) {
            setverificationMessage(response.data.message);
            setData(response.data.data.data.data);
          }
        })
        .catch((err) =>  new Error(err));
    }
    verifyPayment(reference as string);
  }, [router.query]);

  return (
    <div style={{ display: "grid", placeItems: "center" }}>
      
      <p>Verification successfull</p>
      {
        window.setTimeout(() => {
          window.location.href = '/login'
        }, 5000)
      }

    </div>
  );
};

export default Verify;
