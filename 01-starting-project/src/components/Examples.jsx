import { EXAMPLES } from "../data";
import TabButton from "../components/TabButton";
import { useState } from "react";
import Sections from "./Sections";

export default function Examples() {
  const [selectedTopic, setSelectedTopic] = useState("");

  function handleSelect(selectedButton) {
    setSelectedTopic(selectedButton);
  }

  let tabContent = <p>Please select a topic</p>;

  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <Sections title='Examples' id="examples">
      <menu>
        <TabButton isSelected={selectedTopic === "components"} onSelect={() => handleSelect("components")}>
          Components
        </TabButton>
        <TabButton isSelected={selectedTopic === "jsx"} onSelect={() => handleSelect("jsx")}>
          JSX
        </TabButton>
        <TabButton isSelected={selectedTopic === "props"} onSelect={() => handleSelect("props")}>
          Props
        </TabButton>
        <TabButton isSelected={selectedTopic === "state"} onSelect={() => handleSelect("state")}>
          State
        </TabButton>
      </menu>
      {/* {!selectedTopic ? <p>Please select a topic</p> : null}
          {selectedTopic ? (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          ) : null} */}

      {/* {!selectedTopic && <p>Please select a topic</p>} */}
      {/* {selectedTopic && (
            <div id="tab-content">
              <h3>{EXAMPLES[selectedTopic].title}</h3>
              <p>{EXAMPLES[selectedTopic].description}</p>
              <pre>
                <code>{EXAMPLES[selectedTopic].code}</code>
              </pre>
            </div>
          )} */}

      {tabContent}
    </Sections>
  );
}
