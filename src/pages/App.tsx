import React from 'react';
import PageHeader from '../components/common/PageHeader';
import PageContainer from '../components/common/PageContainer';

const App: React.FC = () => {
    return (
        <article>
            <PageHeader/>
            <PageContainer>
                Hello
            </PageContainer>
        </article>
    );
};

export default App;
