import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import AIChatMessage from "./AIChatMessage";
import { SendHorizontal } from "lucide-react";
import { PopoverContent } from "../ui/popover";

interface AIChatBoxProps {
	open: boolean;
	onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
	const [input, setInput] = useState('');
	const { messages, sendMessage } = useChat();

	if (!open) return null;

	return (
		<PopoverContent>
			{messages.map(message => (
				<AIChatMessage key={message.id} message={message} />
			))}

			<form
				className="flex gap-2"
				onSubmit={e => {
					e.preventDefault();
					sendMessage({ text: input });
					setInput('');
				}}
			>
				<Textarea
					className="cn-textarea placeholder:text-muted-foreground flex flex-grow field-sizing-content min-h-16 w-full outline-none disabled:cursor-not-allowed disabled:opacity-50 cn-input-group-textarea flex-1 resize-none"
					value={input}
					placeholder="Ask something..."
					onChange={e => setInput(e.currentTarget.value)}
				/>
				<Button
					type="submit"
					disabled={input.trim() === ''}
					size="icon-lg"
					variant="default"
					aria-label="Send"
					className="disabled:opacity-50"
				>
					<SendHorizontal />
				</Button>
			</form>
		</PopoverContent>
	);
}