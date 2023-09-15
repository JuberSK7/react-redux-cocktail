import React from "react";

const SpinnerLoading = () => {
  return (
    <>
      <div
        className="d-flex align-items-center justify-content-center"
        style={{ height: "100vh" }}
      >
        <div class="spinner-border " role="status">
          <span class="sr-only"></span>
        </div>
      </div>
    </>
  );
};

export default SpinnerLoading;
