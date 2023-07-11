//import AuthContextProvider from '../context/AuthContext';
import AuthContextProvider from '../context';
import '../styles/globals.css'
import "../styles/header.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
    <AuthContextProvider>
        <Component {...pageProps} />
    </AuthContextProvider>
  </>
  );
    
  
  
}

export default MyApp
