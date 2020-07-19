import React, { ReactNode } from 'react';
import Head from 'next/head';

type Props = {
    children?: ReactNode;
    title?: string;
};

const Layout = ({ children, title = 'NIBM FOSS Community' }: Props) => (
    <div>
        <Head>
            <title>{title}</title>
            <meta charSet="utf-8" />
            <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        </Head>

        <header className="banner"></header>

        <main className="container-fluid">{children}</main>

        <footer></footer>
    </div>
);

export default Layout;
