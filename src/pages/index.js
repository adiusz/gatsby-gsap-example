import React, { useEffect, useRef } from "react"
import styled from "styled-components"
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import HeroTechSvg from '../../static/hero_graph.inline.svg';
import SEO from "../components/seo"
import Container from '../components/Container/Container'

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HeroSection = styled.section`
  min-height: calc(90vh - 70px);
  margin: 0 auto;
  width: 100%;
`

const HeroFlexWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  height: calc(90vh - 70px);
  
  svg {
      width: 25vw;
      height: auto;
      
      g {
        visibility: hidden;
      }
    }
  
`

const IndexPage = () => {

  const svgWrapper = useRef(null);

  useEffect(() => {

    const [svgElements] = svgWrapper.current.children;

    const AllG = svgElements.querySelectorAll("#hero_graph g")
    const HtmlTag = svgElements.querySelector('#html-tag');
    const Laptop = svgElements.querySelector('#laptop');
    const MobilePhone = svgElements.querySelector('#mobile-phone');
    const CurlyBraces = svgElements.querySelector('#curly-braces');
    const Protect = svgElements.querySelector('#protect');
    const Gear = svgElements.querySelector('#gear');


    gsap.set([HtmlTag, Laptop, MobilePhone, CurlyBraces, Protect, Gear], {autoAlpha: 0, ease: 'power3.inOut'});

    gsap.to(AllG, {duration: 2, css: {visibility: 'visible'}});

    gsap.fromTo(CurlyBraces, {x: '-=100', autoAlpha: 0}, {delay: .8, duration: 1, x: '+=100', autoAlpha: 1});
    gsap.fromTo(Protect, {y: '-=100', autoAlpha: 0}, {delay: .3, duration: 1, y: '+=100', autoAlpha: 1});
    gsap.fromTo(Gear, {y: '-=200', autoAlpha: 0}, {duration: 1.1, y: '+=200', autoAlpha: 1});
    gsap.fromTo(MobilePhone, {x: '-=100', autoAlpha: 0}, {delay: 1.1, duration: 1, x: '+=100', autoAlpha: 1});
    gsap.fromTo(HtmlTag, {x: '+=100', autoAlpha: 0}, {delay: 1.6, duration: 1, x: '-=100', autoAlpha: 1});
    gsap.to(Laptop, {delay: .3, duration: 1.5, autoAlpha: 1});
  }, [])

  return (
  <>
    <SEO title="Home" />
    <HeroSection>
      <Container>
        <HeroFlexWrapper >
          <div ref={svgWrapper}>
            <HeroTechSvg />
          </div>
        </HeroFlexWrapper>
      </Container>
    </HeroSection>
  </>
  )};

export default IndexPage
