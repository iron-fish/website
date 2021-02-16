import React from "react";
import JobLayout, { JobLayoutSection } from "../theme/components/JobLayout";

function JDMobile() {
  return (
    <JobLayout locationJob="SF/Remote" title="Senior / Staff Mobile Engineer">
      <p>
        Senior Mobile Engineers at Iron Fish own the infrastructure of our
        mobile apps. This role is perfect for a self-starter who is excited to
        work on uncharted territory in decentralized computing and cutting edge
        cryptography.
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
            You’ve designed, built, scaled, and maintained production
            applications
          </li>
          <li>
            Demonstrated fluency with at least one of the following languages:
            Swift, Objective-C, Android, Kotlin, or React Native
          </li>
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

export default JDMobile;
