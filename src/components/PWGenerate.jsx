import { useState } from "react";
import { PWContainer, PWReqs, Button, Message, PWField } from "./styles";
import { StrengthMeter } from "./StrengthMeter";
import { FiEye, FiEyeOff } from "react-icons/fi";

export const PWGenerate = () => {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(false);
  const [containsNumbers, setContainsNumbers] = useState(false);
  const [isUppercase, setIsUppercase] = useState(false);
  const [containsSymbols, setContainsSymbols] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  // check for numbers
  const checkNumbers = (string) => {
    const matches = string.match(/\d+/g);
    setContainsNumbers(matches !== null ? true : false);
  };

  // check for uppercase
  const checkUppercase = (string) => {
    const matches = string.match(/[A-Z]/);
    setIsUppercase(matches !== null ? true : false);
  };

  // check for symbols
  const checkSymbols = (string) => {
    const symbols = new RegExp(/[^A-Z a-z0-9]/);
    setContainsSymbols(symbols.test(string) ? true : false);
  };

  const handleChange = (e) => {
    let passwordValue = e.target.value;
    checkNumbers(passwordValue);
    checkUppercase(passwordValue);
    checkSymbols(passwordValue);

    setPassword(passwordValue);
    setPasswordLength(passwordValue.length > 7 ? true : false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowMessage(true);
  };

  const resetForm = () => {
    setShowMessage(false);
    setPassword("");
    setPasswordLength(false);
    setIsUppercase(false);
    setContainsNumbers(false);
    setContainsSymbols(false);
  };

  const buttonStatus =
    passwordLength && containsNumbers && containsSymbols && isUppercase
      ? false
      : true;

  return (
    <>
      <PWContainer>
        <h3>Password Checker</h3>
        <section>
          {showMessage ? (
            <>
              <Message>Thanks for the password!</Message>
              <Button onClick={resetForm}>Take me back</Button>
            </>
          ) : (
            <form onSubmit={handleSubmit}>
              <PWField>
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Enter password"
                  value={password}
                  onChange={handleChange}
                />
                <button
                  onClick={(e) => {
                    e.preventDefault();
                    setShowPassword(!showPassword);
                  }}
                >
                  {showPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </PWField>
              <PWReqs>
                <p className={passwordLength ? "success" : null}>
                  contains 8 chars
                </p>
                <p className={containsNumbers ? "success" : null}>
                  contains at least 1 number
                </p>
                <p className={isUppercase ? "success" : null}>
                  contains uppercase
                </p>
                <p className={containsSymbols ? "success" : null}>
                  contains at least 1 symbol
                </p>
              </PWReqs>
              <StrengthMeter password={password} />
              <Button
                onClick={handleSubmit}
                type="submit"
                disabled={buttonStatus}
              >
                Submit Password
              </Button>
            </form>
          )}
        </section>
      </PWContainer>
    </>
  );
};
