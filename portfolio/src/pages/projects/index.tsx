import { ListPictureItem } from "@/components/list-item";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons/faArrowUpRightFromSquare";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";

const Projects: React.FC = () => {
    return (
        <section className="pt-24" id="projects">
            <div className="w-full text-2xl pl-4">
                <h1 className="font-bold">Projects</h1>
            </div>

            {/* Projects */}
            <div className="w-full h-fit my-4">
                <ul className="flex flex-col space-y-4">
                    <a href="https://github.com/xLightless/RADE/">
                        <ListPictureItem
                            imageSrc={"/images/modelling_editor_interface_wireframe.png"}
                            imageAlt={"A graphical user interface designer using nodes."}
                            title={"RADE"}
                            createdAt={"University"}
                            description={"A RAD-based agile methodology encapsulating the design and development of Model-View-Controller (MVC) desktop applications, DSL converted from the browser into the domain language. Uses Depth-First Search and Graph Traversal to distinguish elements across multiple views from multiple projects at the same time."}
                        />
                    </a>

                    <a href="https://github.com/xLightless/uwe-enterprise-mlaas/">
                        <ListPictureItem
                            imageSrc={"/images/enterprise_claims_handling.png"}
                            imageAlt={"Insurance claims handling on an enterprise MLaaS platform."}
                            title={"Distributed MLaaS"}
                            createdAt={"University"}
                            description={"Created 8 pre-trained ML models which predict car insurance settlement values, indiscriminately, based on feature importances, which are returned through a distributed network of Django endpoints and PostgreSQL queries."}
                        />
                    </a>

                    <a href="https://github.com/xLightless/uni-advanced-algorithms/">
                        <ListPictureItem
                            imageSrc={"/images/algorithms_tco.png"}
                            imageAlt={"Data structures and algorithms."}
                            title={"Data Structures and Algorithms"}
                            createdAt={"University"}
                            description={"Solved a serious of complex problems using data structures and algorithms, including: Permutation, Combinations, Dynamic Programming, Dijkstra Algorithm, Greedy Algorithms, Sliding Windows, and Big O Notation."}
                        />
                    </a>

                    <a href="https://github.com/xLightless/uni-machine-learning/">
                        <ListPictureItem
                            imageSrc={"/images/lstm.png"}
                            imageAlt={"LSTM model for time series prediction."}
                            title={"Predicting Bitcoin Prices with LSTMs"}
                            createdAt={"University"}
                            description={"Created a Recurrent Neural Network (RNN) using Long Short-Term Memory (LSTM) to predict volatile cryptocurrency prices based on historical (COVID-19) data, and evaluated with multiple activation functions. "}
                        />
                    </a>
                </ul>
            </div>

            <div className='pl-4 relative w-full'>
                <a className='w-fit flex flex-row items-center justify-start space-x-4' href="https://github.com/xLightless/" target="_blank">
                    <p className='text-blue-300'>View Projects </p>
                    <FontAwesomeIcon icon={faArrowUpRightFromSquare} className='text-blue-300'/>
                </a>
            </div>
        </section>
    )
};

export default Projects;