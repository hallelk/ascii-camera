// const density = " ·°oOQ"
 const density = " `.-:_,=;+!rc*zsT7|iCf3tuno5xyEwk694pGUKH8D$gMW%@" ;
 // const density = "@%WMg$D8HKUGp496kwE]yx5onut3fCi|7)Tsz*r+>=,:-`";
 // const density = "Ñ@#W$@B98WM#76543210?!abc;:+=-,._            ";
  // const density = '       .:-i|=+%O#@'
   // const density = "  .:░▒▓█";

let video;
let asciiDiv;
let draggableDiv;

function setup() {
  noCanvas();
  asciiDiv = createDiv();
  asciiDiv.id('asciiDiv');
  asciiDiv.style('font-size', '16px');
  asciiDiv.style('line-height', '10px');
  asciiDiv.style('position', 'absolute');
  asciiDiv.style('background-color', '#000');
  asciiDiv.style('top', '0px');
  // asciiDiv.style('clip-path', 'circle(100px at center)');
  asciiDiv.style('z-index', '1');
  
  video = createCapture(VIDEO);
  video.size(144, 108);
  video.style('width', '1440px');
  video.style('height', '1080px');
  video.id('video');
  
}

function draw() {
  video.loadPixels();
  let asciiImage = "";
  for (let j = 0; j < video.height; j=j+1) {
    for (let i = 0; i < video.width; i=i+1) {
      const pixelIndex = (i + j * video.width) * 4;
      const r = video.pixels[pixelIndex + 0]; // + video.pixels[pixelIndex + 3] + video.pixels[pixelIndex + 6];
      const g = video.pixels[pixelIndex + 1]; // + video.pixels[pixelIndex + 4] + video.pixels[pixelIndex + 7];
      const b = video.pixels[pixelIndex + 2]; // + video.pixels[pixelIndex + 5] + video.pixels[pixelIndex + 8];
      const avg = (r + g + b) / 3; //9;
      const len = density.length;
      const charIndex = floor(map(avg, 0, 255, 0, len));
      const c = density.charAt(charIndex);
      if (c == " ") asciiImage += "&nbsp;";
      else asciiImage += c;
    }
    asciiImage += '<br/>';
  }
  asciiDiv.html(asciiImage);
}
