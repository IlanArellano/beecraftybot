import { Awaitable, Message } from "discord.js";

export interface commandsEntity {
    name: string;
    description?: string | null;
    args: boolean;
    execute: (message: Message, args: string[]) => Awaitable<Message>;
}