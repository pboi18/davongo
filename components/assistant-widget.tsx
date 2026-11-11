'use client'

import { useChat } from '@ai-sdk/react'
import { DefaultChatTransport } from 'ai'
import { ArrowUp, Check, MessageCircle, X } from 'lucide-react'
import Link from 'next/link'
import { FormEvent, KeyboardEvent, useEffect, useRef, useState } from 'react'

const starterQuestions = [
  'How can I volunteer?',
  'Where do you work?',
  'How do I donate?',
  'Upcoming events',
]

function MessageText({ text }: { text: string }) {
  const linkPattern = /\[([^\]]+)\]\((https?:\/\/[^\s)]+|\/[^\s)]*)\)/g
  const pieces: React.ReactNode[] = []
  let cursor = 0
  let match: RegExpExecArray | null

  while ((match = linkPattern.exec(text)) !== null) {
    if (match.index > cursor) pieces.push(text.slice(cursor, match.index))
    const href = match[2]
    pieces.push(
      <a
        key={`${match.index}-${href}`}
        href={href}
        target={href.startsWith('http') ? '_blank' : undefined}
        rel={href.startsWith('http') ? 'noreferrer' : undefined}
        className="font-semibold text-primary underline underline-offset-2 hover:opacity-80"
      >
        {match[1]}
      </a>,
    )
    cursor = linkPattern.lastIndex
  }

  if (cursor < text.length) pieces.push(text.slice(cursor))
  return pieces.map((piece, index) => <span key={index}>{piece}</span>)
}

export function AssistantWidget() {
  const [open, setOpen] = useState(false)
  const [showPulse, setShowPulse] = useState(false)
  const [input, setInput] = useState('')
  const triggerRef = useRef<HTMLButtonElement>(null)
  const panelRef = useRef<HTMLDivElement>(null)
  const inputRef = useRef<HTMLInputElement>(null)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const { messages, sendMessage, status, error, regenerate } = useChat({
    transport: new DefaultChatTransport({ api: '/api/chat' }),
  })
  const isResponding = status === 'submitted' || status === 'streaming'

  useEffect(() => {
    if (!window.sessionStorage.getItem('davo-assistant-seen')) {
      setShowPulse(true)
      window.sessionStorage.setItem('davo-assistant-seen', 'true')
    }
  }, [])

  useEffect(() => {
    if (!open) return
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    inputRef.current?.focus()

    function onKeyDown(event: globalThis.KeyboardEvent) {
      if (event.key === 'Escape') {
        event.preventDefault()
        setOpen(false)
        return
      }
      if (event.key !== 'Tab' || !panelRef.current) return
      const focusable = panelRef.current.querySelectorAll<HTMLElement>(
        'button:not([disabled]), a[href], input:not([disabled])',
      )
      const first = focusable[0]
      const last = focusable[focusable.length - 1]
      if (!first || !last) return
      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.body.style.overflow = previousOverflow
      document.removeEventListener('keydown', onKeyDown)
      triggerRef.current?.focus()
    }
  }, [open])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'end' })
  }, [messages, status])

  function submitMessage(text: string) {
    const trimmed = text.trim()
    if (!trimmed || isResponding) return
    setInput('')
    sendMessage({ text: trimmed })
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    submitMessage(input)
  }

  function handleInputKeyDown(event: KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter' && !event.nativeEvent.isComposing && event.keyCode !== 229) {
      event.preventDefault()
      submitMessage(input)
    }
  }

  return (
    <div className="fixed bottom-5 right-5 z-[60] sm:bottom-7 sm:right-7">
      {open && (
        <>
          <button
            type="button"
            aria-label="Close assistant"
            tabIndex={-1}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-0 cursor-default bg-black/25 backdrop-blur-[2px] sm:bg-transparent sm:backdrop-blur-none"
          />
          <section
            ref={panelRef}
            id="assistant-panel"
            role="dialog"
            aria-modal="true"
            aria-labelledby="assistant-title"
            className="fixed inset-0 z-30 flex h-[100dvh] flex-col overflow-hidden border border-border bg-card text-card-foreground shadow-2xl sm:inset-auto sm:bottom-0 sm:right-0 sm:h-[min(620px,calc(100dvh-5rem))] sm:w-[380px] sm:rounded-[24px]"
          >
            <header className="flex shrink-0 items-center justify-between border-b border-border px-5 py-4">
              <div className="flex items-center gap-3">
                <div aria-hidden="true" className="flex h-10 w-10 items-center justify-center rounded-2xl bg-primary text-sm font-black tracking-tight text-primary-foreground shadow-sm">
                  D<span className="ml-0.5 mt-2 h-1.5 w-1.5 rounded-full bg-current" />
                </div>
                <div>
                  <h2 id="assistant-title" className="text-sm font-bold tracking-tight">DAVO Assistant</h2>
                  <p className="mt-0.5 flex items-center gap-1.5 text-xs text-muted-foreground"><span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />Here to help</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label="Close DAVO Assistant"
                className="flex h-9 w-9 items-center justify-center rounded-full text-muted-foreground transition hover:bg-muted hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              ><X className="h-4 w-4" /></button>
            </header>

            <div
              role="log"
              aria-live="polite"
              aria-relevant="additions text"
              aria-label="Conversation with DAVO Assistant"
              className="flex-1 overflow-y-auto px-4 py-5"
            >
              {messages.length === 0 ? (
                <div className="flex min-h-full flex-col justify-end gap-5">
                  <div className="max-w-[90%] rounded-2xl rounded-bl-md bg-muted px-4 py-3.5 text-sm leading-relaxed">
                    <p className="font-semibold">Hello, I&apos;m the DAVO Assistant.</p>
                    <p className="mt-1 text-muted-foreground">I can help you find ways to get involved and learn more about our work.</p>
                  </div>
                  <div>
                    <p className="mb-2.5 text-xs font-semibold text-muted-foreground">A few things you can ask</p>
                    <div className="flex flex-wrap gap-2">
                      {starterQuestions.map((question) => (
                        <button
                          type="button"
                          key={question}
                          onClick={() => submitMessage(question)}
                          disabled={isResponding}
                          className="rounded-full border border-border bg-background px-3 py-2 text-left text-xs font-medium transition hover:border-primary/50 hover:bg-primary/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50"
                        >{question}</button>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <div className="flex flex-col gap-4">
                  {messages.map((message) => {
                    const text = message.parts
                      .filter((part) => part.type === 'text')
                      .map((part) => part.text)
                      .join('')
                    const isUser = message.role === 'user'
                    return (
                      <div key={message.id} className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}>
                        <div className={`max-w-[88%] whitespace-pre-wrap rounded-2xl px-4 py-3 text-sm leading-relaxed ${isUser ? 'rounded-br-md bg-primary text-primary-foreground' : 'rounded-bl-md bg-muted text-foreground'}`}>
                          <MessageText text={text} />
                        </div>
                      </div>
                    )
                  })}
                  {status === 'submitted' && (
                    <div role="status" aria-label="DAVO Assistant is typing" className="flex items-center gap-1.5 self-start rounded-2xl rounded-bl-md bg-muted px-4 py-3.5">
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.2s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.1s]" />
                      <span className="h-1.5 w-1.5 animate-bounce rounded-full bg-muted-foreground" />
                    </div>
                  )}
                  <div ref={messagesEndRef} />
                </div>
              )}
            </div>

            {error && (
              <div role="alert" className="mx-4 mb-2 flex items-center justify-between gap-3 rounded-xl border border-destructive/30 bg-destructive/5 px-3 py-2.5 text-xs text-destructive">
                <span>That didn&apos;t go through. Please try again.</span>
                <button type="button" onClick={() => regenerate()} className="shrink-0 font-semibold underline underline-offset-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Retry</button>
              </div>
            )}

            <div className="shrink-0 border-t border-border px-4 pb-[max(1rem,env(safe-area-inset-bottom))] pt-3 sm:pb-4">
              <form onSubmit={handleSubmit} className="flex items-center gap-2 rounded-2xl border border-input bg-background p-1.5 pl-4 shadow-sm focus-within:ring-2 focus-within:ring-ring/40">
                <input
                  ref={inputRef}
                  aria-label="Your message"
                  value={input}
                  onChange={(event) => setInput(event.target.value)}
                  onKeyDown={handleInputKeyDown}
                  disabled={isResponding}
                  maxLength={2000}
                  placeholder="Ask DAVO anything…"
                  className="min-w-0 flex-1 bg-transparent py-2 text-sm outline-none placeholder:text-muted-foreground disabled:opacity-60"
                />
                <button
                  type="submit"
                  aria-label="Send message"
                  disabled={isResponding || !input.trim()}
                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-primary text-primary-foreground transition hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-40"
                ><ArrowUp className="h-4 w-4" /></button>
              </form>
              <div className="mt-3 flex items-center justify-between gap-3 text-[11px] text-muted-foreground">
                <Link href="/contact" className="font-semibold text-primary hover:underline focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring">Talk to a human</Link>
                <span className="text-right">AI assistant. Please don&apos;t share sensitive personal details.</span>
              </div>
            </div>
          </section>
        </>
      )}

      <button
        ref={triggerRef}
        type="button"
        aria-label={open ? 'DAVO Assistant open' : 'Open DAVO Assistant'}
        aria-expanded={open}
        aria-controls="assistant-panel"
        onClick={() => {
          setShowPulse(false)
          setOpen(true)
        }}
        className={`relative z-20 flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/25 transition hover:scale-[1.04] hover:shadow-xl focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-ring/40 ${showPulse && !open ? 'animate-pulse' : ''}`}
      >
        {open ? <Check className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
        <span className="sr-only">{open ? 'Assistant is open' : 'Chat with DAVO'}</span>
      </button>
    </div>
  )
}
