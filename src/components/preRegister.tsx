import { useToast } from "@chakra-ui/react";
import Image from "next/image";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  PlusCircleIcon,
} from "@heroicons/react/outline";
import React, {
  FC,
  ForwardedRef,
  forwardRef,
  MutableRefObject,
  Ref,
  RefObject,
  useState,
} from "react";
import { client } from "../../pages/_app";
import {
  PRE_REGISTER_QUERY,
  PRE_REGISTER_QUERY_RESULT,
} from "../../queries/preRegister.query";

import styles from "../../styles/PreRegister.module.css";

export const PreRegister = forwardRef<HTMLInputElement>((_, ref) => {
  const [loading, setLoading] = useState<boolean>();
  const [email, setEmail] = useState<string>();

  const toast = useToast();

  const preRegister = async () => {
    if (email == null || !email.includes("@") || !email.includes(".")) {
      toast({
        title: "Invalid Email",
        description: "Please enter a valid email.",
        status: "error",
      });

      return;
    }

    setLoading(true);
    const res = client.query<PRE_REGISTER_QUERY_RESULT>({
      query: PRE_REGISTER_QUERY,
      variables: {
        email,
      },
    });

    await res
      .then(() =>
        toast({
          title: "Congratulations",
          description: "You are now on the BETA waitlist!",
          status: "success",
        })
      )
      .catch(({ message }) => {
        toast({
          title: "Error",
          description: message,
          status: "error",
        });
      })
      .finally(() => setLoading(false));
  };

  return (
    <div ref={ref} className={styles.container} id="join">
      <div className={styles.imageContainer}>
        <Image
          src="/register-bg.png"
          alt="register-bg"
          // 100% width and height
          width={500}
          height={500}
        />
      </div>
      <div className={styles.subContainer}>
        <h1>A World Awaits</h1>
        <p>
          Great things take time. join the waitlist to get access to the best
          fitness experice ever created.
        </p>
        <input type="text" />
        <button>
          <h2>Join Waitlist</h2>
        </button>
      </div>
    </div>
  );
});
