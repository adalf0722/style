import type { CSSProperties } from "react";
import { AuthorBox } from "../../components/blog/AuthorBox";
import { Card } from "../../components/common/Card";
import { TagPill } from "../../components/blog/TagPill";
import { BlogLayout } from "../../layouts/blog/BlogLayout";
import { blogPosts } from "./blogData";

export const BlogListPage = () => {
  const coverTexture = {
    "--card-highlight-opacity": "0.25",
  } as CSSProperties;

  return (
    <BlogLayout>
      <div className="space-y-12">
        <section className="grid gap-6 md:grid-cols-[1.2fr_0.8fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.4em] text-secondary">
              Studio journal
            </p>
            <h1 className="text-3xl font-semibold text-text md:text-4xl">
              Stories about building elastic theme systems.
            </h1>
            <p className="mt-3 text-sm text-secondary">
              Read how our team shifts typography, spacing, and mood across
              wildly different art directions.
            </p>
          </div>
          <AuthorBox
            name="Editorial Desk"
            role="Multi-theme Studio"
            avatarUrl="https://raw.githubusercontent.com/adalf0722/imgduck/main/public/favicon.svg"
          />
        </section>

        <section className="grid gap-6 md:grid-cols-2">
          {blogPosts.map((post) => (
            <Card key={post.id} className="overflow-hidden p-0" style={coverTexture}>
              <div className="flex flex-col md:flex-row">
                <div className="flex-1 bg-primary/10 p-4">
                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-2">
                      {post.tags.map((tag) => (
                        <TagPill key={tag} label={tag} />
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-text">{post.title}</h3>
                    <p className="text-sm text-secondary">{post.excerpt}</p>
                  </div>
                </div>
                <div className="flex-1 space-y-3 bg-surface p-4">
                  <p className="text-sm font-semibold text-text">{post.author.name}</p>
                  <p className="text-xs text-secondary">{post.date}</p>
                  <div className="flex flex-wrap gap-2 text-xs text-secondary">
                    <span className="rounded-full bg-primary/20 px-3 py-1 text-text">
                      Read time ~4 min
                    </span>
                    <span className="rounded-full bg-accent/15 px-3 py-1 text-text">
                      {post.tags[0]}
                    </span>
                  </div>
                  <a
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent"
                    href={`/blog/${post.id}`}
                  >
                    Read story →
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </section>
      </div>
    </BlogLayout>
  );
};
