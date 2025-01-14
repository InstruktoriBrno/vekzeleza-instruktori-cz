import {graphql, useStaticQuery} from 'gatsby';
import {FC} from 'react';
import {Helmet as ReactHelmet} from 'react-helmet';

export const PageMeta: FC = () => {
    const data = useStaticQuery<GatsbyTypes.SiteHelmetQuery>(graphql`
        query SiteHelmet {
            site {
                siteMetadata {
                    title
                    author
                    description
                    lang
                }
            }
        }
    `);
    const meta = data.site!.siteMetadata;

    return (
        <ReactHelmet
            htmlAttributes={{lang: meta!.lang}}
            title={meta!.title}
            meta={[
                {
                    name: 'description',
                    content: meta!.description,
                },
                {
                    property: 'og:title',
                    content: meta!.title,
                },
                {
                    property: 'og:description',
                    content: meta!.description,
                },
                {
                    property: 'og:type',
                    content: 'website',
                },
                {
                    name: 'twitter:card',
                    content: 'summary',
                },
                {
                    name: 'twitter:creator',
                    content: meta!.author,
                },
                {
                    name: 'twitter:title',
                    content: meta!.title,
                },
                {
                    name: 'twitter:description',
                    content: meta!.description,
                },
            ]}
        />
    );
};
