import Footer from '../Footer/Footer'
import Sidebar from '../Sidebar/Sidebar'
import Navbar from '../Navbar'
import styles from '../../styles/Home.module.css';

const Layout = ({children}) => {

    return ( 
        <div className = {styles.LmsContainer}>
            <Navbar/> 
             <Sidebar/> 
            {children}
        {/* <Footer/> */}
            
       </div>       
     );
}
 
export default Layout;