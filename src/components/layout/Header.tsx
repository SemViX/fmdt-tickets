'use client'
import { HEADER_ITEMS } from '@/utils/constants/header'
import Link from 'next/link'
import Button from '../ui/Button'
import { TicketsIcon } from 'lucide-react'

const BANK_URL = "https://send.monobank.ua/jar/7mRu3fWkr";


const Header = () => {
    const onClick = () => {
        window.open(BANK_URL, "_blank", "noopener,noreferrer");
    };

    return (
        <header className='sticky top-0 z-50 w-full border-b border-(--color-border) bg-(--color-background)/90 backdrop-blur-xl'>
            <div className='mx-auto flex min-h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8'>
                <div className='flex gap-5 items-center'>
                    <div className='flex size-11 items-center justify-center rounded-xl border border-(--color-border-accent) bg-(--color-surface-glass) text-(--color-secondary) shadow-[0_0_20px_var(--color-primary-glow)]'>
                        <TicketsIcon className='size-6 sm:size-7' />
                    </div>
                    <h2 className='font-(family-name:--font-display) text-xs font-semibold uppercase tracking-tight text-(--color-text) sm:text-sm'>
                        Купуй квиток
                    </h2>

                </div>
                <nav className='flex items-center gap-3 sm:gap-5'>
                    {HEADER_ITEMS.map((item) => (
                        <Link
                            key={item.id}
                            href={item.link}
                            className='hidden rounded-md px-1 py-2 text-sm font-semibold text-(--color-text-secondary) transition-[colors, transform] duration-300 hover:text-(--color-secondary) scale-100 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-(--color-secondary) lg:inline-flex'
                        >
                            {item.label}
                        </Link>
                    ))}
                    <Button
                        text='Купити квиток'
                        variant='secondary'
                        onClick={onClick}
                    />
                </nav>
            </div>
        </header>
    )
}

export default Header
