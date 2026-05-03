import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { AuthorBox } from "../../components/blog/AuthorBox";
import { TagPill } from "../../components/blog/TagPill";
import { Card } from "../../components/common/Card";
import { BlogLayout } from "../../layouts/blog/BlogLayout";
import { blogPosts } from "./blogData";

export const BlogListPage = () => {
  const coverTexture = {
    "--card-highlight-opacity": "0.25",
  } as CSSProperties;
  const [featuredPost, ...otherPosts] = blogPosts;

  return (
    <BlogLayout>
      <div className="space-y-10">
        <section className="panel-surface overflow-hidden p-6 md:p-8">
          <div className="grid gap-8 lg:grid-cols-[1fr_320px]">
            <div className="max-w-3xl space-y-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Studio journal
              </p>
              <h1 className="text-3xl font-semibold leading-tight text-text md:text-5xl">
                Field notes for building adaptive theme systems.
              </h1>
              <p className="max-w-2xl text-sm leading-6 text-secondary md:text-base">
                Read how the team shifts typography, spacing, motion, and
                component tone across radically different art directions.
              </p>
            </div>
            <AuthorBox
              name="Editorial Desk"
              role="Multi-theme Studio"
              avatarUrl="https://raw.githubusercontent.com/adalf0722/imgduck/main/public/favicon.svg"
            />
          </div>

          <div className="mt-7 grid gap-3 sm:grid-cols-3">
            {[
              { label: "Articles", value: blogPosts.length },
              { label: "Themes covered", value: "5+" },
              { label: "Format", value: "Practical notes" },
            ].map((metric) => (
              <div
                key={metric.label}
                className="rounded-theme border border-secondary bg-background px-4 py-3"
              >
                <p className="text-xs text-secondary">{metric.label}</p>
                <p className="mt-1 text-xl font-semibold text-text">
                  {metric.value}
                </p>
              </div>
            ))}
          </div>
        </section>

        {featuredPost ? (
          <section className="grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
            <Card className="p-6 md:p-7" style={coverTexture}>
              <div className="space-y-5">
                <div className="flex flex-wrap gap-2">
                  {featuredPost.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
                <div className="space-y-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                    Featured story
                  </p>
                  <h2 className="text-3xl font-semibold leading-tight text-text">
                    {featuredPost.title}
                  </h2>
                  <p className="text-sm leading-6 text-secondary">
                    {featuredPost.excerpt}
                  </p>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-secondary pt-5">
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {featuredPost.author.name}
                    </p>
                    <p className="text-xs text-secondary">
                      {featuredPost.date} / 4 min read
                    </p>
                  </div>
                  <Link
                    className="btn-base btn-ghost inline-flex min-h-11 items-center px-4 py-2 text-sm font-semibold"
                    to={`/blog/${featuredPost.id}`}
                  >
                    Read story
                  </Link>
                </div>
              </div>
            </Card>

            <div className="panel-surface p-5 md:p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
                Reading path
              </p>
              <div className="mt-4 space-y-3">
                {blogPosts.map((post, index) => (
                  <Link
                    key={post.id}
                    className="theme-animate block rounded-theme border border-secondary bg-background px-4 py-3 hover:border-primary"
                    to={`/blog/${post.id}`}
                  >
                    <div className="flex items-start gap-3">
                      <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-primary text-xs font-semibold text-background">
                        {index + 1}
                      </span>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-text">
                          {post.title}
                        </p>
                        <p className="mt-1 text-xs leading-5 text-secondary">
                          {post.tags.join(" / ")}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        ) : null}

        <section className="space-y-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Latest writing
            </p>
            <h2 className="text-2xl font-semibold text-text">
              More from the archive
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {otherPosts.map((post) => (
              <Card
                key={post.id}
                className="flex min-w-0 flex-col gap-5"
                style={coverTexture}
              >
                <div className="flex flex-wrap gap-2">
                  {post.tags.map((tag) => (
                    <TagPill key={tag} label={tag} />
                  ))}
                </div>
                <div className="space-y-3">
                  <h3 className="text-2xl font-semibold leading-tight text-text">
                    {post.title}
                  </h3>
                  <p className="text-sm leading-6 text-secondary">
                    {post.excerpt}
                  </p>
                </div>
                <div className="mt-auto flex flex-wrap items-center justify-between gap-4 border-t border-secondary pt-4">
                  <div>
                    <p className="text-sm font-semibold text-text">
                      {post.author.name}
                    </p>
                    <p className="text-xs text-secondary">
                      {post.date} / 4 min read
                    </p>
                  </div>
                  <Link
                    className="inline-flex min-h-11 items-center rounded-theme px-3 py-2 text-sm font-semibold text-accent hover:text-primary"
                    to={`/blog/${post.id}`}
                  >
                    Read story
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </BlogLayout>
  );
};
