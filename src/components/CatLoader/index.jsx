import Lottie  from 'lottie-react';
import catLoaderAnimation from '../../assets/cat-loader.json';
// import catLoaderAnimation1 from '../../assets/day-mode-developer.json';
// import catLoaderAnimation2 from '../../assets/frontend-developer-icons.json';
// import catLoaderAnimation3 from '../../assets/night-mode-developer-v1.json';


import './index.scss';

const CatLoader = ({height='322px'}) => {
    return(
        <div className="cat-loader__container" style={{height,width:height}}>
            <Lottie animationData={catLoaderAnimation} loop />
        </div>
    )
}
export default CatLoader;