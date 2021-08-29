var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var police1, police2, police3,police4;
var boundary1, boundary2;
var thief;

  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  thief = createSprite(20,190,13,13);
  thief.shapeColor = "green";
  
  police1 = createSprite(100,130,10,10);
  police1.shapeColor = "red";
  police2 = createSprite(215,130,10,10);
  police2.shapeColor = "red";
  police3 = createSprite(165,250,10,10);
  police3.shapeColor = "red";
  police4 = createSprite(270,250,10,10);
  police4.shapeColor = "red";

 
//add the velocity to make the car move.
police1.velocityY = 8
police2.velocityY = 8;
police3.velocityY = -8
police4.velocityY = -8
var life = 0;
function draw() {
   background("white");
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("red");
  rect(0,120,52,140);
  fill("lightblue");
  rect(345,120,52,140);
  
   fill("brown")
   textSize(15)
 text("Help the thief escape the police!",100,300)
 
  
// create bounceoff function to make the car bounceoff the boundaries
police1.bounceOff(boundary1)
police1.bounceOff(boundary2)
police2.bounceOff(boundary1)
police2.bounceOff(boundary2)
police3.bounceOff(boundary1)
police3.bounceOff(boundary2)
police4.bounceOff(boundary1)
police4.bounceOff(boundary2)

//Add the condition to make the sam move left and right
if(keyDown(RIGHT_ARROW)){
  thief.x = thief.x +1
}

  if(keyDown(LEFT_ARROW)){
  thief.x = thief.x -1
}
//Add the condition to reduce the life of sam if it touches the car.
  if(thief.isTouching(police1)||thief.isTouching(police2)||thief.isTouching(police3)||thief.isTouching(police4)){
    thief.x=10
    thief.y = 190
    life = life+1
  }
  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
