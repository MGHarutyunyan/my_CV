import React, {useState, useEffect} from 'react';

import classes from "./hider_div.module.css";
import {Button, TextField} from "@mui/material";
import {GridDeleteIcon} from "@mui/x-data-grid";


const HiderDiv = () => {


    let [inp, setInp] = useState('')
    let [add, setAdd] = useState([])



    function InpUT(event) {
        setInp(event.target.value)


    }
    function Add() {
        if (inp) {
            setAdd([...add, {
                id: add.length ? add[add.length - 1].id + 1 : 1,
                name: inp
            }])
        }

        setInp("")
    }


    useEffect(() => {
        if (!localStorage['infolabel']) {
            return
        }
        let locStr = JSON.parse(localStorage['infolabel'])
        if (!locStr.length) {
            return
        }
        setAdd(locStr)

    }, [])

    useEffect(() => {

        localStorage['infolabel'] = JSON.stringify(add)

    }, [add])

    function hendleDelete(id) {
        setAdd(add.filter(value => value.id !== +id))

    }


    //2
    let [inpEducetion, setInpEducetion] = useState('')
    let [addEducetion, setAddEducetion] = useState([])


    function InpUTEducation(event) {
        setInpEducetion(event.target.value)
    }

    function AddEducettion() {
        if (inpEducetion) {
            setAddEducetion([...addEducetion, {
                id: addEducetion.length ? addEducetion[addEducetion.length - 1].id + 1 : 1,
                name: inpEducetion
            }])
        }
        setInpEducetion("")
    }


    useEffect(() => {
        if (!localStorage['Education']) {
            return
        }
        let locStr = JSON.parse(localStorage['Education'])
        if (!locStr.length) {
            return
        }
        setAddEducetion(locStr)

    }, [])

    useEffect(() => {
        localStorage['Education'] = JSON.stringify(addEducetion)

    }, [addEducetion])


    function hendleDeleteEducation(id) {
        setAddEducetion(addEducetion.filter(value => value.id !== +id))

    }


    ///3
    let [inpHobi, setInpHobi] = useState('')
    let [addHobi, setAddHobi] = useState([])

    function InpUTEHobi(event) {
        setInpHobi(event.target.value)
    }

    function addHobiInteresting() {
        if (inpHobi) {
            setAddHobi([...addHobi, {
                id: addHobi.length ? addHobi[addHobi.length - 1].id + 1 : 1,
                name: inpHobi
            }])
            setInpHobi("")
        }
    }


    useEffect(() => {
        if (!localStorage['Hobi']) {
            return
        }
        let locStr = JSON.parse(localStorage['Hobi'])
        if (!locStr.length) {
            return
        }
        setAddHobi(locStr)

    }, [])


    useEffect(() => {
        localStorage['Hobi'] = JSON.stringify(addHobi)

    }, [addHobi])


    function hendleDeleteHobi(id) {
        setAddHobi(addHobi.filter(value => value.id !== +id))

    }


///4


    let [inpSertificat, setInpSertificat] = useState('')
    let [addSertificat, setAddSertificat] = useState([])

    function InpUTESertificat(event) {
        setInpSertificat(event.target.value)
    }


    function addHobiSertificat() {
        if (inpSertificat) {
            setAddSertificat([...addSertificat, {
                id: addSertificat.length ? addSertificat[addSertificat.length - 1].id + 1 : 1,
                name: inpSertificat
            }])
            setInpSertificat("")
        }
    }


    useEffect(() => {
        if (!localStorage['Sertificat']) {
            return
        }
        let locStr = JSON.parse(localStorage['Sertificat'])
        if (!locStr.length) {
            return
        }
        setAddSertificat(locStr)

    }, [])

    useEffect(() => {
        localStorage['Sertificat'] = JSON.stringify(addSertificat)

    }, [addSertificat])

    function hendleSertification(id) {
        setAddSertificat(addSertificat.filter(value => value.id !== +id))
    }


    ////5


    let [inpSkills, setInpSkills] = useState('')
    let [addSkills, setAddSkills] = useState([])

    function InpUTESkill(event) {
        setInpSkills(event.target.value)
    }


    function addHSkills() {
        if (inpSkills) {
            setAddSkills([...addSkills, {
                id: addSkills.length ? addSkills[addSkills.length - 1].id + 1 : 1,
                name: inpSkills
            }])
        }
        setInpSkills("")
    }

    useEffect(() => {
        if (!localStorage['Skills']) {
            return
        }
        let locStr = JSON.parse(localStorage['Skills'])
        if (!locStr.length) {
            return
        }
        setAddSkills(locStr)

    }, [])

    useEffect(() => {
        localStorage['Skills'] = JSON.stringify(addSkills)

    }, [addSkills])


    function hendleSkilss(id) {
        setAddSkills(addSkills.filter(value => value.id !== +id))
    }


    /////6


    let [inpLenguge, setInpLenguge] = useState('')
    let [addLenguge, setAddLenguge] = useState([])

    function InpUTELenguge(event) {
        setInpLenguge(event.target.value)
    }


    function addHLenguge() {
        if (inpLenguge) {
            setAddLenguge([...addLenguge, {
                id: addLenguge.length ? addLenguge[addLenguge.length - 1].id + 1 : 1,
                name: inpLenguge
            }])

            setInpLenguge("")
        }
    }


    useEffect(() => {
        if (!localStorage['Lenguge']) {
            return
        }
        let locStr = JSON.parse(localStorage['Lenguge'])
        if (!locStr.length) {
            return
        }
        setAddLenguge(locStr)

    }, [])

    useEffect(() => {
        localStorage['Lenguge'] = JSON.stringify(addLenguge)

    }, [addLenguge])

    function hendlelengDelete(id) {
        setAddLenguge(addLenguge.filter(value => value.id !== +id))
    }


////////7


    let [inpInformation, setInpInformation] = useState('')
    let [addInformation, setAddInformation] = useState([])


    function InpUTEInformation(event) {
        setInpInformation(event.target.value)
    }


    function addHInformation() {
        if (inpInformation) {
            setAddInformation([...addInformation, {
                id: addInformation.length ? addInformation[addInformation.length - 1].id + 1 : 1,
                name: inpInformation
            }])
        }
        setInpInformation("")
    }


    useEffect(() => {
        if (!localStorage['information']) {
            return
        }
        let locStr = JSON.parse(localStorage['information'])
        if (!locStr.length) {
            return
        }
        setAddInformation(locStr)

    }, [])

    useEffect(() => {
        localStorage['information'] = JSON.stringify(addInformation)

    }, [addInformation])


    function hendleInfoDelete(id) {
        setAddInformation(addInformation.filter(value => value.id !== +id))
    }





    return (


        <div className={classes.HiderDiv}>



            <div className={classes.first_div}>

                <div className={classes.divCv}>
                    <div className={classes.Div_atributs_sv}>
                        <h2> Աշխատանքային փորձ</h2>
                        <p>Ավելացրեք Ձեր աշխատանքային փորձը</p>

                        <div>
                            <TextField onChange={InpUT} value={inp} id="filled-basic" label="Filled" variant="filled"/>
                        </div>
                        <ul>
                            {

                                add.length ? add.map(res => {
                                    return (

                                        <li key={res.id}>
                                            {res.name}
                                            <Button style={{marginLeft: "5px", marginBottom: "9px"}}
                                                    onClick={() => hendleDelete(res.id)} variant="outlined"
                                                    startIcon={<GridDeleteIcon/>}>
                                                Delete
                                            </Button>

                                        </li>
                                    )
                                }) : ""
                            }
                        </ul>

                    </div>

                    <div className={classes.BtnBod}>
                        <button onClick={Add}>+</button>
                    </div>


                </div>


                <div className={classes.divCv}>


                    <div className={classes.Div_atributs_sv}>

                        <h2> Կրթություն</h2>
                        <p>Ավելացրեք Ձեր կրթությունը</p>
                        <div>
                            <TextField onChange={InpUTEducation} value={inpEducetion} id="filled-basic" label="Filled"
                                       variant="filled"/>
                        </div>
                        <ul>
                            {

                                addEducetion.length ? addEducetion.map((res) => {
                                    return (

                                        <li key={res.id}>
                                            {res.name}
                                            <Button style={{marginLeft: "5px", marginBottom: "9px"}}
                                                    onClick={() => hendleDeleteEducation(res.id)} variant="outlined"
                                                    startIcon={<GridDeleteIcon/>}>
                                                Delete
                                            </Button>
                                        </li>

                                    )
                                }) : ""
                            }
                        </ul>
                    </div>


                    <div className={classes.BtnBod}>
                        <button onClick={AddEducettion}>+</button>
                    </div>

                </div>


                <div className={classes.divCv}>
                    <div className={classes.Div_atributs_sv}>
                        <h2> Հետաքրքրություններ և հոբիներ</h2>
                        <p>Ավելացրեք Ձեր հետաքրքրություններն ու հոբիները
                        </p>
                        <div>
                            <TextField onChange={InpUTEHobi} value={inpHobi} id="filled-basic" label="Filled"
                                       variant="filled"/>
                        </div>
                        <ul>
                            {

                                addHobi.length ? addHobi.map((res) => {
                                    return (

                                        <li key={res.id}>
                                            {res.name}

                                            <Button style={{marginLeft: "5px", marginBottom: "9px"}}
                                                    onClick={() => hendleDeleteHobi(res.id)} variant="outlined"
                                                    startIcon={<GridDeleteIcon/>}>
                                                Delete
                                            </Button>

                                        </li>


                                    )
                                }) : ""
                            }
                        </ul>
                    </div>
                    <div className={classes.BtnBod}>
                        <button onClick={addHobiInteresting}>+</button>
                    </div>
                </div>


                <div className={classes.divCv}>
                    <div className={classes.Div_atributs_sv}>
                        <h2>Սերտիֆիկատներ</h2>
                        <p>Ավելացրեք Ձեր սերտիֆիկատները</p>
                        <div>
                            <TextField onChange={InpUTESertificat} value={inpSertificat} id="filled-basic"
                                       label="Filled" variant="filled"/>
                        </div>

                        <ul>
                            {

                                addSertificat.length ? addSertificat.map((res) => {
                                    return (

                                        <li key={res.id}>{res.name}

                                            <Button style={{marginLeft: "5px", marginBottom: "9px"}}
                                                    onClick={() => hendleSertification(res.id)} variant="outlined"
                                                    startIcon={<GridDeleteIcon/>}>
                                                Delete
                                            </Button>
                                        </li>


                                    )
                                }) : ""
                            }
                        </ul>
                    </div>
                    <div className={classes.BtnBod}>
                        <button onClick={addHobiSertificat}>+</button>
                    </div>
                </div>


            </div>


            <div className={classes.first_div}>
                <div className={classes.divCv}>
                    <div className={classes.Div_atributs_sv}>
                        <h2>Հմտություններ</h2>
                        <p>Ավելացրեք Ձեր հմտությունները</p>
                        <div>
                            <TextField onChange={InpUTESkill} value={inpSkills} id="filled-basic" label="Filled"
                                       variant="filled"/>
                        </div>

                        <ul>
                            {

                                addSkills.length ? addSkills.map((res) => {
                                    return (

                                        <li key={res.id}>{res.name}
                                            <Button style={{marginLeft: "5px", marginBottom: "9px"}}
                                                    onClick={() => hendleSkilss(res.id)} variant="outlined"
                                                    startIcon={<GridDeleteIcon/>}>
                                                Delete
                                            </Button>

                                        </li>


                                    )
                                }) : ""
                            }
                        </ul>
                    </div>
                    <div className={classes.BtnBod}>
                        <button onClick={addHSkills}>+</button>
                    </div>


                </div>


                <div className={classes.divCv}>
                    <div className={classes.Div_atributs_sv}>
                        <h2>Լեզուներ</h2>
                        <p style={{color: "#998aff"}}>Ավելացրեք Ձեր լեզուները

                        </p>
                        <div>
                            <TextField onChange={InpUTELenguge} value={inpLenguge} id="filled-basic" label="Filled"
                                       variant="filled"/>
                        </div>

                        <ul>
                            {

                                addLenguge.length ? addLenguge.map((res) => {
                                    return (

                                        <li key={res.id}>{res.name}

                                            <Button style={{marginLeft: "5px", marginBottom: "9px"}}
                                                    onClick={() => hendlelengDelete(res.id)} variant="outlined"
                                                    startIcon={<GridDeleteIcon/>}>
                                                Delete
                                            </Button>
                                        </li>


                                    )
                                }) : ""
                            }
                        </ul>
                    </div>
                    <div className={classes.BtnBod}>
                        <button onClick={addHLenguge}>+</button>
                    </div>
                </div>


                <div className={classes.divCv}>
                    <div className={classes.Div_atributs_sv}>
                        <h2> Լրացուցիչ տեղեկություն</h2>
                        <p style={{color: "#35b1ad"}}>Ավելացրեք Ձեր մասին լրացուցիչ տեղեկություն</p>
                        <div>
                            <TextField onChange={InpUTEInformation} value={inpInformation} id="filled-basic"
                                       label="Filled" variant="filled"/>
                        </div>

                        <ul>
                            {

                                addInformation.length ? addInformation.map((res) => {
                                    return (

                                        <li key={res.id}>{res.name}

                                            <Button style={{marginLeft: "5px", marginBottom: "9px"}}
                                                    onClick={() => hendleInfoDelete(res.id)} variant="outlined"
                                                    startIcon={<GridDeleteIcon/>}>
                                                Delete
                                            </Button>
                                        </li>


                                    )
                                }) : ""
                            }
                        </ul>
                    </div>
                    <div className={classes.BtnBod}>
                        <button onClick={addHInformation}>+</button>
                    </div>
                </div>


            </div>


        </div>

    );
};

export default HiderDiv;
