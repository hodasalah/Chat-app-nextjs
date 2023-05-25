import React from 'react';
import getUsers from '../actions/getUsers';
import Sidebar from '../components/sidebar/Sidebar';
import UsersList from './components/UsersList';

export default async function UsersLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	const users = await getUsers();
	return (
		//@ts-expect-error server component
		<Sidebar>
			<div className='h-full'>
				<UsersList items={users} />
				<main className='lg:pl-20 h-full'>{children}</main>
			</div>
		</Sidebar>
	);
}
