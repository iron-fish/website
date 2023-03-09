import React from "react";

/**
 * Renders JS in a way that preserves indentation.
 */
function JsDisplay({ js }) {

  return (
    <pre>
      {js}
    </pre>
  );
}

export default JsDisplay;
