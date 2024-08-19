import Lottie  from 'lottie-react';
import catLoaderAnimation from '../../asssets/cat-loader.json';
import './index.scss';

const CatLoader = ({height='322px'}) => {
    return(
        <div className="cat-loader__container" style={{height,width:height}}>
            <Lottie animationData={catLoaderAnimation} loop />
        </div>
    )
}
export default CatLoader;