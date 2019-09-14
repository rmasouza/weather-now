import React, {FC} from 'react';
import './PageContainer.scss';

const PageContainer: FC = ({children}) => {
    return (
        <section className='page-container'>
            {children}
        </section>
    );
};

export default PageContainer;
