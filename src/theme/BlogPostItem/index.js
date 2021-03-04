/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from "react";
import clsx from "clsx";
import { MDXProvider } from "@mdx-js/react";
import Head from "@docusaurus/Head";
import Link from "@docusaurus/Link";
import MDXComponents from "@theme/MDXComponents";
import useBaseUrl from "@docusaurus/useBaseUrl";
import styles from "./styles.module.css";
const MONTHS = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function BlogPostItem(props) {
  const {
    children,
    frontMatter,
    metadata,
    truncated,
    isBlogPostPage = false,
  } = props;
  const { date, permalink, tags, readingTime } = metadata;
  const { author, title, image, keywords } = frontMatter;
  const authorURL = frontMatter.author_url || frontMatter.authorURL;
  const authorTitle = frontMatter.author_title || frontMatter.authorTitle;
  const authorDescription =
    frontMatter.author_description || frontMatter.authorDescription;
  const authorImageURL =
    frontMatter.author_image_url || frontMatter.authorImageURL;
  const imageUrl = useBaseUrl(image);
  const renderPostHeader = () => {
    const TitleHeading = isBlogPostPage ? "h1" : "h2";
    const match = date.substring(0, 10).split("-");
    const year = match[0];
    const month = MONTHS[parseInt(match[1], 10) - 1];
    const day = parseInt(match[2], 10);
    return (
      <header>
        <TitleHeading
          className={clsx("margin-bottom--sm", styles.blogPostTitle)}
        >
          {isBlogPostPage ? title : <Link to={permalink}>{title}</Link>}
        </TitleHeading>
        <div className={clsx("avatar margin-vert--md", styles.author)}>
          {authorImageURL && (
            <a
              className="avatar__photo-link avatar__photo"
              href={authorURL}
              target="_blank"
              rel="noreferrer noopener"
            >
              <img src={authorImageURL} alt={author} />
            </a>
          )}
          <div className="avatar__intro">
            {author && (
              <>
                <h4 className="avatar__name">
                  <a href={authorURL} target="_blank" rel="noreferrer noopener">
                    {author}
                  </a>
                </h4>
                <small className="avatar__subtitle">{authorTitle}</small>
              </>
            )}
          </div>
        </div>
      </header>
    );
  };

  return (
    <div
      className={clsx({
        [styles.blogArticle]: isBlogPostPage,
      })}
    >
      <Head>
        {keywords && keywords.length && (
          <meta name="keywords" content={keywords.join(",")} />
        )}
        {image && <meta property="og:image" content={imageUrl} />}
        {image && <meta property="twitter:image" content={imageUrl} />}
        {image && (
          <meta name="twitter:image:alt" content={`Image for ${title}`} />
        )}
      </Head>

      <article
        className={clsx({
          "margin-bottom--xl": !isBlogPostPage,
        })}
      >
        {renderPostHeader()}
        {image && (
          <div
            className={clsx(styles.image)}
            style={{ backgroundImage: `url(${imageUrl})` }}
          />
        )}

        {isBlogPostPage && (
          <section className="markdown">
            <MDXProvider components={MDXComponents}>{children}</MDXProvider>
          </section>
        )}

        {isBlogPostPage && authorDescription && (
          <div className={clsx(styles.authorStory)}>
            {authorImageURL && (
              <a
                className={clsx(
                  styles.avatarPhoto,
                  "avatar__photo-link avatar__photo"
                )}
                href={authorURL}
                target="_blank"
                rel="noreferrer noopener"
              >
                <img src={authorImageURL} alt={author} />
              </a>
            )}
            <div className="avatar__intro">
              {author && (
                <>
                  <p>Written by</p>
                  <h4 className="avatar__name">
                    <a
                      href={authorURL}
                      target="_blank"
                      rel="noreferrer noopener"
                    >
                      {author}
                    </a>
                  </h4>
                  <p>{authorDescription}</p>
                </>
              )}
            </div>
          </div>
        )}

        {(tags.length > 0 || truncated) && (
          <footer className="row margin-vert--lg">
            {truncated && (
              <div className="col text--right">
                <Link
                  to={metadata.permalink}
                  aria-label={`Read more about ${title}`}
                >
                  <strong>Read More</strong>
                </Link>
              </div>
            )}
          </footer>
        )}
      </article>
    </div>
  );
}

export default BlogPostItem;