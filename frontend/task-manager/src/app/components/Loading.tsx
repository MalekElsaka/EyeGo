'use client';
import { Triangle } from 'react-loader-spinner';

const Loading = () => {
    return ( 
        <div className="loading-container w-[460px] mt-8 h-fit flex justify-center items-center">
            <Triangle
                height="150"
                width="150"
                color="#C084FC"
                ariaLabel="loading"
            />
        </div>
     );
}
 
export default Loading;