import React from "react";
import { Route, Routes } from "react-router";
import Brooches from "./Brooches";
import Chains from "./Chains";
import Earrings from "./Earrings";
import FashionRings from "./FashionRings";
import GoldRings from "./GoldRings";
import HomePage from "./HomePage";
import KidsJewellery from "./KidsJewellery";
import MensRings from "./MensRings";
import Necklaces from "./Necklaces";
import Pendants from "./Pendants";

const Main = () => {
  return (
    <Routes>
      <Route path="/*" element={<HomePage />} />
      <Route path="/earrings" element={<Earrings />} />
      <Route path="/necklaces" element={<Necklaces />} />
      <Route path="/pendants" element={<Pendants />} />
      <Route path="/chains" element={<Chains />} />
      <Route path="/goldRings" element={<GoldRings />} />
      <Route path="/mensRings" element={<MensRings />} />
      <Route path="/kidsJewellery" element={<KidsJewellery />} />
      <Route path="/fashionRings" element={<FashionRings />} />
      <Route path="/brooches" element={<Brooches />} />
    </Routes>
  );
};

export default Main;
