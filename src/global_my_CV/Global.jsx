import React from 'react';
import {Box, Container} from "@mui/material";
import Hider from "../nav_Bar/hider";
import Mybod from "../my_body/mybod";
import HiderDiv from "../hiderDiv/hiderDiv";
import HiderNAv from "../hiderNAv/hiderNAv";


const Global = () => {
    return (
        <div >

<Container>

                <Hider/>
                <Mybod/>
                <HiderDiv/>
                <HiderNAv/>
</Container>
        </div>
    );
};

export default Global;