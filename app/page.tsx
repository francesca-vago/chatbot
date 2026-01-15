'use client';

import AIChatButton from '@/components/AIChat/AIChatButton';
import NavMenu from '@/components/NavMenu/NavMenu';

export default function Chat() {
  return (
    <div className="flex flex-col w-full max-w-md py-24 mx-auto stretch">
      <NavMenu />
      <AIChatButton />
    </div>
  );
}