import { AppProvider, useApp } from './context/AppContext';
import BottomNav from './components/BottomNav';
import HomePage from './pages/HomePage';
import CategoriesPage from './pages/CategoriesPage';
import AddProductPage from './pages/AddProductPage';
import MessagesPage from './pages/MessagesPage';
import ProfilePage from './pages/ProfilePage';
import ProductDetailPage from './pages/ProductDetailPage';
import { Toaster } from 'sonner';

function AppContent() {
  const { currentPage, darkMode } = useApp();

  const renderPage = () => {
    switch (currentPage) {
      case 'home': return <HomePage />;
      case 'categories': return <CategoriesPage />;
      case 'add': return <AddProductPage />;
      case 'messages': return <MessagesPage />;
      case 'profile': return <ProfilePage />;
      case 'productDetail': return <ProductDetailPage />;
      default: return <HomePage />;
    }
  };

  const showNav = !['productDetail'].includes(currentPage);

  return (
    <div className={`min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 transition-colors ${darkMode ? 'dark' : ''}`}>
      <div className="max-w-md mx-auto relative">
        {renderPage()}
        {showNav && <BottomNav />}
      </div>
      <Toaster position="top-center" richColors />
    </div>
  );
}

function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  );
}

export default App;