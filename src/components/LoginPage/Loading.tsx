import './Loading.css';
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

function Loading() {
    return ( 
        <div className="loading-container">
            <DotLottieReact
                src="https://lottie.host/3969ce4d-7699-4161-9fa8-a6240ecb2db3/mzJgB6qFx9.lottie"
                autoplay
                loop
                className='loader'
            />
        </div>
     );
}

export default Loading;