import React from "react";
import Navbar from "../Commponants/Navbar/Navbar";
import Hero from "../Commponants/Hero/Hero";
import Custumer from "../Commponants/Custumer/Custumer";
import Ourservice from "../Commponants/Ourservice/Ourservice";
import Aboutcom from "../Commponants/Aboutcom/Aboutcom";
import Review from "../Commponants/Review/Review";
import Contactus from "../Commponants/Contactus/Contactus";
import Blogs from "../Commponants/Blogs/Blogs";
import Footer from "../Commponants/Footer/Footer";
import Gotop from "../Commponants/Gotutop/Gotop";

function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Custumer />
      <Ourservice />
      <Aboutcom />
      <Review />
      <Contactus />
      <Blogs />
      <Footer />
      <Gotop />
    </>
  );
}

export default Home;
