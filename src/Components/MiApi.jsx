import React from 'react'
import Table from 'react-bootstrap/Table';
import Buscador from './Buscador'
import { useEffect, useState } from "react";


const MiApi = () => {
    const [universidades, setUniversidades] = useState([])
    const [search, setSearch] = useState('')
    const api_url = "http://universities.hipolabs.com/search?country";

    const getUniversidades = async () => {
        try {
            const response = await fetch(api_url);
            const data = await response.json();

            data.sort((a, b) => {
            if (a.name.toLowerCase() > b.name.toLowerCase()) {
            return 1;
            }
            if (a.name.toLowerCase() < b.name.toLowerCase()) {
            return -1;
            }
            // a deberia ser igual a b
            return 0;
            });

            setUniversidades(data);
        } catch (error) {
            console.log(error);
        }
    };


    const makeHead = () => {
        let headUniversidades = []
        const selectHeads = []

        universidades.map((universidad, index) => {
            if (index == 0) {
                headUniversidades = Object.keys(universidad)

                headUniversidades.map((headUniversidad) => {
                    if (headUniversidad == 'country' || headUniversidad == 'name' || headUniversidad == 'web_pages' || headUniversidad == 'alpha_two_code') {
                        selectHeads.push(headUniversidad)
                    }
                })
                swap(selectHeads, 0, 2)
                swap(selectHeads, 1, 3)
                swap(selectHeads, 2, 3)
            }
        })
        return selectHeads.map((selectHead) => <th key={selectHead}>{selectHead}</th> )
    }

    const swap = (arr, idx1, idx2) => {
        const aux = arr[idx1]
        arr[idx1] = arr[idx2]
        arr[idx2] = aux
    }


    const handleSearch = (valor) => {
        setSearch(valor)
    }


    useEffect(() => {
        if (search == "") {
            getUniversidades();
        } else {
            setUniversidades(universidades.filter((universidad) => 
            universidad.name.toLowerCase().includes(search) || 
            universidad.country.toLowerCase().includes(search) ))
        }
    }, [search]);


    useEffect(() => {
        getUniversidades();
    }, []);


    return (

        <>
        <Buscador
            hASearch={handleSearch}
        />
        <Table responsive striped bordered hover variant="primary" size="sm">
            <thead>
                <tr>
                    {makeHead()}
                </tr>
            </thead>
            <tbody>
                {
                    universidades.map((universidad, index) => {
                    return (
                        <tr key={index}>
                            <td key={"name" + index}>{universidad.name}</td>
                            <td key={"country" + index}>{universidad.country}</td> 
                            <td key={"webpages" + index}><a href={universidad.web_pages} target="_blank">{universidad.web_pages}</a></td>
                            <td key={"alphatwocode" + index}>{universidad.alpha_two_code}</td> 
                        </tr>
                    );
                    })
                }
            </tbody>
        </Table>
        </>
    )
}

export default MiApi