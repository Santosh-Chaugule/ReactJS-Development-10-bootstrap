import React from 'react'
import Header from './components/layout/Header'
import Footer from './components/layout/Footer'
import './Style.css'
import Section from './components/layout/Section'
import Aside from './components/layout/Aside'
export default function App() {
    return (
        <>
            <Header></Header>
            <main><div className='container h-100 s_tbdr'>

                <div className='row h-100'>
                    <Aside>Left</Aside>
                    <Section></Section>
                    <Aside>Right</Aside>
                </div>

            </div></main>
            <Footer></Footer>
        </>
    )
}
