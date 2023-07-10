import React from "react";

interface Props {
  close: Function;
  // title: string;
}
const AppointmentRemarkForm = ({ close }: Props) => {
  return (
    <div
      style={{
        width: "400px",
        height: "50vh",
        position: "absolute",
        right: 0,
        top: 70,
        boxShadow: " 0 3px 10px rgb(0 0 0 / 0.2)",
        zIndex: 999,
      }}
    >
      <button
        type="button"
        onClick={() => close()}
        style={{
          border: "none",
          backgroundColor: "transparent",
          color: "red",
          padding: 10,
          cursor: "pointer",
        }}
      >
        X
      </button>
      <div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">Patient's name</label>
          <input type="text" name="" id="" title="name" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">Patient's phone number</label>
          <input type="text" name="" id="" title="pnone_number" />
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <label htmlFor="">Remark</label>
          <textarea name="" title="remark"></textarea>
        </div>
      </div>
      <button type="submit">Submit</button>
    </div>
  );
};

export default AppointmentRemarkForm;
