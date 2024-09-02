import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import pageNotFoundAnimation from '../../assets/404cat.json';
import Button from '../../components/Button';
import './index.scss';


const PageNotFound = () => {
    const navigate = useNavigate();

    const toHome = () => {
        navigate('/');
    }
    return(
        <div className='container container__center'>
            <h2>Opps! are you lost!</h2>
            <h2>404</h2>
            <p>Page Not Found</p>
            <Button title='Go Back Home' isPrimary onClick={toHome}/>
            
            <div className="page-not-found-cat__container">
                <Lottie animationData={pageNotFoundAnimation} loop={false} />
            </div>
        </div>
    )
}
export default PageNotFound;