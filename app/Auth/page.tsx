"use client";

import { useEffect, useState } from "react";
import LoginSetNumber from "./LoginSetNumber";
import {
  useGetOtpMutation,
  useRegisterMutation,
} from "@/redux/services/authentication";
import LoginSetOtp from "./LoginRegisterOtp";
import { useRouter } from "next/navigation";

const Login = () => {
  const [situation, setSituation] = useState<"inputNumber" | "registerOtp">(
    "inputNumber"
  );
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const [setGetOtpTrigger, { data: otpData, error: otpError }] =
    useGetOtpMutation();

  const [setRegisterOtpTrigger, { data: registerOtp, error: registerError }] =
    useRegisterMutation();

  const situationType = {
    inputNumber: {
      component: <LoginSetNumber {...{ setGetOtpTrigger, setPhoneNumber }} />,
    },
    registerOtp: {
      component: <LoginSetOtp {...{ setRegisterOtpTrigger, phoneNumber }} />,
    },
  };
  let token: string | undefined = "";
  if (typeof window !== "undefined") {
    token = document.cookie
      .split("; ")
      .find((row) => row.startsWith("jwt="))
      ?.split("=")[1];
  }
  const router = useRouter();

  useEffect(() => {
    if (otpData) {
      setSituation("registerOtp");
    }
  }, [otpData]);

  if (token && typeof window !== "undefined") {
    router.push("/");
  }

  return (
    <main>
      <h4>login</h4>
      {situationType[situation]?.component}
    </main>
  );
};

export default Login;
