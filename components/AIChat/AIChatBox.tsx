import { useChat } from "@ai-sdk/react";
import { useState } from "react";
import { Textarea } from "../ui/textarea";
import { Button } from "../ui/button";
import AIChatMessage from "./AIChatMessage";

interface AIChatBoxProps {
	open: boolean;
	onClose: () => void;
}

export default function AIChatBox({ open, onClose }: AIChatBoxProps) {
	const [input, setInput] = useState('');
	const { messages, sendMessage } = useChat();

	if (!open) return null;

	return (
		<div>
			{messages.map(message => (
				<AIChatMessage key={message.id} message={message} />
			))}

			<form
				onSubmit={e => {
					e.preventDefault();
					sendMessage({ text: input });
					setInput('');
				}}
			>
				<Textarea
					className="resize-none"
					value={input}
					placeholder="Ask something..."
					onChange={e => setInput(e.currentTarget.value)}
				/>
				<Button type="submit" disabled={input.trim() === ''}>Send</Button>
			</form>
		</div>
	);
}