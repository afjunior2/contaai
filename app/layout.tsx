import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'ContaAI',
    description: 'Rede social inteligente para comunidades e conexões',
}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="pt-BR">
        <body>{children}</body>
        </html>
    )
}
