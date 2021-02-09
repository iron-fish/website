import React from "react";
import JobLayout, { JobLayoutSection } from "./components/JobLayout";

function JDCrypto() {
  return (
    <JobLayout locationJob="SF/Remote" title="Cryptographer">
      <p>
        Cryptographers at Iron Fish are specialized in practical and secure
        cryptographic protocols for blockchains. You will work to
        design, develop, and prove new and secure cryptographic protocols for
        a distributed system.
      </p>
      <JobLayoutSection title="Why Iron Fish?">
        <p>
          We promise you will be challenged, and always learning. This project
          involves distributed systems, some heavy-duty cryptography, UI/UX
          challenges of simplifying complex information, and more. You will
          build tools that help bring equality to the global economy, so that
          everyone has access to complete financial sovereignty. We value
          kindness, curiosity, and the willingness to learn and to teach.
        </p>
      </JobLayoutSection>
      <JobLayoutSection title="What you’ll do">
        <p>
          As an engineer in a fast growing company, the day-to-day may vary. But
          here is some of what you can expect to do:
        </p>
        <ul>
          <li>
            Build, document and maintain tests, features, and infrastructure
          </li>
          <li>
            Communicate and document architectural designs and requirements
          </li>
          <li>
            Write high quality, well-tested code to meet the needs of your
            customers
          </li>
        </ul>
      </JobLayoutSection>
      <JobLayoutSection title="What we are looking for">
        <p>
          Below are just some examples of what your background may look like—go
          ahead and apply even if your experience is a little different.
        </p>
        <ul>
          <li>
            Written production-level code in Node, React, JavaScript,
            TypeScript, or Rust
          </li>
          <li>Worked in at least one of our focus areas:</li>
          <li>Cryptocurrency architecture development</li>
          <li>Security</li>
        </ul>
      </JobLayoutSection>
      <JobLayoutSection title="Nice to haves">
        <ul>
          <li>
            You have experience with Blockchains (such as Bitcoin, Ethereum,
            etc..)
          </li>
          <li>You’ve worked on zk-SNARKs or zero knowledge cryptography</li>
          <li>
            You are interested in world economies or what it takes to build a
            global currency
          </li>
        </ul>
      </JobLayoutSection>
    </JobLayout>
  );
}

export default JDCrypto;
