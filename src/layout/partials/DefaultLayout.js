import React from 'react';
import Header from './Header';
import Footer from './Footer';
import   Entry     from '../../Components/Entry/Entry'

const DefaultLayout = ({children}) => {
  return (
    <div className ="default-layout">
        <div className="header mb-3">
            <Header></Header>
        </div>
    <main className="main">{children}
    </main>    
    <footer className="footer">
     <Footer></Footer>
    </footer>
    
    </div>
  );
}

export default DefaultLayout;
