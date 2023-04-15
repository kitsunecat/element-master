import React, { useEffect, useState } from 'react';
import { Element, ElementType } from './elements';
import './Play.css';

const NewGame = () => {
  const boardSize = 8;
  const [fireElementImage, setFireElementImage] = useState<HTMLImageElement | null>(null);

  useEffect(() => {
    const fireElement = new Element(1, ElementType.Fire);
    setFireElementImage(fireElement.image);
  }, []);

  const generateBoard = () => {
    let rows = [];
    for (let i = 0; i < boardSize; i++) {
      let cells = [];
      for (let j = 0; j < boardSize; j++) {
        const cellColor = (i + j) % 2 === 0 ? 'lightCell' : 'darkCell';
        cells.push(<div className={`cell ${cellColor}`} key={`cell-${i}-${j}`}></div>);
      }
      rows.push(<div className="row" key={`row-${i}`}>{cells}</div>);
    }
    return rows;
  };

  const createStyleObject = (image: HTMLImageElement) => {
    console.log(image.style.objectPosition)
    console.log(image.style.width)
    console.log(image.style.height)
    return {
      objectPosition: image.style.objectPosition,
      width: image.style.width,
      height: image.style.height,
    };
  };

  return (
    <div>
      <h1>Play Game</h1>
      <div className="board">{generateBoard()}</div>
      <div className="element-container">
        {fireElementImage && (
          <img src={fireElementImage.src} style={createStyleObject(fireElementImage)} alt="Fire Element" />
        )}
      </div>
      {fireElementImage?.src}
    </div>
  );
};

export default NewGame;
