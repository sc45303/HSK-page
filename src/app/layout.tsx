// src/app/layout.tsx
import './globals.css'; // Import global CSS (including Tailwind classes)
import Header from './components/Header';
import Footer from './components/Footer';

export const metadata = {
  title: 'Suhail Marketer',
  description: 'Digital Marketing Services',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className="bg-cover bg-center min-h-screen"
        style={{ backgroundImage: "url('/hsk.jpg')" }} // Apply background here
      >
        
          <Header />
        {children}
        
        <Footer />
      </body>
    </html>
  );
}
