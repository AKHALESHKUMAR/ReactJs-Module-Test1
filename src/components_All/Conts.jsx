const numColors = 6; 

export const montharr = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

export const colordata = [];

for (let i = 1; i <= numColors; i++) {
    const colorImage = require(`../images-all/color${i}.png`);
  
    colordata.push({
        img: colorImage
    });
}
