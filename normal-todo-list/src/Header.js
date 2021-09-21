import React from "react";

function Header(props) {
  const [textValue, changeTextValue] = React.useState("");
  return (
    <div>
      <input
        type="text"
        value={textValue}
        onChange={(event) => {
          let value = event.target.value;
          changeTextValue(value);
        }}
      />
      <button
        onClick={() => {
          props.clickHandler(textValue);
          // clear the input text;
          changeTextValue("");
        }}
      >
        Add Todo item
      </button>
    </div>
  );
}

export default Header;
