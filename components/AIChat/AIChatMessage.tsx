import { UIMessage } from "ai";
import { Item, ItemActions, ItemContent, ItemDescription, ItemMedia, ItemTitle } from "../ui/item";
import { Bot, X } from "lucide-react";
import { Button } from "../ui/button";

export default function AIChatMessage({ message }: { message: UIMessage }) {
  return (
    <div key={message.id} className="flex w-full max-w-lg flex-col gap-6">
      <Item variant="outline">
        <ItemMedia variant="icon" className="bg-transparent border-none">
          <Bot />
        </ItemMedia>
        <ItemContent>
          <ItemTitle>{message.role === 'user' ? 'User: ' : 'Assistant: '}</ItemTitle>
          <ItemDescription>
            {message.parts.map((part, i) => {
              switch (part.type) {
                case 'text':
                  return <div key={`${message.id}-${i}`}>{part.text}</div>;
                default:
                  return null;
              }
            })}
          </ItemDescription>
        </ItemContent>
        <ItemActions>
          <Button size="sm" variant="ghost" className="hover:bg-transparent cursor-pointer">
            <X />
          </Button>
        </ItemActions>
      </Item>
    </div>
  );
}

