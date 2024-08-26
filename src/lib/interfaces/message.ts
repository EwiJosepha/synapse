// content, senderId, receiverId, conversationId, reactions, attachments

export type MessageSchema = {
  content: string,
  receiverId :string | null,
  senderId: string | null,
  conversationId : string,
  reactions: string[],
  attachments: string[]
  emoji: string,
  timestamp: number, 

}