import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import AIChatMessage from "./AIChatMessage";
import { SendHorizontal, XCircle } from "lucide-react";
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
		<PopoverContent
			side="bottom"
			className="w-80"
		>
			<div className="grid gap-4">
				<div className="space-y-2 flex items-center justify-between p-4">
					<h4 className="leading-none font-medium">AI Assistant</h4>
					<Button onClick={onClose} variant="ghost" className="hover:bg-transparent cursor-pointer">
						<XCircle size={24} />
					</Button>
				</div>
			</div>
			<div className="mt-3 h-full px-3 overflow-y-auto">
				{
					messages.map(message => (
						<AIChatMessage key={message.id} message={message} />
					))
				}
			</div>

			<form
				className="m-3 flex gap-1 justify-between items-end"
				onSubmit={e => {
					e.preventDefault();
					sendMessage({ text: input });
					setInput('');
				}
				}
			>
				<Textarea
					className="resize-none flex-grow min-h-[40px] focus-visible:ring-0"
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
					className="w-10 cursor-pointer"
				>
					<SendHorizontal />
				</Button>
			</form >
		</PopoverContent >
	);
}