'use client';

import React from 'react';
import { cn } from '@/lib/utils';

const TitleGroup = ({
  title,
  description,
  containerStyle,
  titleStyle,
  descriptionStyle,
}: {
  title: string;
  description?: string;
  containerStyle?: string;
  titleStyle?: string;
  descriptionStyle?: string;
}) => {
  return (
    <div className={cn('mb-4', containerStyle)}>
      <h1 className={cn('text-center md:text-start mb-4', titleStyle)}>
        {title}
      </h1>
      <p
        className={cn(
          'text-justify leading-5 md:leading-6 md:text-start',
          descriptionStyle
        )}
      >
        {description}
      </p>
    </div>
  );
};

export default TitleGroup;
