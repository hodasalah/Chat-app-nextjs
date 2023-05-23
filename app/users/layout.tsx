import React from 'react';
import DesktopSidebar from '../components/sidebar/DesktopSidebar';
import Sidebar from '../components/sidebar/Sidebar';

export default async function UsersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		//@ts-expect-error server component
		<Sidebar>
			<div className='h-full'>
				<main className='lg:pl-20 h-full'>{children}</main>
			</div>
		</Sidebar>
	);
}
