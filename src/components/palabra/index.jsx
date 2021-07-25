import React from "react";
import { selectActiveWord } from "../../store/palabra/reducer";
import { connect } from "react-redux";

const Palabra = ({ palabra }) => <>{palabra}</>;

const mapStateToProps = (state) => {
  return {
    palabra: selectActiveWord(state)
  };
};

export default connect(mapStateToProps, null)(Palabra);
