import React from "react";
import Navbar from "./components/Navbar";
import Header from "./components/Header";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import Footer from "./components/Footer";
import './App.css';

function App() {
    return (
        <>
            <Navbar />
            <Header />
            <SectionOne />
            <SectionTwo />
            <Footer />
        </>
    );
}

export default App;