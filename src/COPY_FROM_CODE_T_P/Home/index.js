import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import SITE_LINKS from '../../Utils/LinksConfig';
import getEnv from '../../Utils';
import flywheel_1 from '../../../img/recognize.svg';
import flywheel_2 from '../../../img/apply.svg';
import flywheel_3 from '../../../img/deliver_results.svg';
import flywheel_4 from '../../../img/grow.svg';
import flywheel_5 from '../../../img/assess_reward.svg';
import Text from './Q1TalentProcesses.json';

const CarouselItemExample = (props) => {
    const text = Text[props.userLang];
    const headerText = props.ids[0] == 'main-lang8'
        ? text['main-lang8'] + '' + text['main-lang8a']
        : text[props.ids[0]];
    return (
        <div className={`carousel-item ${props.isActive ? 'active' : ''}`}>
            <img alt={props.imgAlt} className="mx-auto" height="228px" src={props.imgSrc}/>
            <div className="carousel-caption d-none d-md-block">
                <h5 id={props.ids[0]}>{headerText}</h5>
                <p id={props.ids[1]}>{text[props.ids[1]]}</p>
            </div>
        </div>
    );
};

const carouselConfig = [
    {
        imgAlt: 'test',
        imgSrc: flywheel_1,
        ids: [
            'main-lang4',
            'main-lang4a'
        ]
    },
    {
        imgAlt: 'Apply strengths at work',
        imgSrc: flywheel_2,
        ids: [
            'main-lang5',
            'main-lang5a'
        ]
    },
    {
        imgAlt: 'Deliver results for customers',
        imgSrc: flywheel_3,
        ids: [
            'main-lang6',
            'main-lang6a'
        ]
    },
    {
        imgAlt: 'Grow strengths and capabilities',
        imgSrc: flywheel_4,
        ids: [
            'main-lang7',
            'main-lang7a'
        ]
    },
    {
        imgAlt: 'Assess and Reward performance and potential',
        imgSrc: flywheel_5,
        ids: [
            'main-lang8',
            'main-lang8b'
        ]
    }
];

const Carousel = (props) => {
    const text = Text[props.userLang];
    const items = carouselConfig.map(item => 
        <CarouselItemExample
            key={item.ids[0]}
            userLang={props.userLang}
            imgAlt={item.imgAlt}
            imgSrc={item.imgSrc}
            ids={item.ids}
            isActive={item.ids[0] == 'main-lang4'}
        />);
    return (
        <div className="col-5 text-center">
            <figure className="figure pt-3">
                <div className="carousel slide carousel-fade" data-ride="carousel" id="carouselExampleControls">
                    <div className="carousel-inner">
                        {items}
                    </div><a className="carousel-control-prev" data-slide="prev" href="#carouselExampleControls" role="button">
                    <i aria-hidden="true" className="fas fa-angle-left fa-2x"></i> 
                    <span className="sr-only" id="main-lang9">{text['main-lang9']}</span></a> 
                    <a className="carousel-control-next" data-slide="next" href="#carouselExampleControls" role="button">
                    <i aria-hidden="true" className="fas fa-angle-right fa-2x"></i> 
                    <span className="sr-only" id="main-lang10">{text['main-lang10']}Next</span></a>
                </div>
                <figcaption className="figure-caption" id="main-lang11">
                    {text['main-lang11']}
                </figcaption>
            </figure>
        </div>
    );
}

const cardsConfig = {
    lg: [
        {
            modalTarget: '.bd-example-modal-lg',
            id: 'main-lang20',
            borderClass: 'card-forte'/*,
            children: <Fragment></Fragment>*/
        },
        {
            modalTarget: '.bd-example-modal-lg2',
            id: 'main-lang21',
            borderClass: 'card-comp'/*,
            children: <Fragment></Fragment>*/
        },
        {
            modalTarget: '.bd-example-modal-lg3',
            id: 'main-lang22',
            borderClass: 'card-promo'/*,
            children: <Fragment></Fragment>*/
        }
    ],
    sm: [
        {
            modalTarget: '.bd-example-modal-lg4',
            id: 'main-lang20',
            borderClass: 'card-checks'
        },
        {
            modalTarget: '.bd-example-modal-lg5',
            id: 'main-lang21',
            borderClass: 'card-convo'
        },
        {
            modalTarget: '.bd-example-modal-lg6',
            id: 'main-lang22',
            borderClass: 'card-fls'
        }
    ]
}

const CardLg = (props) => {
    const text = Text[props.userLang];
    return (
        <div className="col-4 px-2">
            <a className="training-card" data-target={props.modalTarget} data-toggle="modal" href="#" role="button">
                <div className={`card card-transform ${props.borderClass} text-left h-100 d-inline-block p-2 mb-2`}>
                    <div className="card-body p-4">
                        <h3 className="card-title" id={props.id}>{text[props.id]}</h3>
                        {props.children}
                    </div>
                </div>
            </a>
        </div>
    );
}

const CardSm = (props) => {
    const text = Text[props.userLang];
    return (
        <div className="col-4 px-2">
            <a className="training-card" data-target={props.modalTarget} data-toggle="modal" href="#" role="button">
                <div className={`card card-transform ${props.borderClass} text-left btn-wrap-text w-100 h-100 d-inline-block p-2`}>
                    <div className="card-body p-4">
                        <h3 className="card-title pt-2 mb-0 font-weight-normal text-muted" id={props.id}>{text[props.id]}</h3>
                    </div>
                </div>
            </a>
        </div>
    );
}

const Modal = (props) => {
    const text = Text[props.userLang];
    return (
        <div aria-hidden="true" aria-labelledby="myLargeModalLabel" className={`modal fade .bd-example-modal-lg4`} role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                {props.children}
                            </div>
                        </div>
                    </div>
    );
}

class Home extends Component {
    componentDidMount() {
        this.props.onClick('visited_TalentMgmtProcesses');
        $('.carousel-control-next').click();
    }

    render() {
        const text = Text[this.props.userLang];
        const largeCards = cardsConfig.lg
            .map(card => <CardLg
                userLang={this.props.userLang}
                modalTarget={card.modalTarget}
                id={card.id}
                borderClass={card.borderClass}
                children={card.children}
            />);
        const smallCards = cardsConfig.sm
            .map(card => <CardSm
                userLang={this.props.userLang}
                modalTarget={card.modalTarget}
                id={card.id}
                borderClass={card.borderClass}
            />);
        return (
            <main className="container-fluid bg-light" role="main" style={{'position': 'relative', 'top': '-4px'}}>
                <div className="landing-template" style={{'minWidth': '1040px'}}>
                    <div className="row">
                        <div className="col-7 pr-5">
                            <h1 className="mt-0 mb-4" id="main-lang1">{text['main-lang1']}</h1>
                            <div className="mr-5">
                                <p id="main-lang2">{text['main-lang2']}</p>
                                <p id="main-lang3">{text['main-lang3']}</p>
                            </div>
                        </div>
                        <Carousel userLang={this.props.userLang}/>
                    </div>
                    <div className="row px-2 mt-3">
                        <div className="col-12 px-2">
                            <h2 className="text-muted py-3" id="main-lang12" style={{'fontStyle': '1.4em'}}>{text['main-lang12']}</h2>
                        </div>
                    </div>
                    <div className="row px-2 pb-3" style={{'height':'210px'}}>
                        <CardLg
                            userLang={this.props.userLang}
                            borderClass="card-forte"
                            modalTarget=".bd-example-modal-lg"
                            id="main-lang13"
                        >
                            <p className="font-italic mb-0" style={{'fontSize': '.95em'}}><span id="main-lang14">{text['main-lang14']}</span> <strong id="main-lang14a">{text['main-lang14a']}</strong> <span id="main-lang14b">{text['main-lang14b']}</span> <strong id="main-lang14c">{text['main-lang14c']}</strong> <span id="main-lang14d">{text['main-lang14d']}</span></p>
                        </CardLg>
                        <CardLg
                            userLang={this.props.userLang}
                            borderClass="card-comp"
                            modalTarget=".bd-example-modal-lg2"
                            id="main-lang15"
                        >
                            <p className="font-italic" style={{'fontStyle': '.95em'}}><strong id="main-lang16">{text['main-lang16']}</strong> <span id="main-lang16a">{text['main-lang16a']} </span> <strong id="main-lang16b">{text['main-lang16b']} </strong> <span id="main-lang16c">{text['main-lang16c']}</span></p>
                        </CardLg>
                        <CardLg
                            userLang={this.props.userLang}
                            borderClass="card-promo"
                            modalTarget=".bd-example-modal-lg3"
                            id="main-lang17"
                        >
                            <p className="font-italic" style={{'fontStyle': '.95em'}}><span id="main-lang18">{text['main-lang18']}</span> <strong id="main-lang18a">{text['main-lang18a']}</strong> <span id="main-lang18b">{text['main-lang18b']}</span></p>
                        </CardLg>
                    </div>

                    <div className="row px-2 bg-grey">
                        <div className="col-12 px-2">
                            <h2 className="text-muted py-3" id="main-lang19" style={{'fontStyle': '1.4em'}}>{text['main-lang19']}</h2>
                        </div>
                    </div>

                    <div className="row px-2 pb-3 mb-5 bg-grey" style={{'height':'110px'}}>
                        {smallCards}
                    </div>

                    <p className="text-center pt-5 mb-4"><i className="fas fa-chalkboard-teacher fa-lg pr-2 text-secondary"></i> <span id="main-lang23">{text['main-lang23']}</span> <a onClick={() => this.props.onClick('dl-presentation-kit_from_talent-processes')} href="https://drive.corp.amazon.com/view/GTM%20Comms/Q1/Presentations/Q1%202019%20Talent%20Processes%20-%20Presentation%20Kit.zip" id="main-lang23a" target="_blank">{text['main-lang23a']}</a>.</p>                    
                    <div aria-hidden="true" aria-labelledby="myLargeModalLabel" className="modal fade bd-example-modal-lg" role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header teal-bg text-white">
                                    <h3 className="modal-title py-0 pl-1" id="exampleModalLabel"><span id="main-lang24">{text['main-lang24']}</span></h3><button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body px-4">
                                    <div className="row">
                                        <div className="col-6">
                                            <h4><span id="main-lang25">{text['main-lang25']}</span> &amp; <span id="main-lang25a">{text['main-lang25a']}</span></h4>
                                            <p id="main-lang26">{text['main-lang26']}</p>
                                        </div>
                                        <div className="col-6">
                                            <em className="float-right"><i aria-hidden="true" className="fal fa-calendar-alt text-muted"></i> <span id="main-lang27">{text['main-lang27']}</span></em>
                                            <h4 id="main-lang28">{text['main-lang28']}</h4>
                                            <p><strong id="main-lang29">{text['main-lang29']}</strong> <span id="main-lang29a">{text['main-lang29a']}</span></p>
                                            <p><strong id="main-lang30">{text['main-lang30']}</strong> <span id="main-lang30a">{text['main-lang30a']}</span></p>
                                        </div>
                                    </div>
                                    <div className="row mb-4">
                                        <div className="col-6">
                                            <h4 id="main-lang31">{text['main-lang31']}</h4>
                                            <p id="main-lang32">{text['main-lang32']}</p>
                                        </div>
                                        <div className="col-6 text-center mt-5 pt-1">
                                            <Link onClick={() => this.props.onClick('learn-more-forte_from_talent-processes')} className="btn btn-info btn-lg teal-bg mt-3 mx-2" to={SITE_LINKS.FORTE[getEnv()]} id="main-lang33" target="_blank">{text['main-lang33']}</Link>
                                            <a onClick={() => this.props.onClick('open-forte_from_talent-processes')} className="btn btn-secondary btn-lg squid-bg mt-3 mx-2" href="https://forte.corp.amazon.com/forte" id="main-lang34" target="_blank">{text['main-lang34']}</a>
                                        </div>
                                    </div>
                                    <p className="text-center mb-0"><button className="btn btn-light bg-grey w-100" data-dismiss="modal" id="main-lang35" type="button">{text['main-lang35']}</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div aria-hidden="true" aria-labelledby="myLargeModalLabel" className="modal fade bd-example-modal-lg2" role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header orange-bg text-white">
                                    <h3 className="modal-title py-0 pl-1" id="exampleModalLabel2"><span id="main-lang36">{text['main-lang36']}</span></h3><button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body px-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <h4><span id="main-lang37">{text['main-lang37']}</span> &amp; <span id="main-lang37a">{text['main-lang37a']}</span></h4>
                                            <p id="main-lang38">{text['main-lang38']}</p>
                                            <h4 id="main-lang39">{text['main-lang39']}</h4>
                                            <p><span id="main-lang40">{text['main-lang40']}</span> <a id="main-lang40a" href="https://peopleportal.amazon.com/" target="_blank">{text['main-lang40a']}</a>. <span id="main-lang40b">{text['main-lang40b']}</span></p>
                                        </div>
                                        <div className="col-5">
                                            <em className="float-right"><i aria-hidden="true" className="fal fa-calendar-alt text-muted"></i> <span id="main-lang41a">{text['main-lang41a']}</span></em>
                                            <h4 id="main-lang41">{text['main-lang41']}</h4>
                                            <p><strong id="main-lang42">{text['main-lang42']}</strong> <span id="main-lang42a">{text['main-lang42a']}</span></p>
                                            <p><strong id="main-lang43">{text['main-lang43']}</strong> <span id="main-lang43a">{text['main-lang43a']}</span></p>
                                            <div className="text-center mt-5 py-5">
                                                <Link onClick={() => this.props.onClick('learn-more-comp_from_talent-processes')} className="btn btn-warning btn-lg orange-bg text-white my-2 mx-2" to={SITE_LINKS.COMPENSATION[getEnv()]} id="main-lang44" target="_blank">{text['main-lang44']}</Link><br/>
                                                <a onClick={() => this.props.onClick('open-cpt_from_talent-processes')} className="btn btn-secondary btn-lg squid-bg my-2 mx-2" href="https://peopleportal.amazon.com/" id="main-lang45" target="_blank">{text['main-lang45']}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center mb-0"><button className="btn btn-light bg-grey w-100" data-dismiss="modal" id="main-lang46" type="button">{text['main-lang46']}</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div aria-hidden="true" aria-labelledby="myLargeModalLabel" className="modal fade bd-example-modal-lg3" role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header green-bg text-white">
                                    <h3 className="modal-title py-0 pl-1" id="exampleModalLabel3"><span id="main-lang47">{text['main-lang47']}</span></h3><button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body px-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <h4><span id="main-lang48">{text['main-lang48']}</span> &amp; <span id="main-lang48a">{text['main-lang48a']}</span></h4>
                                            <p id="main-lang49">{text['main-lang49']}</p>
                                            <p id="main-lang50">{text['main-lang50']}</p>
                                            <h4 id="main-lang51">{text['main-lang51']}</h4>
                                            <p id="main-lang52">{text['main-lang52']}</p>
                                        </div>
                                        <div className="col-5">
                                            <em className="float-right"><i aria-hidden="true" className="fal fa-calendar-alt text-muted"></i> <span id="main-lang53">{text['main-lang53']}</span></em>
                                            <h4 id="main-lang54">{text['main-lang54']}</h4>
                                            <p><strong id="main-lang55">{text['main-lang55']}</strong> <span id="main-lang55a">{text['main-lang55a']}</span> <a href="https://promote.corp.amazon.com/" id="main-lang55b" target="_blank">{text['main-lang55b']}</a>.</p>
                                            <p><strong id="main-lang56">{text['main-lang56']}</strong> <span id="main-lang56a">{text['main-lang56a']}</span> <a href="https://peopleportal.amazon.com/" id="main-lang56b" target="_blank">{text['main-lang56b']}</a>.</p>
                                            <p><strong id="main-lang57">{text['main-lang57']}</strong> <span id="main-lang57a">{text['main-lang57a']}</span></p>
                                            <div className="text-center mt-4 py-3">
                                                <Link onClick={() => this.props.onClick('learn-more-promotions_from_talent-processes')} className="btn btn-secondary btn-lg green-bg text-white my-2 mx-2" to={SITE_LINKS.PROMOTIONS[getEnv()]} id="main-lang58" target="_blank">{text['main-lang58']}</Link>
                                                <a onClick={() => this.props.onClick('open-promote_from_talent-processes')} className="btn btn-secondary btn-lg squid-bg my-2 mx-2" href="https://promote.corp.amazon.com/" id="main-lang59" target="_blank">{text['main-lang59']}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center mb-0"><button className="btn btn-light bg-grey w-100" data-dismiss="modal" id="main-lang60" type="button">{text['main-lang60']}</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div aria-hidden="true" aria-labelledby="myLargeModalLabel" className="modal fade bd-example-modal-lg4" role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header teal-bg text-white">
                                    <h3 className="modal-title py-0 pl-1" id="exampleModalLabel4"><span id="main-lang61">{text['main-lang61']}</span></h3><button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body px-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <h4><span id="main-lang62">{text['main-lang62']}</span> &amp; <span id="main-lang62a">{text['main-lang62a']}</span></h4>
                                            <p id="main-lang63">{text['main-lang63']}</p>
                                            <h4 id="main-lang64">{text['main-lang64']}</h4>
                                            <p id="main-lang65">{text['main-lang65']}</p>
                                        </div>
                                        <div className="col-5">
                                            <em className="float-right"><i aria-hidden="true" className="fal fa-calendar-alt text-muted"></i> <span id="main-lang66">{text['main-lang66']}</span></em>
                                            <h4 id="main-lang67">{text['main-lang67']}</h4>
                                            <p id="main-lang68">{text['main-lang68']}</p>
                                            <div className="text-center mt-5 py-5">
                                                <Link onClick={() => this.props.onClick('learn-more-forteCheckIns_from_talent-processes')} className="btn btn-info btn-lg teal-bg my-2 mx-2" to={`${SITE_LINKS.FORTE[getEnv()]}/check-ins`} id="main-lang69" target="_blank">{text['main-lang69']}</Link>
                                                <a onClick={() => this.props.onClick('open-forte_from_talent-processes')} className="btn btn-secondary btn-lg squid-bg mt-3 mx-2" href="https://forte.corp.amazon.com/forte" id="main-lang70" target="_blank">{text['main-lang70']}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center mb-0"><button className="btn btn-light bg-grey w-100" data-dismiss="modal" id="main-lang71" type="button">{text['main-lang71']}</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div aria-hidden="true" aria-labelledby="myLargeModalLabel" className="modal fade bd-example-modal-lg5" role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header orange-bg text-white">
                                    <h3 className="modal-title py-0 pl-1" id="exampleModalLabel5"><span id="main-lang72">{text['main-lang72']}</span></h3><button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body px-4">
                                    <div className="row">
                                        <div className="col-7">
                                            <h4><span id="main-lang73">{text['main-lang73']}</span> &amp; <span id="main-lang73a">{text['main-lang73a']}</span></h4>
                                            <p id="main-lang74">{text['main-lang74']}</p>
                                            <h4 id="main-lang75">{text['main-lang75']}</h4>
                                            <p id="main-lang76">{text['main-lang76']}</p>
                                        </div>
                                        <div className="col-5">
                                            <em className="float-right"><i aria-hidden="true" className="fal fa-calendar-alt text-muted"></i> <span id="main-lang77">{text['main-lang77']}</span></em>
                                            <h4 id="main-lang78">{text['main-lang78']}</h4>
                                            <p><strong id="main-lang79">{text['main-lang79']}</strong> <span id="main-lang79a">{text['main-lang79a']}</span></p>
                                            <div className="text-center mt-5 py-4">
                                                <Link onClick={() => this.props.onClick('learn-more-comp_from_talent-processes')} className="btn btn-warning btn-lg orange-bg text-white my-2 mx-2" to={SITE_LINKS.COMPENSATION[getEnv()]} id="main-lang81" target="_blank">{text['main-lang81']}</Link><br/>
                                                <a onClick={() => this.props.onClick('open-cpt_from_talent-processes')} className="btn btn-secondary btn-lg squid-bg my-2 mx-2" href="https://peopleportal.amazon.com/" id="main-lang82" target="_blank">{text['main-lang82']}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center mb-0"><button className="btn btn-light bg-grey w-100" data-dismiss="modal" id="main-lang83" type="button">{text['main-lang83']}</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div aria-hidden="true" aria-labelledby="myLargeModalLabel" className="modal fade bd-example-modal-lg6" role="dialog" tabIndex="-1">
                        <div className="modal-dialog modal-lg">
                            <div className="modal-content">
                                <div className="modal-header green-bg text-white">
                                    <h3 className="modal-title py-0 pl-1" id="exampleModalLabel6"><span id="main-lang84">{text['main-lang84']}</span></h3><button aria-label="Close" className="close" data-dismiss="modal" type="button"><span aria-hidden="true">&times;</span></button>
                                </div>
                                <div className="modal-body px-4">
                                    <div className="row">
                                        <div className="col-8">
                                            <h4><span id="main-lang85">{text['main-lang85']}</span> &amp; <span id="main-lang85a">{text['main-lang85a']}</span></h4>
                                            <p id="main-lang86">{text['main-lang86']}</p>
                                            <h4 id="main-lang87">{text['main-lang87']}</h4>
                                            <p><span id="main-lang88">{text['main-lang88']}</span> <a href="https://promote.corp.amazon.com/" id="main-lang88a" target="_blank">{text['main-lang88a']}</a> <span id="main-lang88b">{text['main-lang88b']}</span></p>
                                        </div>
                                        <div className="col-4">
                                            <em className="float-right"><i aria-hidden="true" className="fal fa-calendar-alt text-muted"></i> <span id="main-lang89">{text['main-lang89']}</span></em>
                                            <h4 id="main-lang90">{text['main-lang90']}</h4>
                                            <p id="main-lang91">{text['main-lang91']}</p>
                                            <div className="text-center mt-5 py-5">
                                                <Link onClick={() => this.props.onClick('learn-more-promotions_from_talent-processes')} className="btn btn-secondary btn-lg green-bg text-white my-2 mx-2" to={SITE_LINKS.PROMOTIONS[getEnv()]} id="main-lang92" target="_blank">{text['main-lang92']}</Link>
                                                <a onClick={() => this.props.onClick('open-promote_from_talent-processes-processes')} className="btn btn-secondary btn-lg squid-bg my-2 mx-2" href="https://promote.corp.amazon.com/" id="main-lang93" target="_blank">{text['main-lang93']}</a>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="text-center mb-0"><button className="btn btn-light bg-grey w-100" data-dismiss="modal" id="main-lang94" type="button">{text['main-lang94']}</button></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}
export default Home;