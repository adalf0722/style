import { Card } from "../common/Card";

type AuthorBoxProps = {
  name: string;
  role: string;
  avatarUrl?: string;
};

export const AuthorBox = ({ name, role, avatarUrl }: AuthorBoxProps) => {
  return (
    <Card className="flex items-center gap-4">
      {avatarUrl ? (
        <div className="h-12 w-12 overflow-hidden rounded-full bg-primary">
          <img
            src={avatarUrl}
            alt={name}
            className="h-full w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-background">
          {name.slice(0, 1)}
        </div>
      )}
      <div>
        <p className="text-sm font-semibold text-text">{name}</p>
        <p className="text-xs text-secondary">{role}</p>
      </div>
    </Card>
  );
};
