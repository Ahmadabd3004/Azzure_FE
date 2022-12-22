import Head from 'next/head'
import RegistrasiContainer from '../containers/registrasi-page';

export default function RegistrasiPage() {
    return (
        <>
            <Head>
                <title>Registrasi</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/logo.svg" />
            </Head>
            <RegistrasiContainer />
        </>
    )
}