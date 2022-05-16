import axios from "axios";
import to from "../utils/to.js";
import { default as FormData } from "form-data";

const getDocuments = async (orderID) => {

    const data = new FormData();
    data.append('io_mode', 'json');
    data.append('do_in', `{"method":"Document.getList","params":{"doctype": "order", "search": {"ident":"${orderID}"}}}`);
    const timestamp = + new Date()
    const config = {
        method: 'post',
        url: 'https://apifeed.sellsy.com/0/',
        headers: {
            'Authorization': `OAuth oauth_consumer_key="873b92709d91f3bb7dd0fa65f7a95db3188658d7"\
            ,oauth_token="6bbd08fad5e7c8e25a63743408a165bf549122d8",oauth_signature_method="PLAINTEXT"\
            ,oauth_timestamp="${timestamp}",oauth_nonce="a697BFoGrZ5",oauth_version="1.0",\
            oauth_signature="132b313831ae7653971c236fd8a946500f87f09f%2694c29b466203e5307f6b9add673c7c695492a5ad"`,
            ...data.getHeaders()
        },
        data: data
    };

    const [error, result] = await to(axios(config))

    return error ? [reponse?.result.data.message] : [null, result.data]
}

const getContact = async (clientID) => {

    const data = new FormData();
    data.append('io_mode', 'json');
    data.append('do_in', `{"method":"Peoples.getList","params":{"search": {"customfields": [{"cfid": "${process.env.CFID_CLIENT_ID}", "value": "${ident}"}]}}}`);


    const timestamp = + new Date()
    const config = {
        method: 'post',
        url: 'https://apifeed.sellsy.com/0/',
        headers: {
            'Authorization': `OAuth oauth_consumer_key="873b92709d91f3bb7dd0fa65f7a95db3188658d7"\
            ,oauth_token="6bbd08fad5e7c8e25a63743408a165bf549122d8",oauth_signature_method="PLAINTEXT"\
            ,oauth_timestamp="${timestamp}",oauth_nonce="a697BFoGrZ5",oauth_version="1.0",\
            oauth_signature="132b313831ae7653971c236fd8a946500f87f09f%2694c29b466203e5307f6b9add673c7c695492a5ad"`,
            ...data.getHeaders()
        },
        data: data
    };

    const [error, result] = await to(axios(config))

    return error ? error : null, result.data
}
const geClientrById = async (clientID) => {

    const data = new FormData();
    data.append('io_mode', 'json');
    data.append('do_in', `{"method":"Client.getList","params":{"search": {"ident": "${clientID}"}}}`);

    const timestamp = + new Date()
    const config = {
        method: 'post',
        url: 'https://apifeed.sellsy.com/0/',
        headers: {
            'Authorization': `OAuth oauth_consumer_key="873b92709d91f3bb7dd0fa65f7a95db3188658d7"\
            ,oauth_token="6bbd08fad5e7c8e25a63743408a165bf549122d8",oauth_signature_method="PLAINTEXT"\
            ,oauth_timestamp="${timestamp}",oauth_nonce="a697BFoGrZ5",oauth_version="1.0",\
            oauth_signature="132b313831ae7653971c236fd8a946500f87f09f%2694c29b466203e5307f6b9add673c7c695492a5ad"`,
            ...data.getHeaders()
        },
        data: data
    };

    const [error, result] = await to(axios(config))

    return error ? error : null, result.data
}

const getClientByIdAndCfid = async (clientID) => {
    const data = new FormData();
    data.append('io_mode', 'json');
    data.append('do_in', `{"method":"Client.getList","params":{"search": {"customfields": [{"cfid": "${process.env.CFID_CLIENT_ID}", "value": "${clientID}"}]}}}`);

    const timestamp = + new Date()
    const config = {
        method: 'post',
        url: 'https://apifeed.sellsy.com/0/',
        headers: {
            'Authorization': `OAuth oauth_consumer_key="873b92709d91f3bb7dd0fa65f7a95db3188658d7"\
            ,oauth_token="6bbd08fad5e7c8e25a63743408a165bf549122d8",oauth_signature_method="PLAINTEXT"\
            ,oauth_timestamp="${timestamp}",oauth_nonce="a697BFoGrZ5",oauth_version="1.0",\
            oauth_signature="132b313831ae7653971c236fd8a946500f87f09f%2694c29b466203e5307f6b9add673c7c695492a5ad"`,
            ...data.getHeaders()
        },
        data: data
    };

    const [error, result] = await to(axios(config))

    return error ? [reponse?.result?.data?.message] : null, result.data
}

const getClientrByMail = async (clientEmail) => {
    const data = new FormData();
    data.append('io_mode', 'json');
    data.append('do_in', `{"method":"Client.getList","params":{"search": {"email": "${clientEmail}"}}}`);


    const timestamp = + new Date()
    const config = {
        method: 'post',
        url: 'https://apifeed.sellsy.com/0/',
        headers: {
            'Authorization': `OAuth oauth_consumer_key="873b92709d91f3bb7dd0fa65f7a95db3188658d7"\
            ,oauth_token="6bbd08fad5e7c8e25a63743408a165bf549122d8",oauth_signature_method="PLAINTEXT"\
            ,oauth_timestamp="${timestamp}",oauth_nonce="a697BFoGrZ5",oauth_version="1.0",\
            oauth_signature="132b313831ae7653971c236fd8a946500f87f09f%2694c29b466203e5307f6b9add673c7c695492a5ad"`,
            ...data.getHeaders()
        },
        data: data
    };

    const [error, result] = await to(axios(config))

    return error ? [reponse?.result.data.message] : null, result.data
}


const getClientByProspectId = async (mail, full = false) => {
    const data = new FormData();
    data.append('io_mode', 'json');
    data.append('do_in', `{"method":"Client.getList","params":{"search": {"email": "${mail}"}}}`);

    const timestamp = + new Date()
    const config = {
        method: 'post',
        url: 'https://apifeed.sellsy.com/0/',
        headers: {
            'Authorization': `OAuth oauth_consumer_key="873b92709d91f3bb7dd0fa65f7a95db3188658d7"\
            ,oauth_token="6bbd08fad5e7c8e25a63743408a165bf549122d8",oauth_signature_method="PLAINTEXT"\
            ,oauth_timestamp="${timestamp}",oauth_nonce="a697BFoGrZ5",oauth_version="1.0",\
            oauth_signature="132b313831ae7653971c236fd8a946500f87f09f%2694c29b466203e5307f6b9add673c7c695492a5ad"`,
            ...data.getHeaders()
        },
        data: data
    };

    const [error, result] = await to(axios(config))

    return error ? [reponse?.result.data.message] : null, result.data
}
const getProspectByMail = async (mail, full = false) => {
    const data = new FormData();
    data.append('io_mode', 'json');
    data.append('do_in', `{"method":"Prospects.getList","params":{"search": {"email": "${mail}"}}}`);

    const timestamp = + new Date()
    const config = {
        method: 'post',
        url: 'https://apifeed.sellsy.com/0/',
        headers: {
            'Authorization': `OAuth oauth_consumer_key="873b92709d91f3bb7dd0fa65f7a95db3188658d7"\
            ,oauth_token="6bbd08fad5e7c8e25a63743408a165bf549122d8",oauth_signature_method="PLAINTEXT"\
            ,oauth_timestamp="${timestamp}",oauth_nonce="a697BFoGrZ5",oauth_version="1.0",\
            oauth_signature="132b313831ae7653971c236fd8a946500f87f09f%2694c29b466203e5307f6b9add673c7c695492a5ad"`,
            ...data.getHeaders()
        },
        data: data
    };

    const [error, result] = await to(axios(config))

    return error ? [reponse?.result.data.message] : null, result.data
}

const getClientByProspecMail = async (mail, full = false) => {
    const data = new FormData();
    data.append('io_mode', 'json');
    data.append('do_in', `{"method":"Client.getList","params":{"search": {"email": "${mail}"}}}`);

    const timestamp = + new Date()
    const config = {
        method: 'post',
        url: 'https://apifeed.sellsy.com/0/',
        headers: {
            'Authorization': `OAuth oauth_consumer_key="873b92709d91f3bb7dd0fa65f7a95db3188658d7"\
            ,oauth_token="6bbd08fad5e7c8e25a63743408a165bf549122d8",oauth_signature_method="PLAINTEXT"\
            ,oauth_timestamp="${timestamp}",oauth_nonce="a697BFoGrZ5",oauth_version="1.0",\
            oauth_signature="132b313831ae7653971c236fd8a946500f87f09f%2694c29b466203e5307f6b9add673c7c695492a5ad"`,
            ...data.getHeaders()
        },
        data: data
    };

    const [error, result] = await to(axios(config))

    return error ? [reponse?.result.data.message] : null, result.data
}



export {
    getClientByProspectId,
    geClientrById,
    getClientByIdAndCfid,
    getClientrByMail,
    getDocuments,
    getProspectByMail,
    getContact
}
