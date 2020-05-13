import React, { Component } from "react";
import s from "./Description.module.css";

class Description extends Component {
  render() {
    return (
<div className={s.info}>
    Alexsandr Mendeleev
    Age: 33
    Single
    City: Moscow
</div>
    );
  }
}

export default Description;
