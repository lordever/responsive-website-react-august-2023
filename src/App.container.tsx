import MainBanner from "./components/main-banner/main.banner.component";
import About from "./components/about/about.component";
import Services from "./components/services/services.component";
import React from "react";
import i18n from "./i18n";
import {I18nextProvider} from 'react-i18next';
import Technology from "./components/technology/technology.component";
import ClientInfo from "./components/client-info/client-info.component";
import Testimonials from "./components/testimonials/testimonials.component";
import ContactUs from "./components/contact-us/contact-us.component";
import CommentForm from "./components/comment-form/comment-form.component";
import Footer from "./components/footer/footer.component";

const AppContainer = () => (
    <I18nextProvider i18n={i18n}>
        <MainBanner/>
        <About/>
        <Services/>
        <Technology/>
        <ClientInfo/>
        <Testimonials/>
        <ContactUs/>
        <CommentForm/>
        <Footer/>
    </I18nextProvider>
);

export default AppContainer;