import React, { useState } from 'react'
import { ReactComponent as Htmle } from '../img/logo/html.svg'
import { ReactComponent as Css } from '../img/logo/css.svg'
import { ReactComponent as Bootstrap } from '../img/logo/bootstrap.svg'
import { ReactComponent as Javascript } from '../img/logo/javascript.svg'
import { ReactComponent as Json } from '../img/logo/json.svg'
import { ReactComponent as Reacte } from '../img/logo/reactjs.svg'
import { ReactComponent as Php } from '../img/logo/php.svg'
import { ReactComponent as Mysql } from '../img/logo/mysql.svg'
import { ReactComponent as Nodejs } from '../img/logo/nodejs.svg'
import { ReactComponent as Express } from '../img/logo/express.svg'
import { ReactComponent as Wordpress } from '../img/logo/wordpress.svg'
import { ReactComponent as MongoDb } from '../img/logo/mongodb.svg'

export default function Skills() {



    return (
        <div className='skii'>
            <h1 className='tit'>Mes compétences</h1>
            <h2 className='sous'>Web Design et Integration</h2>

            <div className='globe'>

                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='cs' />
                    </svg>
                    <Htmle className='saa' /><span>75%</span>
                </div>




                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='htm' />
                    </svg>
                    <Css className='sa' /><span>65%</span>
                </div>

                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='htm' />
                    </svg>
                    <Bootstrap className='sa' /><span>65%</span>
                </div>





            </div>
            <h2 className='sous'>Front-end</h2>


            <div className='globe'>

                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='javascript' />
                    </svg>
                    <Javascript className='sa' /><span>55%</span>
                </div>




                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='json' />
                    </svg>
                    <Json className='sa' /><span>30%</span>
                </div>


                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='javascript' />
                    </svg>
                    <Reacte className='sa' /><span>55%</span>
                </div>



            </div>

            <h2 className='sous'>Back-end</h2>

            <div className='globe'>
                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='javascript' />
                    </svg>
                    <Mysql className='sa' /><span>55%</span>
                </div>



                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='javascript' />
                    </svg>
                    <Nodejs className='sa' /><span>55%</span>
                </div>



                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='json' />
                    </svg>
                    <Express className='sa' /><span>30%</span>
                </div>



                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='javascript' />
                    </svg>
                    <Wordpress className='sa' /><span>55%</span>
                </div>


                <div className='te'>
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                        <defs>
                            <linearGradient id="GradientColor">
                                <stop offset="0%" stopColor="#e91e63" />
                                <stop offset="100%" stopColor="#673ab7" />
                            </linearGradient>
                        </defs>
                        <circle cx="80" cy="80" r="70" strokeLinecap="round" className='json' />
                    </svg>
                    <Php className='sa' /><span>30%</span>
                </div>

                <div className='te'>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="160px" height="160px">

                <defs>
                    <linearGradient id="GradientColor">
                        <stop offset="0%" stopColor="#e91e63" />
                        <stop offset="100%" stopColor="#673ab7" />
                    </linearGradient>
                </defs>
                <circle cx="80" cy="80" r="70" strokeLinecap="round" className='json' />
            </svg>
            <MongoDb className='sa'/><span>30%</span>
            </div>

            </div>

        </div>
    )
}
