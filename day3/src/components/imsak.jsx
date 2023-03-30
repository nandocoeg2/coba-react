import {getProvinsi, getKota, getJadwal} from "./api";
import React, {useEffect, useState} from "react";

const Imsak = () => {

    const [provinsi, setProvinsi] = useState([]);

    useEffect(() => {
        getProvinsi().then((res) => {
            setProvinsi(res);
        });
    }, []);

    console.log(provinsi);



    return (
    <>
    <select>
        {provinsi ? provinsi.map((prov) => {
            return <option key={prov.data} value={prov.data}>{prov.data}</option>
        }) : null}
    </select>
    </>
    );
}

export default Imsak;