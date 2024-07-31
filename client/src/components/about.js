import React, { useState } from 'react';
import Modal from './modal.js';
import Timer from './timer.js';

export default function About() {
    const [showModal, setShowModal] = useState(false);

    const toggleModal = () => {
        setShowModal(!showModal);
    }

    return (
        <div>
            <a className="text-white hover:underline hover:text-white cursor-pointer" onClick={toggleModal}>About</a>
            <Modal show={showModal} onClose={toggleModal}>
                <div id="about" className="justify-left text-left text-white text-base p-4">
                    <h2 className="text-wyellow font-bold text-2xl">ABOUT</h2>
                    <hr className="mb-2" />
                    <p>Tankdle is a wordle-inspired game to test your knowledge of World of Tanks. Every day at 00:00 Pacific Standard Time (PST), a new high tier (VI-X) and low tier (I-V) vehicle will be selected. You will have to figure out which tanks they are. </p>
                    <br></br>
                    <div className="flex items-center justify-center"><Timer /></div>
                    <br></br>
                    <p>Tankdle was created under Wargaming's <a target="_blank" href="https://legal.na.wargaming.net/en/player-content-policy">Player Content Policy</a> using assets owned by Wargaming. Wargaming does not sponsor or endorse this project.</p>
                    <br></br>
                    <p>The website uses cookies to keep track of your statistics and analyze site traffic. Read more about this in the privacy policy.</p>
                    <br></br>
                    <p>This project was heavily inspired by these other games: <a target="_blank" href="https://loldle.net/">Loldle</a>, <a target="_blank" href="https://valdle.gg/">Valdle</a>, <a target="_blank" href="https://www.nytimes.com/games/wordle/index.html">Wordle</a>.</p>
                    <br></br>
                    <p>If you have any questions, suggestions, or feedback, feel free to reach out at <a href="mailto:temosdev@gmail.com">temosdev@gmail.com</a></p>
                </div>
            </Modal>
        </div>
    )
}