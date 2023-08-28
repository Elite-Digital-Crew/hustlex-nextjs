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
      <div className={styles.left}>
        <div>
          <i>
            <h1>Get the App</h1>
          </i>
          <p className="mt-3 tracking-wide">
            join our open beta program and get early access to Hustlex,
            exclusive perks and more cool stuff.
          </p>
        </div>
        <div className={styles.download}>
          <div>
            <Image
              width={100}
              height={100}
              src="/QR.png"
              alt="Playstore Link"
            />
          </div>
          <a href="https://play.google.com/store/apps/details?id=com.hustlex.mvp">
            <Image
              width={100}
              height={100}
              src="/playstore-icon.png"
              alt="Playstore Link"
            />
          </a>
        </div>
      </div>
      <div className={styles.mockup}>
        <img src="/UI-MOCKUP-1.png" alt="mockup" />
      </div>
    </div>
  );
});
