import React from 'react';
import './Project.css'
import proRrepair from '../../Project Image/pro-repair-project.png';
import shoppingFair from '../../Project Image/shopping-fair-project.png';
import dhakarChaka from '../../Project Image/dhakar-chaka-project.png';

const Projects = () => {
    const fakeData = [
        {
            name: 'Pro Repair',
            projectImg: proRrepair,
            website: 'https://pro-repair-service.web.app/',
            clientSideCode: 'https://github.com/Dipta-prog/pro-repair-client',
            serverSideCode: 'https://github.com/Dipta-prog/pro-repair-server',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, hic sint? Blanditiis minus, ratione dolorem repudiandae rerum tempora. Repudiandae, amet.',
        },
        {
            name: 'Shopping Fair',
            projectImg: shoppingFair,
            website: 'https://fresh-valley-auth.web.app/',
            clientSideCode: 'https://github.com/Dipta-prog/shopping-fair-client',
            serverSideCode: 'https://github.com/Dipta-prog/shopping-fair-server',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, hic sint? Blanditiis minus, ratione dolorem repudiandae rerum tempora. Repudiandae, amet.',
        },
        {
            name: 'Dhakar Chaka',
            projectImg: dhakarChaka,
            website: 'https://urban-raiders-762ed.web.app/',
            clientSideCode: 'https://github.com/Dipta-prog/dhakar-chaka',
            serverSideCode: '',
            description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, hic sint? Blanditiis minus, ratione dolorem repudiandae rerum tempora. Repudiandae, amet.',
        },

    ]
    return (
        <div>
            <h3 id="about-projects-title">Projects</h3>
            <div className="container-fluid">
                <div class="row projects-row">
                    {/* <!-- the cols in this div change the number of cards per row depending on screen size and the mb-4 adds space below cards if they spill over into the next row--> */}
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="card card-projects">
                            <div className="text-center">
                                <a className="project-links project-link-one" target="_blank" href={fakeData[0].website}>Live Site</a>
                                <a className="project-links mt-5 project-link-two" target="_blank" href={fakeData[0].clientSideCode}>Client Code</a>
                                <a className="project-links project-link-three" target="_blank" href={fakeData[0].serverSideCode}>Server Code</a>
                            </div>
                            <img class="card-img-top" src={fakeData[0].projectImg} alt="Card image cap"></img>
                            <div class="card-body">
                                <h3>{fakeData[0].name}</h3>
                                <p class="card-text">{fakeData[0].description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="card card-projects">
                            <div className="text-center">
                                <a className="project-links project-link-one" target="_blank" href={fakeData[1].website}>Live Site</a>
                                <a className="project-links mt-5 project-link-two" target="_blank" href={fakeData[1].clientSideCode}>Client Code</a>
                                <a className="project-links project-link-three" target="_blank" href={fakeData[1].serverSideCode}>Server Code</a>
                            </div>
                            <img class="card-img-top" src={fakeData[1].projectImg} alt="Card image cap"></img>
                            <div class="card-body">
                                <h3>{fakeData[1].name}</h3>
                                <p class="card-text">{fakeData[1].description}</p>
                            </div>
                        </div>
                    </div>
                    <div class="col-12 col-md-6 col-lg-4 mb-4">
                        <div class="card card-projects">
                            <div className="text-center">
                                <a className="project-links project-link-one" target="_blank" href={fakeData[2].website}>Live Site</a>
                                <a className="project-links mt-5 project-link-two" target="_blank" href={fakeData[2].clientSideCode}>Client Code</a>
                                <a className="project-links project-link-three" target="_blank" href={fakeData[2].serverSideCode}>Server Code</a>
                            </div>
                            <img class="card-img-top" src={fakeData[2].projectImg} alt="Card image cap"></img>
                            <div class="card-body">
                                <h3>{fakeData[2].name}</h3>
                                <p class="card-text">{fakeData[2].description}</p>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Projects;