import React from 'react';
import Navigation from '@/components/navigation/Navigation';

const Header: React.FC = () => {
    return (
        <header className="bg-gray-100 text-black py-4 px-16">
            <div className="container mx-auto">
                <Navigation />
            </div>
        </header>
    );
};

export default Header;
