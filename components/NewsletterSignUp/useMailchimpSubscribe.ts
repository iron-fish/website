import { SetStateAction, useState } from "react";
import jsonp from "jsonp";

export const MAILCHIMP_MESSAGES = {
  EMAIL_ERROR: "Please provide a valid email address.",
  SUBMITTING: "Submitting...",
  ERROR: "Something went wrong, please try again.",
  DUPLICATE: "You are already subscribed.",
  SUCCESS: "Success!",
} as const;

export function useMailchimpSubscribe() {
  type SubscribeStatus =
    | "IDLE"
    | "EMAIL_ERROR"
    | "SUBMITTING"
    | "ERROR"
    | "DUPLICATE"
    | "SUCCESS";
  const [status, setStatus] = useState<SubscribeStatus>("IDLE");
  const [email, setEmail] = useState("");

  function subscribe() {
    const regex = /^([\w_.\-+])+@([\w-]+\.)+([\w]{2,10})+$/;
    if (!regex.test(email)) {
      setStatus("EMAIL_ERROR");
      return;
    }

    setStatus("SUBMITTING");

    jsonp(
      `https://network.us20.list-manage.com/subscribe/post-json?u=faf0318a641ddbad058a4ad2f&id=25c9feb0f4&EMAIL=${encodeURIComponent(
        email
      )}`,
      { param: "c", timeout: 4000 },
      (err, data) => {
        if (!data || !data.msg) {
          setStatus("ERROR");
        } else if (data.msg.includes("already subscribed")) {
          setStatus("DUPLICATE");
        } else if (data.msg.includes("has too many recent signup requests")) {
          setStatus("DUPLICATE");
        } else if (err || data.result !== "success") {
          setStatus("ERROR");
        } else {
          setStatus("SUCCESS");
        }
      }
    );
  }

  return {
    subscribe,
    status,
    handleEmailChange: (e: { target: { value: SetStateAction<string> } }) =>
      setEmail(e.target.value),
  };
}
