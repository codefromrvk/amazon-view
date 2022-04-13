
import { format, parseISO } from "date-fns";
import styled from "styled-components";




/**
 * Customized ToolTip for PriceChart
 */

const StyledWrapper = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
background-color: #60608e;
color: white;
padding: 1rem;
span {
  display: block;
  font-size: 0.8rem;
}
p {
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
  padding-top: 0.5rem;
  margin: 0;
}
`;


export function CustomTooltip({ active, payload, label }) {
    if (active) {
      return (
        <StyledWrapper>
          <span>{format(parseISO(label), " d MMM, yyyy")}</span>
          <p>Rs.{payload[0].value} /- </p>
        </StyledWrapper>
      );
    }
    return null;
  }
  
