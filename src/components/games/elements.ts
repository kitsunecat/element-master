enum ElementType {
  Fire = 'FIRE',
  Water = 'WATER',
  Grass = 'GRASS',
  Rock = 'ROCK',
}

class Element {
  playerId: number;
  elementType: ElementType;
  position: { x: number; y: number };
  image: HTMLImageElement;

  constructor(playerId: number, elementType: ElementType) {
    this.playerId = playerId;
    this.elementType = elementType;
    this.position = { x: 0, y: 0 };
    this.image = new Image();
    this.setImageSource(elementType);
  }

  setImageSource(elementType: ElementType) {
    this.image.src = './elements.png';
    const imgWidth = 500;
    const imgHeight = 500;

    switch (elementType) {
      case ElementType.Fire:
        this.image.style.objectPosition = `0px 0px`;
        break;
      case ElementType.Water:
        this.image.style.objectPosition = `-${imgWidth}px 0px`;
        break;
      case ElementType.Grass:
        this.image.style.objectPosition = `0px -${imgHeight}px`;
        break;
      case ElementType.Rock:
        this.image.style.objectPosition = `-${imgWidth}px -${imgHeight}px`;
        break;
    }

    this.image.style.width = '50px';
    this.image.style.height = '50px';
  }
}

export { Element, ElementType };
