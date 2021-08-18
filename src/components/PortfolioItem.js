import React from "react";
import "../styles/style.css"
import { Modal } from "react-bootstrap"



function ModalLaunchWeb(props) {
    const [modalShow, setModalShow] = React.useState(false);
    const portfolioItem = props;
    console.log(portfolioItem);

    return (
        <div>
            <img src={props.image} alt={props.alt} className="rounded thumb shadow" onClick={() => setModalShow(true)}/>
            
            <PortfolioModal
                show={modalShow}
                onHide={() => setModalShow(false)}/>
        </div>
    );

    function PortfolioModal(props) {

        return (
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Header>
                    <img src={portfolioItem.image} className="modalImg img-fluid" alt={portfolioItem.alt} />
                </Modal.Header>
                <Modal.Body>
                    <h3>{portfolioItem.title}</h3>
                    {portfolioItem.description}<br />
                    <a href={portfolioItem.link} target="_blank" rel="noreferrer"><button className={portfolioItem.className1}>Launch Application</button></a>
                    <a href={portfolioItem.repo} target="_blank" rel="noreferrer"><button className={portfolioItem.className2}>Visit Repository</button></a>
                </Modal.Body>
                <Modal.Footer>
                    <button className="view-btn" onClick={props.onHide}>Close</button>
                </Modal.Footer>
            </Modal>
        );
    };
    // eslint-disable-next-line
};

export default ModalLaunchWeb;
