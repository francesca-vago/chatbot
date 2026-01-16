'use client';

import AIChatButton from '@/components/AIChat/AIChatButton';
import NavMenu from '@/components/NavMenu/NavMenu';

export default function Chat() {
  return (
    <div className="max-w-md py-4 mx-auto">
      <NavMenu />
      <AIChatButton />
    </div>
  );
}