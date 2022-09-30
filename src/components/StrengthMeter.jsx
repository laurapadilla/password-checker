import zxcvbn from "zxcvbn";
import { StregthSection, Meter, MeterBar } from "./styles";

export const StrengthMeter = ({ password }) => {
  const testResult = zxcvbn(password);

  const num = (testResult.score * 100) / 4;
  const progressColor = () => {
    switch (testResult.score) {
      case 0:
        return "#ddd";
      case 1:
        return "#ea1111";
      case 2:
        return "#ffad00";
      case 3:
        return "#9bc158";
      case 4:
        return "#00b500";
      default:
        return "none";
    }
  };

  const passwordLabel = () => {
    switch (testResult.score) {
      case 0:
        return "Very Weak";
      case 1:
        return "Weak";
      case 2:
        return "Okay";
      case 3:
        return "Good";
      case 4:
        return "Strong";
      default:
        return "";
    }
  };

  const changePasswordColor = () => ({
    background: progressColor(),
    width: `${num}%`
  });

  return (
    <StregthSection>
      <section>
        <h4>Strength</h4>
        <p>{passwordLabel()}</p>
      </section>
      <Meter>
        <MeterBar style={changePasswordColor()}></MeterBar>
      </Meter>
    </StregthSection>
  );
};
