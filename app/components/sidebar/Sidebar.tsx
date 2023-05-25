import {getCurrentUser} from '@/app/actions/getCurrentUser';
import React from 'react';
import DesktopSidebar from './DesktopSidebar';
import MobileFooter from './MobileFooter';
const Sidebar = async ({children}: {children: React.ReactNode}) => {
	const currentUser = await getCurrentUser();
	return (
		<div className='h-full'>
			<DesktopSidebar currentUser={currentUser!} />
			<MobileFooter />
			<div className='h-full'>{children}</div>
		</div>
	);
};

export default Sidebar;
