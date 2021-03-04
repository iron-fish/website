/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";

import useDocusaurusContext from "@docusaurus/useDocusaurusContext";
import Layout from "@theme/Layout";
import BlogListPaginator from "@theme/BlogListPaginator";
import Link from "@docusaurus/Link";
import useBaseUrl from "@docusaurus/useBaseUrl";

import styles from "./styles.module.css";

function BlogListPage(props) {
  const { metadata, items } = props;
  const {
    siteConfig: { title: siteTitle },
  } = useDocusaurusContext();
  const isBlogOnlyMode = metadata.permalink === "/";
  const title = isBlogOnlyMode ? siteTitle : "Blog";
  const { blogDescription } = metadata;

  const FeaturedPost = items.shift();
  const { content: FeaturedPostContent } = FeaturedPost;
  const {
    frontMatter: FeaturedPostFormatter,
    metadata: FeaturedPostMetadata,
  } = FeaturedPostContent;
  const {
    image: FeaturedPostImage,
    description: FeaturedPostDescription,
    title: FeaturedPostTitle,
  } = FeaturedPostFormatter;
  const FeaturedPostImageUrl = useBaseUrl(FeaturedPostImage);

  return (
    <Layout title={title} description={blogDescription}>
      <header className={clsx("blue--header")}>
        <div className={clsx(styles.featuredPost)}>
          <div>
            <h1>{FeaturedPostTitle}</h1>
            <p>{FeaturedPostDescription}</p>
            <Link
              className="button button--outline button--secondary"
              to={FeaturedPostMetadata.permalink}
              aria-label={`Read more about ${title}`}
            >
              Read Article
            </Link>
          </div>
          <img
            src={FeaturedPostImageUrl}
            alt={`Image ${FeaturedPostTitle}`}
            role="presentation"
          />
        </div>
      </header>
      <div className={clsx(styles.listPosts)}>
        {items.length > 0 && (
          <p className="main--subtitle">More from the blog</p>
        )}
        <main>
          {items.map(({ content }) => {
            const { frontMatter, metadata } = content;
            const { image, title } = frontMatter;
            const imageUrl = useBaseUrl(image);
            return (
              <div
                className={clsx(styles.post)}
                style={{ backgroundImage: `url(${imageUrl})` }}
                key={metadata.permalink}
              >
                <p>
                  <Link
                    to={metadata.permalink}
                    aria-label={`Read more about ${title}`}
                  >
                    {title}
                  </Link>
                </p>
              </div>
            );
          })}
          <BlogListPaginator metadata={metadata} />
        </main>
      </div>
    </Layout>
  );
}

export default BlogListPage;
