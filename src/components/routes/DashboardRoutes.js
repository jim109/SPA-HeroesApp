import { Routes, Route } from "react-router-dom";

import { Navbar } from "../ui/Navbar"
import { DcScreen } from "../dc/DcScreen";

import { MarvelScreen } from "../marvel/MarvelScreen";
import { SearchScreen } from "../search/SearchScreen";
import { HeroScreen } from "../hero/HeroScreen";


export const DashboardRoutes = () => {
  return (
    <>
        
        <Navbar />
        <Routes>
            <Route path="/marvel" element={<MarvelScreen />} />
            <Route path="/dc" element={<DcScreen />} />

            <Route path="/search" element={<SearchScreen />} />
            <Route path="/hero" element={<HeroScreen />} />

            <Route path="/" element={<MarvelScreen />} />            
      </Routes>
    
    </>
  )
}
