import React from "react";
import Layout from "@theme/Layout";
import Link from "@docusaurus/Link";

import clsx from "clsx";
import styles from "./jobLayout.module.css";
import OpenPositions from "./OpenPositions";

export function JobLayoutSection({ title, children }) {
  return (
    <div>
       <p className={clsx(styles.layoutTitle)}>{title}</p>
       {children}
    </div>
  );
}

function JobLayout({ title, locationJob, children }) {
  return (
    <>
       <Layout>
         <header className={clsx(styles.header, "blue--header")}>
           <div className="blue--header--background" />
           <div className={clsx(styles.containerJob)}>
             <h1 className={clsx(styles.mainTitle)}>
               {title}
               <br />
               {locationJob}
             </h1>
             <Link
               className={clsx(
                 styles.button,
                 "button button--outline button--secondary"
               )}
               to="mailto:joinus@ironfish.network"
             >
               Apply Now
             </Link>
           </div>
         </header>
         <section className={clsx(styles.careersMainSection)}>
           <div className={clsx(styles.containerJob)}>
             <h2 className={clsx(styles.h2)}>About the role</h2>
             {children}
           </div>
         </section>
         <OpenPositions />
       </Layout>
    </>
  );
}

export default JobLayout;
