import { Link, useParams } from "react-router-dom";
import { AuthorBox } from "../../components/blog/AuthorBox";
import { MarkdownContainer } from "../../components/blog/MarkdownContainer";
import { TagPill } from "../../components/blog/TagPill";
import { BlogLayout } from "../../layouts/blog/BlogLayout";
import { blogPosts } from "./blogData";

export const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((entry) => entry.id === id);
  const nextPost =
    post && blogPosts.find((entry) => entry.id !== post.id);

  if (!post) {
    return (
      <BlogLayout>
        <div className="panel-surface space-y-4 p-6">
          <p className="text-sm text-secondary">Post not found.</p>
          <Link className="text-sm font-semibold text-accent" to="/blog">
            Back to blog
          </Link>
        </div>
      </BlogLayout>
    );
  }

  const headings = post.content
    .map((block, index) => (block.kind === "h2" ? { text: block.text, index } : null))
    .filter((block): block is { text: string; index: number } => Boolean(block));

  return (
    <BlogLayout>
      <article className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_320px]">
        <div className="min-w-0 space-y-7">
          <section className="panel-surface p-6 md:p-8">
            <div className="flex flex-wrap items-center justify-between gap-3 text-xs text-secondary">
              <Link
                className="font-semibold uppercase tracking-wide hover:text-primary"
                to="/blog"
              >
                Back to archive
              </Link>
              <span>{post.date}</span>
            </div>

            <div className="mt-6 space-y-5">
              <div className="flex flex-wrap items-center gap-2">
                {post.tags.map((tag) => (
                  <TagPill key={tag} label={tag} />
                ))}
              </div>
              <h1 className="text-3xl font-semibold leading-tight text-text md:text-5xl">
                {post.title}
              </h1>
              <p className="max-w-2xl text-base leading-7 text-secondary">
                {post.excerpt}
              </p>
              <div className="flex flex-wrap items-center gap-3 text-sm text-secondary">
                <span>Estimated read: 4 min</span>
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                <span>{post.author.name}</span>
              </div>
            </div>
          </section>

          <section className="panel-surface p-6 md:p-8">
            <MarkdownContainer>
              {post.content.map((block, index) => {
                if (block.kind === "h2") {
                  return (
                    <h2 key={`${block.kind}-${index}`} id={`section-${index}`}>
                      {block.text}
                    </h2>
                  );
                }
                if (block.kind === "p") {
                  return <p key={`${block.kind}-${index}`}>{block.text}</p>;
                }
                if (block.kind === "ul") {
                  return (
                    <ul key={`${block.kind}-${index}`}>
                      {block.items.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  );
                }
                if (block.kind === "quote") {
                  return (
                    <blockquote key={`${block.kind}-${index}`}>
                      {block.text}
                    </blockquote>
                  );
                }
                return <code key={`${block.kind}-${index}`}>{block.text}</code>;
              })}
            </MarkdownContainer>
          </section>
        </div>

        <aside className="space-y-4 lg:sticky lg:top-6 lg:self-start">
          <div className="panel-surface p-5 text-text">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Contents
            </p>
            <ul className="mt-4 space-y-2 text-sm text-secondary">
              {headings.map((heading) => (
                <li key={heading.index}>
                  <a
                    className="flex items-start gap-2 rounded-theme px-3 py-2 text-text hover:bg-primary hover:text-background"
                    href={`#section-${heading.index}`}
                  >
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{heading.text}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel-surface p-5 text-text">
            <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
              Navigate
            </p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <Link
                className="rounded-theme border border-secondary bg-background px-4 py-3 font-semibold text-accent hover:border-primary"
                to="/blog"
              >
                Back to archive
              </Link>
              {nextPost ? (
                <Link
                  className="rounded-theme border border-secondary bg-background px-4 py-3 font-semibold text-accent hover:border-primary"
                  to={`/blog/${nextPost.id}`}
                >
                  Next: {nextPost.title}
                </Link>
              ) : null}
            </div>
          </div>

          <AuthorBox
            name={post.author.name}
            role={post.author.role}
            avatarUrl={post.author.avatarUrl}
          />
        </aside>
      </article>
    </BlogLayout>
  );
};
