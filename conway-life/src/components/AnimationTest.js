import React, { useRef, useState, useEffect } from "react";
import { useAnimationFrame } from "../hooks/useAnimationFrame";
import moment from "moment";
import getPixel from "../utils/getPixel";
import setPixel from "../utils/setPixel";
import { drawGrid } from "../utils/drawGrid";
const AnimationTest = (props) => {
  const canvasRef = useRef(null);
  const { width, height, cells, setCells } = props;
  const [stopAnimation, setStopAnimation] = useState(true);

  const draw = (context, canvas) => {
    drawGrid(
      context,
      { gridWidth: width, gridHeight: height },
      canvas,
      stopAnimation,
      cells,
      setCells
    );
  };

  useEffect(() => {
    console.log(cells);
  }, [cells]);

  const doAnimation = (elapsedTime) => {
    const canvas = canvasRef.current; // refers to the ref attribute in render()
    const context = canvas.getContext("2d"); // etc.
    console.log("elapsed time:", elapsedTime);
    console.log(canvasRef.current);
    draw(context, canvas);
  };
  const [cancelAnimation, resumeAnimation] = useAnimationFrame(
    moment.now(),
    doAnimation
  );

  useEffect(() => {
    if (stopAnimation === true) {
      cancelAnimation();
    } else {
      resumeAnimation();
    }
  }, [stopAnimation]);

  /**
   * Render the canvas
   */
  return (
    <>
      <canvas ref={canvasRef} width={props.width} height={props.height} />{" "}
      <button
        onClick={() => {
          console.log("starting?");
          setStopAnimation(false);
        }}
      >
        START
      </button>{" "}
      <button
        onClick={() => {
          console.log("stopping?");
          setStopAnimation(true);
        }}
      >
        STOP
      </button>
    </>
  );
};

export default AnimationTest;