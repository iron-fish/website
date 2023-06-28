import fsPromises from "node:fs/promises";
import matter from "gray-matter";
import path from "path";
import { Author, authors } from "../content/authors/authors";
import { Feed } from "feed";
import { GetStaticProps } from "next";

type BlogPost = {
  author: Author;
  title: string;
  description: string;
  date: Date;
  slug: string;
};

async function listBlogPosts(): Promise<Array<BlogPost>> {
  const blogPosts = [];

  const postsDir = path.join("content", "blog");
  const postsDirContents = await fsPromises.readdir(postsDir);

  for (const fileName of postsDirContents) {
    const filePath = path.join(postsDir, fileName);
    const content = await fsPromises.readFile(filePath, "utf8");
    const { data } = matter(content);
    blogPosts.push({
      author: authors[data.author],
      title: data.title,
      description: data.description,
      date: new Date(data.date ?? fileName.match(/^\d{4}-\d{2}-\d{2}/)?.[0]),
      slug: fileName.replace(/\.mdx?$/, ""),
    });
  }

  return blogPosts.sort((a, b) => {
    if (a.date < b.date) return 1;
    if (a.date > b.date) return -1;
    if (a.slug < b.slug) return 1;
    if (a.slug > b.slug) return -1;
    return 0;
  });
}

export default async function generateBlogFeeds() {
  const siteUrl = process.env.SITE_URL || "https://ironfish.network";
  const blogPosts = await listBlogPosts();
  const lastUpdate = blogPosts[0]?.date;

  const feedOptions = {
    title: "Iron Fish Blog",
    description:
      "Diving Into Iron Fish — Your gateway to the latest developments and happenings from across the network.",
    id: siteUrl,
    link: siteUrl,
    updated: lastUpdate,
    image: `${siteUrl}/images/logo.svg`,
    favicon: `${siteUrl}/favicon.ico`,
    copyright: `Copyright ${new Date().getFullYear()} Iron Fish`,
    generator: "",
  };

  const feed = new Feed(feedOptions);

  for (const post of blogPosts) {
    feed.addItem({
      id: `${siteUrl}/blog/${post.slug}`,
      link: `${siteUrl}/blog/${post.slug}?utm_source=blog&utm_medium=feed&utm_campaign=feed-syndication`,
      author: [{ name: post.author.name, link: post.author.url }],
      title: post.title,
      description: post.description,
      date: post.date,
    });
  }

  const outDir = path.join("public", "learn", "blog");
  await fsPromises.mkdir(outDir, { recursive: true });
  await fsPromises.writeFile(path.join(outDir, "feed.rss"), feed.rss2());
  await fsPromises.writeFile(path.join(outDir, "feed.atom"), feed.atom1());
}
