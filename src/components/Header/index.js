import React from "react";
import RMDBLogo from '../../images/react-movie-logo.svg';
import TMDBLogo from '../../images/tmdblogo.svg';
import { Wrapper, Content, LogoImg, TMDBLogoIMg } from "./Header.styles";

const Header = () => (
    <Wrapper>
        <Content>
            <LogoImg src={RMDBLogo} alt='rmdb-logo' />
            <TMDBLogoImg src={TMDBLogo} alt='tmdb-logo' />
        </Content>
    </Wrapper>
);

export default Header;