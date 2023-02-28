import axios from 'axios'
import React, { useEffect, useState } from 'react'
import './MainPage.css'
function MainPage() {
    let [movie, setMovie] = useState([])
    let fetchData = async () => {
        try {
            let { data } = await axios.get("http://localhost:4000/api/movie")
            setMovie(data)
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData()
    }, [])
    return (
        <div>
            <div className="mainPgae">

                <div className="mainPageContainer">
                    <div className="header text-center">
                        <h1 className="heading">
                            BOOK YOUR
                        </h1>
                        <h1 className='heading2'>TICKETS FOR MOVIE</h1>
                    </div>
                    <p className='contant text-center'>Safe, secure, reliable ticketing.Your ticket to live entertainment!</p>
                    <div className="midContainer bg-black">

                        <div className="midSection">
                            <div className="mid">

                                <div className="midHeader">

                                    <h4>Welcome To Falcon</h4>
                                    <h3>WHAT ARE YOU LOOKING FOR</h3>
                                </div>
                                <div className="mid-btn">
                                    <button className='btn movieBtn btn-dark my-3'>MOVIE</button>
                                </div>

                            </div>
                            <div className="searchPanel">
                                <div className="seacrhSection">

                                    <form className="searchForm d-flex" role="search">
                                        <input className="form-control searchInput" type="search" placeholder="Search For A Movie" aria-label="Search" /><i className="fa-solid fa-magnifying-glass my-2"></i>
                                    </form>
                                </div>
                                <div className="place d-flex align-items-center justify-content-center">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuPTHRiXLGal0mXqN7p8jgATbs5mF3UTY8Kw&usqp=CAU" className='place' alt="" />
                                    <div className="btn-group city">
                                        <li className="dropdown-toggle pointer" data-bs-toggle="dropdown" aria-expanded="false">
                                            City
                                        </li>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Kota</a></li>
                                            <li><a className="dropdown-item" href="#">Jaipur</a></li>
                                            <li><a className="dropdown-item" href="#">Delhi</a></li>
                                            <li><a className="dropdown-item" href="#">NewYork</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="dateOfBooking">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoSnli1OBtnhZYCN7TvALi7t7yfFYeVZ1jWA&usqp=CAU" className='dateImg' alt="" />
                                    <div className="btn-group city">
                                        <li className="dropdown-toggle pointer" data-bs-toggle="dropdown" aria-expanded="false">
                                            Date
                                        </li>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">Action</a></li>
                                            <li><a className="dropdown-item" href="#">Another action</a></li>
                                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                                            <li><a className="dropdown-item" href="#">Separated link</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="cinema">
                                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNC44xQ7eoYWz5F4jcXUdv8AqVvld1imFAUQ&usqp=CAU" className='dateImg' alt="" />
                                    <div className="btn-group city">
                                        <li className="dropdown-toggle pointer" data-bs-toggle="dropdown" aria-expanded="false">
                                            Cinema
                                        </li>
                                        <ul className="dropdown-menu">
                                            <li><a className="dropdown-item" href="#">m.g Market</a></li>
                                            <li><a className="dropdown-item" href="#"> action Jackson</a></li>
                                            <li><a className="dropdown-item" href="#">Inox</a></li>
                                        </ul>
                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>

                    <div className="movieSection bg-black">
                        <div className="moviesWrapper ">
                            <div className="movieHeading">

                                <h1>Movies</h1>
                                <p>Be sure not to miss these Movies today.</p>
                            </div>
                            <div className="movieHead">
                                <button className='btn btn-dark'>NOW SHOWING</button>
                                <button className='btn btn-dark'>EXCLUSIVE</button>
                                <button className='btn btn-dark'>COMING SOON</button>
                            </div>
                        </div>
                    </div>
                    <div className="showMovies bg-black py-5 px-3">
                        <div className="moviesCard d-flex bg-black">
                            {
                                movie.map((item) => {
                                    return (

                                        <div className="movieList d-flex" key={item._id}>
                                            <div className="card bg-black mx-2" style={{ width: "18rem" }}>
                                                <img src={item.posterUrl} className="card-img-top" alt="..." />
                                                <div className="card-body">
                                                    <p>{item.name}</p>
                                                    <p className="card-text">{item.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default MainPage
