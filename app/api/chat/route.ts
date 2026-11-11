import { createUIMessageStream, createUIMessageStreamResponse, type UIMessage } from 'ai'

function getReply(prompt: string) {
  const question = prompt.toLowerCase()
  if (question.includes('volunteer')) {
    return 'We’d love to have you involved. Visit [Get involved](/get-involved) to explore ways to volunteer with DAVO, or [contact our team](/contact) and we’ll help you find a good fit.'
  }
  if (question.includes('where') || question.includes('work')) {
    return 'DAVO works alongside communities in Nigeria to create lasting change through opportunity, dignity, and collective action. You can learn more about our [programs](/programs) and [impact](/impact).'
  }
  if (question.includes('donat')) {
    return 'Thank you for wanting to support this work. You can make a contribution on our [donation page](/donate).'
  }
  if (question.includes('event') || question.includes('upcoming')) {
    return 'For the latest events and community updates, take a look at our [news and updates](/news). You can also [contact the team](/contact) with a question.'
  }
  return 'I can help you learn about DAVO’s programs, volunteering, donations, and events. Explore [our work](/programs), or [talk to a member of our team](/contact) for more specific help.'
}

export async function POST(request: Request) {
  let messages: UIMessage[]
  try {
    const body: unknown = await request.json()
    if (!body || typeof body !== 'object' || !('messages' in body) || !Array.isArray(body.messages)) {
      return Response.json({ error: 'A messages array is required.' }, { status: 400 })
    }
    messages = body.messages as UIMessage[]
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 })
  }

  const lastMessage = messages.at(-1)
  const prompt = lastMessage?.parts
    ?.filter((part) => part.type === 'text')
    .map((part) => part.text)
    .join('')
    .trim()

  if (lastMessage?.role !== 'user' || !prompt || prompt.length > 2000) {
    return Response.json({ error: 'Please send a message under 2,000 characters.' }, { status: 400 })
  }

  const reply = getReply(prompt)
  const stream = createUIMessageStream({
    execute: async ({ writer }) => {
      const id = crypto.randomUUID()
      writer.write({ type: 'text-start', id })
      for (let index = 0; index < reply.length; index += 14) {
        writer.write({ type: 'text-delta', id, delta: reply.slice(index, index + 14) })
        await new Promise((resolve) => setTimeout(resolve, 22))
      }
      writer.write({ type: 'text-end', id })
    },
  })

  return createUIMessageStreamResponse({ stream })
}
