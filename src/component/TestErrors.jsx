import React, { useState } from "react";

const TestErrors = ({ errors }) => {
  const [errorsForm, setErrorForms] = useState({});
  

  const handleErrors = () => {
    console.log(errors)
    // setErrorForms(errors);
    // console.log(errorsForm);
  };

  return (
    <>
      {/* {errors && <p style={{ color: "red" }}>{errors.message}</p>} */}
      {errors.newFile && <p style={{ color: "red" }}>{errors.errUserName}</p>}
      {errors.errUserName && <p style={{ color: "red" }}>{errors.errUserName}</p>}
      {errors.errEmail && <p style={{ color: "red" }}>{errors.errEmail}</p>}
      {errors.errPassword && <p style={{ color: "red" }}>{errors.errPassword}</p>}
      <button onClick={handleErrors}>cek errorr</button>
    </>
  );
};

export default TestErrors;
