import { Chip, Tooltip } from '@nextui-org/react';
import { Github, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/Button';

export const PortfolioCard = ({
  id,
  title,
  description,
  labels,
  thumbnail,
  previewURL,
  codeURL,
  isDone,
  isTeam,
}) => {
  return (
    <div
      className={`p-4 border-[.5px] border-purple-300 dark:border-purple-800/20 rounded-md relative group transition-all bg-purple-100/20 dark:bg-slate-400/10 flex flex-col ${
        !isDone && 'on-progress'
      } ${isTeam && 'team-project'}`}
    >
      <div className="h-[250px] w-full overflow-hidden rounded-md">
        <Tooltip showArrow={true} content="Visit Live Demo">
          <a href={previewURL} target="_blank">
            <Image
              alt={title}
              className="object-cover"
              src={thumbnail}
              width={700}
              height={100}
            />
          </a>
        </Tooltip>
      </div>
      <a href={previewURL} target="_blank">
        <h2 className="mt-5 mb-3 text-xl font-mono group-hover:text-purple-600 transition-all">
          {title}
          <MoveRight
            size={18}
            className="inline-block ml-2 group-hover:rotate-[-45deg] transition-all"
          />
        </h2>
      </a>
      <p className="mb-5 text-gray-500 dark:text-gray-400 text-sm">
        {description}
      </p>
      {codeURL && (
        <Tooltip showArrow={true} content="Souce code">
          <a
            target="_blank"
            href={codeURL}
            className="p-2 bg-gray-900 inline-block rounded-md absolute top-2 left-2 hover:opacity-80"
          >
            <Github size={17} color="white" />
          </a>
        </Tooltip>
      )}
      <div className="mt-auto">
        {labels.map((label, index) => (
          <Chip
            key={index}
            size="sm"
            variant="flat"
            color="default"
            className="mr-1 mb-1 card-label"
          >
            {label}
          </Chip>
        ))}
      </div>
      <div className="h-5"></div>

      <div className="space-y-2">
        <Button href={previewURL} external={true}>
          Visit Live Demo
        </Button>
        <Button href={codeURL} external={true} variant="secondary">
          Github
        </Button>
      </div>
    </div>
  );
};
