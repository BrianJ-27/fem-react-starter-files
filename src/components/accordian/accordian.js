import React from "react";
import styled from "styled-components";

const Accordian = styled.section`
  details > summary {
    list-style: none;
  }

  summary::-webkit-details-marker {
    display: none;
  }

  summary::after {
    content: " ►";
  }
  details[open] summary:after {
    content: " ▼";
  }
`;

const CustomAccordian = () => {
  return (
    <Accordian class="accordian">
      <h3>Title of My Accordion</h3>
      <details>
        <summary class="accordion__title">Section 1</summary>
        <p class="accordion__copy">This is section 1</p>
      </details>
      <details>
        <summary class="accordion__title">Section 2</summary>
        <p class="accordion__copy">This is section 2</p>
      </details>
      <details>
        <summary class="accordion__title">Section 3</summary>
        <p class="accordion__copy">This is section 3</p>
      </details>
    </Accordian>
  );
};

export default CustomAccordian;
