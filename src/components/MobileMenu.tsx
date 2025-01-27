import { X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface MobileMenuProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsOpen }) => {
	const location  = useLocation();
	
	return (
		<div className='fixed top-0 right-0 bottom-0 flex flex-col justify-start bg-gray-100 min-w-64 max-w-[500px] min-h-screen shadow z-10'>
			<div className='w-full flex items-center justify-end px-5 py-10'>
				<X onClick={() => setIsOpen(active => !active)} className=' w-6 h-6 cursor-pointer items-end justify-end text-gray-700 active:bg-blue-100 rounded-full'/>
			</div>
			
			<ul className= "flex flex-col text-gray-900  justify-between w-full">
				<Link to="/" className='w-full'onClick={() => setIsOpen(active => !active)}>
					<li className={location.pathname === '/' 
						? 'px-10 py-8 h-full w-full active:bg-blue-500 active:text-white  border-blue-500 bg-blue-100' 
						: 'px-10 py-8 h-full w-full active:bg-blue-500 active:text-white  border-transparent'
					}>
						Home
					</li>
				</Link>
				
				<Link to="/about" className='w-full' onClick={() => setIsOpen(active => !active)}>
					<li className={location.pathname === '/about' 
						? 'px-10 py-8 h-full w-full active:bg-blue-500 active:text-white  border-blue-500 bg-blue-100' 
						: 'px-10 py-8 h-full w-full active:bg-blue-500 active:text-white  border-transparent'
					}>
						About
					</li>
				</Link>
        
				<Link to="/contact" className='w-full' onClick={() => setIsOpen(active => !active)}>
					<li className={location.pathname === '/contact' 
						? 'px-10 py-8 h-full w-full active:bg-blue-500 active:text-white  border-blue-500 bg-blue-100' 
						: 'px-10 py-8 h-full w-full active:bg-blue-500 active:text-white  border-transparent'
					}>
						Contact
					</li>
				</Link>
			</ul>
		</div>
	)
}

export default MobileMenu