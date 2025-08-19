import React from 'react';

interface ProjectCardProps {
  title: string;
  description: string;
  image?: string;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ title, description, image }) => (
  <div className="bg-gray-800 rounded-lg p-6 flex flex-col items-center">
    {image && (
      <img src={image} alt={title} className="w-full h-40 object-cover rounded mb-4" />
    )}
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-base text-gray-300">{description}</p>
  </div>
);

export default ProjectCard;
