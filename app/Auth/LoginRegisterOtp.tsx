import React, { useState } from "react";

const LoginSetOtp = ({
  setRegisterOtpTrigger,
  phoneNumber,
}: {
  setRegisterOtpTrigger: any;
  phoneNumber: string;
}) => {
  const [numberValue, setNumberValue] = useState<string>("");
  const [textError, setTextError] = useState<string>("");

  const inputChangeHandler = (value: string) => {
    if (/^([0-9]|[۰-۹])*$/.test(value) && value.length < 6) {
      setNumberValue(
        value.replace(/[۰-۹]/g, (d: string): string =>
          "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()
        )
      );
      setTextError("");
    }
  };
  const sumbitClickHandler = () => {
    if (!/^([0-9]|[۰-۹])*$/.test(numberValue)) {
      setTextError("number must be number");
      return;
    }
    setRegisterOtpTrigger({
      value: phoneNumber,
      type: "cellphone",
      otpCode: numberValue,
    });
  };
  return (
    <>
      <div>
        <input
          type="text"
          value={numberValue}
          className=" border-red-300 border-2"
          onChange={(e) => {
            inputChangeHandler(e.target.value);
          }}
        />
      </div>
      {textError ? <div className="text-red-600">{textError}</div> : <></>}
      <button
        onClick={() => {
          sumbitClickHandler();
        }}
      >
        تایید
      </button>
    </>
  );
};

export default LoginSetOtp;
