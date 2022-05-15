import React from "react";
import styled from "styled-components";

const Tabs = styled.div``;

const CustomTabs = () => {
  return (
    <Tabs class="tabs">
      <ul class="tabs__list" role="tablist">
        <li class="tabs__item" role="presentation">
          <a
            href="#A"
            class="tabs__link"
            id="tab-A"
            role="tab"
            aria-controls="A"
            aria-selected="true"
            tabindex="0"
          >
            Section A
          </a>
        </li>
        <li class="tabs__item" role="presentation">
          <a
            href="#B"
            class="tabs__link"
            id="tab-B"
            role="tab"
            aria-controls="B"
            aria-selected="false"
            tabindex="-1"
          >
            Section B
          </a>
        </li>
        <li class="tabs__item" role="presentation">
          <a
            href="#C"
            class="tabs__link"
            id="tab-C"
            role="tab"
            aria-controls="C"
            aria-selected="false"
            tabindex="-1"
          >
            Section C
          </a>
        </li>
      </ul>

      <section
        id="A"
        class="tabs__section"
        role="tabpanel"
        aria-labelledby="tab-A"
        aria-hidden="false"
      >
        <div class="tabs__body">
          {" "}
          Content of section A
          <br />
          This is an accessible implementation for a tab-list. Needed JS and
          documentation can be found
          <a
            href="https://codepen.io/2kool2/pen/Kzaddm?editors=0100"
            omit=""
            target="_blank"
            rel="noopener noreferrer"
          >
            here
          </a>
          .
        </div>
      </section>

      <section
        id="B"
        class="tabs__section"
        role="tabpanel"
        aria-labelledby="tab-B"
        aria-hidden="true"
      >
        <div class="tabs__body"> Content of section B </div>
      </section>

      <section
        id="C"
        class="tabs__section"
        role="tabpanel"
        aria-labelledby="tab-C"
        aria-hidden="true"
      >
        <div class="tabs__body"> Content of section C </div>
      </section>
    </Tabs>
  );
};

export default CustomTabs;
