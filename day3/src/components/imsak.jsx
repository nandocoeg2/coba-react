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

const kabkota = async (id) => {
    const query = await getKota(id);
    console.log(query);
}

    return (
    <>
    <input type="text" placeholder="Provinsi" list="provinsi" onChange={(id) => kabkota(id.target.value)} />
    </>
    );
}

export default Imsak;