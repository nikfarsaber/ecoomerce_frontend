"use client";

import { useState } from "react";

const LoginSetNumber = ({
  setGetOtpTrigger,
  setPhoneNumber,
}: {
  setGetOtpTrigger: any;
  setPhoneNumber: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [numberValue, setNumberValue] = useState<string>("");
  const [textError, setTextError] = useState<string>("");

  const inputChangeHandler = (value: string) => {
    if (/^([0-9]|[۰-۹])*$/.test(value)) {
      setNumberValue(
        value.replace(/[۰-۹]/g, (d: string): string =>
          "۰۱۲۳۴۵۶۷۸۹".indexOf(d).toString()
        )
      );
      setTextError("");
    }
  };
  const sumbitClickHandler = () => {
    if (numberValue.length !== 11) {
      setTextError("number must be 11 length");
      return;
    }
    if (!/^([0-9]|[۰-۹])*$/.test(numberValue)) {
      setTextError("number must be number");
      return;
    }

    setPhoneNumber(numberValue);
    setGetOtpTrigger({ value: numberValue, type: "cellphone" });
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
        ادامه
      </button>
    </>
  );
};

export default LoginSetNumber;
