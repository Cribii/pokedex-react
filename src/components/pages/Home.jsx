import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import { Link } from "react-router-dom";

/**
 *
 * @returns {JSX.Element}
 */

export const Home = () => (
  <DefaultLayout>
    <h1>Página Inicial</h1>
    <link to='/pokemon/1'>Enlace dummy de acceso a detalles de pokemon</link>
  </DefaultLayout>
);
export default Home;
