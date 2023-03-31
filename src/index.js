import React from 'react';
import ReactDOM from 'react-dom/client';
import NavbarSection from './components/NavbarSection';
import CarouselSection from './components/CarouselSection';
import FormSection from './components/FormControl';
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<React.StrictMode>
		<NavbarSection />
		<CarouselSection />
		<FormSection />
	</React.StrictMode>
);