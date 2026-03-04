import { Chip, Tooltip } from '@nextui-org/react';
import { Github, MoveRight } from 'lucide-react';
import Image from 'next/image';
import { Button } from '../ui/Button';
import Link from 'next/link';

export const PortfolioCard = ({
  id,
  title,
  description,
  techStack,
  thumbnail,
  link,
  repository,
  isDone,
  isTeam,
}) => {
  return (
    <div
      className={`p-4 border-[.5px] border-gray-300 hover:border-purple-600 hover:shadow-md rounded-md relative group transition-all bg-gray-100/20 dark:bg-slate-400/10 flex flex-col ${
        isDone === 'FALSE' && 'on-progress'
      } ${isTeam === 'TRUE' && 'team-project'}`}
    >
      <div className="h-[150px] w-[250px] overflow-hidden rounded-md">
        <Tooltip showArrow={true} content="Visit Live Demo">
          <Link href={link} target="_blank">
            <Image
              alt={title}
              className="object-cover"
              src={thumbnail}
              width={700}
              height={100}
            />
          </Link>
        </Tooltip>
      </div>
      <Link href={link} target="_blank">
        <h2 className="mt-5 mb-3 font-mono group-hover:text-purple-600 transition-all">
          {title}
          <MoveRight
            size={18}
            className="inline-block ml-2 group-hover:rotate-[-45deg] transition-all"
          />
        </h2>
      </Link>
      <p className="mb-5 text-gray-500 dark:text-gray-400 text-sm">
        {description}
      </p>
      {repository && (
        <Tooltip showArrow={true} content="Souce code">
          <Link
            target="_blank"
            href={repository ?? '/'}
            className="p-2 bg-gray-900 inline-block rounded-md absolute top-2 left-2 hover:opacity-80"
          >
            <Github size={17} color="white" />
          </Link>
        </Tooltip>
      )}
      <div className="mt-auto">
        {(techStack?.split(',') ?? []).map((item, i) => (
          <Chip
            key={i}
            size="sm"
            variant="flat"
            color="default"
            className="mr-2 mb-2 card-label"
          >
            {item}
          </Chip>
        ))}
      </div>

      <Link href={link} target="_blank" className="absolute inset-0">
        {' '}
      </Link>
    </div>
  );
};
