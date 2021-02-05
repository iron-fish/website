import React from "react";
import JobLayout, { JobLayoutSection } from "./components/JobLayout";

function JDBackend() {
  return (
    <JobLayout locationJob="SF/Remote" title="Backend Engineer">
      <p>
        Backend Engineers at Iron Fish work cross-functionally—collaborating
        with designers, leadership, and other engineers to design features and
        break down high-level goals into tasks and timelines. This role is
        perfect for someone excited to work on uncharted territory in
        decentralized networks and cutting edge cryptography.
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
          <li>Web and/or Electron application development</li>
          <li>P2P application development</li>
          <li>Security</li>
        </ul>
      </JobLayoutSection>
      <JobLayoutSection title="Nice to haves">
        <ul>
          <li>
            You have experience with Blockchains (such as Bitcoin, Ethereum,
            etc..)
          </li>
          <li>You’ve worked with Electron, Rust, Kubernetes, Indexdb</li>
          <li>
            You are interested in world economies or what it takes to build a
            global currency
          </li>
        </ul>
      </JobLayoutSection>
    </JobLayout>
  );
}

export default JDBackend;
