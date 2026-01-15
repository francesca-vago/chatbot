import { useChat } from "@ai-sdk/react";
import { useState } from "react";

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
				<div key={message.id} className="whitespace-pre-wrap">
					{message.role === 'user' ? 'User: ' : 'AI: '}
					{message.parts.map((part, i) => {
						switch (part.type) {
							case 'text':
								return <div key={`${message.id}-${i}`}>{part.text}</div>;
							default:
								return null;
						}
					})}
				</div>
			))}

			<form
				onSubmit={e => {
					e.preventDefault();
					sendMessage({ text: input });
					setInput('');
				}}
			>
				<input
					className="fixed dark:bg-zinc-900 bottom-0 w-full max-w-md p-2 mb-8 border border-zinc-300 dark:border-zinc-800 rounded shadow-xl"
					value={input}
					placeholder="Say something..."
					onChange={e => setInput(e.currentTarget.value)}
				/>
			</form>
		</div>
	);
}