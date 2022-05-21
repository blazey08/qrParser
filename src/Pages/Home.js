import Search from './Search';
import Delete from './Delete';
import Upload from './Upload';
import Login from './Login'
import Main from './Main';
import Navbar from '../components/navbar';
import { Link, Routes, Route, Navigate } from 'react-router-dom';


export default function Home() {


    return (
        <div className="App">
            <header className="App-header">
                <title>QR Parsing Service</title>
                <Navbar />
            </header>
            <h1>Hello Choose what you want to do</h1>
        </div>
    )
}