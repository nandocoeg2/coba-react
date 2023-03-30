import axios from 'axios';

const baseUrl = 'https://equran.id/api/v2/imsakiyah';

export const getProvinsi = async () => {
    const Provinsi = await axios.get(`${baseUrl}/provinsi`);
    return Provinsi.data;
}

export const getKota = async (id) => {
    const Kota = await axios.post(`${baseUrl}/kabkota/`,
    {
        Headers: {
            'Content-Type': 'application/json',
            'Host': 'equran.id',
            'Accept': `*/*`
        },
        "provinsi":`${id}`
    });

    return Kota.data;
}
