import React from "react";
import { BsInfoCircleFill } from "react-icons/bs";

import { Animate, AnimateKeyframes } from "react-simple-animate";
import { Line } from "rc-progress";

import PageHeader from "../../components/pageHeaderContent/PageHeader";
import { skillsData } from "./utils";
import "./skills.css";

export default function Skills() {
  return (
    <>
      <section id="skills" className="skills">
        <PageHeader
          headerText="My Skills"
          icon={<BsInfoCircleFill size={40} />}
        />

        <div className="skillsContentWrapper">
          {skillsData.map((item, i) => (
            <div className="skills-ContentWrapperInnerContent" key={i}>
              <Animate
                play
                duration={1}
                delay={0.3}
                start={{
                  transform: "translateX(-200px)",
                }}
                end={{
                  transform: "translateX(0px)",
                }}
              >


                <h3 className="skillsContentWrapperInnerContentCategoryText">
                  {item.label}
                </h3>
                <div className="CategoryText">
                  {item.data.map((skillItem, j) => (
                    <AnimateKeyframes
                      play
                      duration={1}
                      keyframes={["opacity:1", "opacity : 0"]}
                      iterationCount="1"
                    >
                      <div className="progressbarWrapper" key={j}>
                        <p>{skillItem.skillName}</p>

                        <Line
                          percent={skillItem.percentage}
                          strokeWidth="2"
                          strokeColor="var(--yellow-theme-main-color)"
                          trailWidth="2"
                          strokeLinecap="square"
                        />
                      </div>
                    </AnimateKeyframes>
                  ))}
                </div>
              </Animate>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
