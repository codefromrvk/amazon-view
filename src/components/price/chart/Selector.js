import React from "react";
import { format } from "date-fns";

import styled from "styled-components";
const Select = styled.select`
  width: 116px;
  height: 32px;
  color: black;
  padding-left: 5px;
  font-size: 14px;
  border: none;
  margin-left: 10px;
  background: #fece00;
  border: 1px solid #9e8c3c;
  box-sizing: border-box;
  border-radius: 5px;

  option {
    color: black;
    background: white;
    display: flex;
    white-space: pre;
    min-height: 20px;
    padding: 0px 2px 1px;
  }
`;
function Selector() {
  return (
    <div className="App">
      <Select>
        {/* <option value="" hidden>
          Type
        </option> */}
        <option value="1">{format(new Date(),"MMMM")}</option>
      </Select>
    </div>
  );
}

export default Selector;
