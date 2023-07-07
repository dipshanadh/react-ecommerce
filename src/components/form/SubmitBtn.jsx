import { useNavigation } from "react-router-dom";

const SubmitBtn = ({ text }) => {
  const navigation = useNavigation();

  if (navigation.state !== "submitting") {
    return (
      <button type="submit" className="btn btn-primary btn-block">
        {text || "Submit"}
      </button>
    );
  }

  return (
    <button type="submit" className="btn btn-primary btn-block" disabled>
      <span className="loading loading-spinner"></span>Sending...
    </button>
  );
};

export default SubmitBtn;
