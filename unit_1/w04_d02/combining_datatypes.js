const crayonBox = {
    colors: ['red', 'yellow', 'green', 'blue']
}

// console.log(crayonBox.colors[0]);

const bottle = {
    cap: {
        material: 'metal',
        color: 'blue'
    }
}

// console.log(bottle.cap.color);

const receipt = [{
    beans: 2,
    apples: 4
}]

// console.log(receipt[0].apples)

const apartmentBuilding = [
    ['Mike', 'Devan', 'Sydney', 'Gab']
]

// console.log(apartmentBuilding[0][1]);

const knit = () => {
  const scarves = {
      item: 'scarf',
      size: '6ft'
  }
  return scarves;
}

// console.log(knit()); 

const crayonSelector = (index) => {
    const crayonBox = {
        colors: ['red', 'yellow', 'green', 'blue']
    }
    return crayonBox.colors[index]
}

// console.log(crayonSelector(0));

const powerButton = () => {
  const options = () => {
      console.log('select a song')
  }
  return options();
}

// powerButton();