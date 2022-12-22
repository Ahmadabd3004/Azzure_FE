import React, { useState, useEffect } from 'react';
import axios from 'axios';
const UseHome = () => {
    const [isForm, setIsForm] = useState(true);
    const [data, setData] = useState({
        NamaLengkap: "",
        TanggalLahir: "",
        Umur: "",
        AlamatLengkap: "",
        Kd_Provinsi: "",
        Kd_Kota: ""
    })

    const [rpTunggal, setRpTunggal] = useState({
        Pendidikan: "",
        Kd_Pendidikan: "",
        NamaSekolah: "",
        TanggalMulai: "",
        TanggalSelesai: ""
    })

    const [rpData, setRpData] = useState([

    ])
    const [srData, setSrData] = useState([

    ])

    let [dataPegawai, setDataPegawai] = useState([

    ])


    const [srTunggal, setSrTunggal] = useState({
        NamaBidang: "",
        Id_Bidang: "",
        DokumenSertifikat: "",
    })



    const [jenjangData, setJenjangData] = useState()
    const [provinsiData, setProvinsiData] = useState()
    const [kabupatenData, setKabupatenData] = useState()
    const [bidangData, setBidangData] = useState()

    const fetchProvinsi = async () => {
        const response = await axios.get("https://0871-180-252-172-207.ap.ngrok.io/api/v1/data_provinsi?size=34")
        setProvinsiData(response.data.data)
    }
    const fetchKabupaten = async () => {
        const response = await axios.get("https://0871-180-252-172-207.ap.ngrok.io/api/v1/data_kota?size=516")
        setKabupatenData(response.data.data)
    }

    const fetchJenjang = async () => {
        const response = await axios.get("https://0871-180-252-172-207.ap.ngrok.io/api/v1/data_pendidikan?size=14")
        setJenjangData(response.data.data)
    }
    const fetchBidang = async () => {
        const response = await axios.get("https://0871-180-252-172-207.ap.ngrok.io/api/v1/data_bidang")
        setBidangData(response.data.data)
    }

    const addDaftarPegawai = async () => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFAbWFpbC5jb20iLCJVc2VybmFtZSI6ImFhYSIsImlhdCI6MTY3MTcwNTI1NX0.HDvoRyjGLLScEW3N023e3ZrRpRpWe6090Z6HEvagtKA"
        const { data, RiwayatPendidikan, Sertifikasi } = dataPegawai[0]
        const response = await axios.post("https://0871-180-252-172-207.ap.ngrok.io/api/v1/daftar_pegawai", { Data: [data, RiwayatPendidikan, Sertifikasi] }, {
            headers: { 'Authorization': `Bearer ` + token }
        })
        // eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJFbWFpbCI6ImFAbWFpbC5jb20iLCJVc2VybmFtZSI6ImFhYSIsImlhdCI6MTY3MTcwNTI1NX0.HDvoRyjGLLScEW3N023e3ZrRpRpWe6090Z6HEvagtKA
        console.log(response)
    }


    const addRp = () => {
        jenjangData.forEach(e => {
            if (rpTunggal.Pendidikan == e.Pendidikan) {
                rpTunggal.Kd_Pendidikan = e.Kd_Pendidikan
            }
        });
        setRpData(rpData => [...rpData, rpTunggal])
    }

    const addSr = () => {
        setSrData(srData => [...srData, srTunggal])
    }

    const addPegawai = () => {
        const dataPribadi = JSON.parse(localStorage.getItem("data"));
        const rpData = JSON.parse(localStorage.getItem("rpData"));
        const srData = JSON.parse(localStorage.getItem("srData"));

        setDataPegawai(dataPegawai => [...dataPegawai, {
            data: dataPribadi,
            RiwayatPendidikan: rpData,
            Sertifikasi: srData,
        }])
    }

    useEffect(() => {
        fetchProvinsi();
        fetchKabupaten();
        fetchJenjang();
        fetchBidang();
    }, [])

    useEffect(() => {
        localStorage.setItem('data', JSON.stringify(data))
        // localStorage.setItem('rpData', JSON.stringify(rpData))
        // localStorage.setItem('srData', JSON.stringify(srData))
    }, [data])

    useEffect(() => {
        localStorage.setItem('rpData', JSON.stringify(rpData))
        // localStorage.setItem('rpData', JSON.stringify(rpData))
        // localStorage.setItem('srData', JSON.stringify(srData))

        console.log(rpData)
    }, [rpData])
    useEffect(() => {
        localStorage.setItem('srData', JSON.stringify(srData))
        // localStorage.setItem('rpData', JSON.stringify(rpData))
        // localStorage.setItem('srData', JSON.stringify(srData))

        console.log(srData)
    }, [srData])


    return {
        data,
        setData,
        provinsiData,
        kabupatenData,
        rpData,
        setRpData,
        jenjangData,
        rpTunggal,
        setRpTunggal,
        addRp,
        srTunggal,
        setSrTunggal,
        bidangData,
        addSr,
        srData,
        setSrData,
        dataPegawai,
        addPegawai,
        isForm,
        setIsForm,
        addDaftarPegawai
    }
}

export default UseHome;