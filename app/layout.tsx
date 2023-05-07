import {Inter} from 'next/font/google';
import './globals.css';

const inter = Inter({subsets: ['latin']});

export const metadata = {
	title: 'chat-app',
	description:
		'Real-Time Chat-app: Next.js 13, React, Tailwind, Prisma, MongoDB, NextAuth, Pusher',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
	return (
		<html lang='en'>
			<body className={inter.className}>{children}</body>
		</html>
	);
}
