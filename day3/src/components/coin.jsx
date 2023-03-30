import axios from "axios";
import React, { useEffect, useState } from "react";

function ambilProduk () {
    const [produk, setProduk] = useState([]);

    useEffect(() => {
        const url = "https://dummyjson.com/products"
        axios.get(url).then((res) => {
            setProduk(res.data);
        });
    }, []);
    console.log(produk);

    return <div>
        <h1>Produk</h1>
    </div>;

}

export default ambilProduk;