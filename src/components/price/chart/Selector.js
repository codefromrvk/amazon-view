import React from "react";
import { format } from "date-fns";
import styled from "styled-components";


/**
 * Component to select the date range
 * Eg: Last 30 Days,Last 60 Days etc
 */

const Select = styled.select`
  width: 116px;
  height: 32px;
  color: #4E4C4C;
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

      <Select>
        <option value="1">{format(new Date(),"MMMM")}</option>
      </Select>

  );
}

export default Selector;
