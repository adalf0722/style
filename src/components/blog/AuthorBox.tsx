import { Card } from "../common/Card";

type AuthorBoxProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};

export const AuthorBox = ({ name, role, avatarUrl }: AuthorBoxProps) => {
  return (
    <Card className="flex min-w-0 items-center gap-4">
      {avatarUrl ? (
        <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full border border-secondary bg-primary">
          <img
            src={avatarUrl}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary text-lg font-semibold text-background">
          {name.slice(0, 1)}
        </div>
      )}
      <div className="min-w-0">
        <p className="text-xs font-semibold uppercase tracking-wide text-secondary">
          Author
        </p>
        <p className="text-sm font-semibold text-text">{name}</p>
        <p className="text-xs leading-5 text-secondary">{role}</p>
      </div>
    </Card>
  );
};
