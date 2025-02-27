import Header  from '../../components/header/Header'
import Posts from '../../components/posts/Posts';
import Sidebar from '../../components/sidebar/Sidebar';
import Page1 from '../page1/page1';
import './home.css'

export default function Home() {
    return(
        <>
            <Header/>
            <div className='home'>  
                <Posts/>
                <Sidebar/>
                <Page1/>
            </div>
        </>
    );
}
