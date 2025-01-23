import {DefaultSeoProps} from 'next-seo';

const config: DefaultSeoProps = {
    additionalMetaTags: [{
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
    }],
    additionalLinkTags: [{
        rel: 'icon',
        href: '/favicon.ico'
    }],
};

export default config;