import React, { useEffect } from "react";
import { Helmet } from "react-helmet";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import INFO from "../data/user";
import SEO from "../data/seo";

import "./styles/articles.css";

import bytes from '../art/bytes.png'
import genart1 from '../art/genart1.png'
import genart2 from '../art/genart2.png'
import genart3 from '../art/genart3.png'
import gocover from '../art/gocover.jpeg'
import pattern from '../art/pattern.png'
import robo from '../art/robo.png'
import room2d from '../art/room2d.png'
import ss from '../art/ss.gif'
import vader from '../art/vader.png'
import wanted from '../art/wanted.jpeg'

const images = [
	bytes,
	genart1,
	gocover,
	pattern,
	robo,
	genart3,
	room2d,
	ss,
	genart2,
	vader,
	wanted
]


var settings = {
	dots: false,
	infinite: true,
	speed: 250,
	slidesToShow: 3,
	centerPadding: 30,
	slidesToScroll: 1,
	autoplay: true,
	autoplaySpeed: 2000,
	centerMode: true,
	className: "center",
	arrows: true,
	accessibility: true,
	focusOnSelect: true,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint: 600, 
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 480, 
			settings: {
				slidesToShow: 1,
			}
		}
	]
};



const Articles = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const currentSEO = SEO.find((item) => item.page === "articles");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Articles | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="articles" />
				<div className="content-wrapper">
					<div className="articles-logo-container">
						<div className="articles-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="title art-title">
							<p className="art-p">Here's some of my visual art!</p>
						</div>
						<div className="subtitle about-subtitle art-sub">
									From pixels to 2D design, and even some experimentation with P5.js, I love being creative and having fun.
								</div>
					<div className="gallery-div">
						<Slider {...settings}>
						{images.map((img, idx) => (
							<div key={idx}> 
								<img className="images" src={img} alt={`Slide ${idx + 1}`} />
							</div>
						))}
						</Slider>
					</div>
					
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Articles;
