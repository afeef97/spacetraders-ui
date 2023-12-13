'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import { useRouter } from 'next/navigation';

const NavButtonGroup = ({ containerStyle }: { containerStyle?: string }) => {
  const router = useRouter();
  return (
    <div className={cn('flex flex-col md:flex-row gap-2', containerStyle)}>
      <Button onClick={() => router.push('/get-started')}>Get started</Button>
      <Button variant={'outline'} asChild>
        <a href='https://spacetraders.io' target='_blank'>
          Learn more <ExternalLink className='ml-2 h-4 w-4' />
        </a>
      </Button>
    </div>
  );
};

export default NavButtonGroup;
