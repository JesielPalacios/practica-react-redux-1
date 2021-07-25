import React, { useRef } from "react";
import { updateWord } from "../../store/palabra/action";
import { connect } from "react-redux";

const Form = ({ updateWord }) => {
  const palabraRef = useRef(null);
  return (
    <>
      <input type="text" ref={palabraRef} />
      <button
        onClick={() => {
          updateWord(palabraRef.current.value);
        }}
      >
        Guardar en la store
      </button>
    </>
  );
};

export default connect(null, { updateWord })(Form);

// import React, { useRef } from "react";
// import { updateWord } from "../../store/palabra/action";
// import { connect } from "react-redux";

// const Form = ({ updateWord }) => {
//   const inputEl = useRef(null);
//   const onButtonClick = () => {
//     updateWord(inputEl.current.value);
//   };
//   return (
//     <>
//       <input ref={inputEl} type="text" />
//       <button onClick={onButtonClick}>Focus the input</button>
//     </>
//   );
// };

// export default connect(null, { updateWord })(Form);
