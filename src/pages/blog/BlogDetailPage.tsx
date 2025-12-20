import { Link, useParams } from "react-router-dom";
import { AuthorBox } from "../../components/blog/AuthorBox";
import { MarkdownContainer } from "../../components/blog/MarkdownContainer";
import { TagPill } from "../../components/blog/TagPill";
import { BlogLayout } from "../../layouts/blog/BlogLayout";
import { blogPosts } from "./blogData";

export const BlogDetailPage = () => {
  const { id } = useParams();
  const post = blogPosts.find((entry) => entry.id === id);

  if (!post) {
    return (
      <BlogLayout>
        <div className="space-y-4">
          <p className="text-sm text-secondary">Post not found.</p>
          <Link className="text-sm font-semibold text-accent" to="/blog">
            Back to blog
          </Link>
        </div>
      </BlogLayout>
    );
  }

  return (
    <BlogLayout>
      <div className="grid gap-10 lg:grid-cols-[1fr_280px]">
        <div className="space-y-6">
          <div className="flex items-center justify-between text-xs text-secondary">
            <Link className="uppercase tracking-[0.3em]" to="/blog">
              ← Back to archive
            </Link>
            <span>{post.date}</span>
          </div>
          <div className="space-y-3">
            <div className="flex flex-wrap items-center gap-2">
              {post.tags.map((tag) => (
                <TagPill key={tag} label={tag} />
              ))}
            </div>
            <h1 className="text-3xl font-semibold text-text md:text-4xl">
              {post.title}
            </h1>
            <div className="flex items-center gap-3 text-sm text-secondary">
              <span>Estimated read: 4 min</span>
              <span>·</span>
              <span>{post.author.name}</span>
            </div>
          </div>
          <MarkdownContainer>
            {post.content.map((block, index) => {
              if (block.kind === "h2") {
                return <h2 key={`${block.kind}-${index}`}>{block.text}</h2>;
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
                return <blockquote key={`${block.kind}-${index}`}>{block.text}</blockquote>;
              }
              return <code key={`${block.kind}-${index}`}>{block.text}</code>;
            })}
          </MarkdownContainer>
        </div>

        <div className="space-y-4">
          <div className="panel-surface p-4 text-text">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Contents</p>
            <ul className="mt-3 space-y-2 text-sm text-secondary">
              {post.content
                .map((block, index) => (block.kind === "h2" ? { text: block.text, index } : null))
                .filter(Boolean)
                .map((block) => (
                  <li key={block!.index} className="text-text">
                    • {block!.text}
                  </li>
                ))}
            </ul>
          </div>
          <div className="panel-surface p-4 text-text">
            <p className="text-xs uppercase tracking-[0.3em] text-secondary">Navigate</p>
            <div className="mt-3 flex flex-col gap-2 text-sm">
              <Link className="text-accent" to="/blog">
                ← Back to archive
              </Link>
              <Link className="text-accent" to="/blog/theme-orbits">
                Next: Mapping theme orbits
              </Link>
            </div>
          </div>
          <AuthorBox
            name={post.author.name}
            role={post.author.role}
            avatarUrl={post.author.avatarUrl}
          />
        </div>
      </div>
    </BlogLayout>
  );
};
