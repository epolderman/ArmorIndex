//Main script in UI to control Suit Information

//build the array full of name value objects
var suitContainer =
[
  {
    name: 'T-45',
    suitImagePath: 'T-45i',
    suitLocationPath: 'someSuitImageLocationPath',
    DamageResistance: 500,
    ElectricalResistance: 310,
    RadioactiveResistance: 1050,
    HitPoints: 450,
    Weight: 92,
    suitHistory: "T-45 power armor is a power armor set in Fallout 4.  \
    It was originally developed and manufactured for the United States  \
    Army by American defense contractor West Tek. The T-45 power armor  \
    was the first version of power armor to be successfully deployed in battle."
  },
  {
    name: 'T-51',
    suitImagePath: 'T-51',
    suitLocationPath: 'someSuitImageLocationPath',
    DamageResistance: 740,
    ElectricalResistance: 490,
    RadioactiveResistance: 1050,
    HitPoints: 720,
    Weight: 92,
    suitHistory: "T-51 was the most advanced power armor in wide commercial use before the \
    outbreak of the Great War. First seeing service - and inherently, great success -  \
    in the Anchorage Reclamation campaign, the T-51 power armor soon became  \
    standard issue for the army's armored infantry regiments. Developed at the  \
    West Tek research facility, the T-51 was the peak of pre-War power armor technology. \
    It saw continuous service throughout the Great War, and is thought to be the force that \
    drove the Chinese out of Anchorage."
  },
  {
    name: 'T-60',
    suitImagePath: 'T-60',
    suitLocationPath: 'someSuitImageLocationPath',
    DamageResistance: 980,
    ElectricalResistance: 645,
    RadioactiveResistance: 1050,
    HitPoints: 990,
    Weight: 92,
    suitHistory: "Developed in early 2077 after the Anchorage Reclamation, \
    the T-60 series of power armor was designed to eventually replace the  \
    T-51 power armor as the pinnacle of powered armor technology in the U.S. \
    military arsenal. Incorporating design elements from the earlier T-45, the \
    T-60 was deployed domestically among U.S. Army units just prior to the \
    dropping of the bombs."
  },
  {
    name: 'X-01',
    suitImagePath: 'X-1',
    suitLocationPath: 'someSuitImageLocationPath',
    DamageResistance: 1220,
    ElectricalResistance: 790,
    RadioactiveResistance: 1050,
    HitPoints: 1260,
    Weight: 92,
    suitHistory: "The X-01 power armor is a set of power armor created \
    shortly before the bombs fell.[1] It was later engineered by remnants \
    of the U.S. military after the Great War. It improves upon older suits \
    by offering superior protective abilities. X-01 power armor provides the \
    greatest defense among all models of power armor featured in Fallout 4.\
    The power armor bears resemblance to the advanced power armor seen in \
    previous Fallout games."
  },
  {
    name: 'Quantum X-01',
    suitImagePath: 'Q-1',
    suitLocationPath: 'someSuitImageLocationPath',
    DamageResistance: 1700,
    ElectricalResistance: 1270,
    RadioactiveResistance: 1050,
    HitPoints: 1800,
    Weight: 110,
    suitHistory: "Nuka-Cola Corporation had strong ties with the U.S. military \
    which allowed them access to their technology, including suits of power  \
    armor. The suits were given Nuka-Cola themed paint jobs and used to  \
    promote the soft drink. Vim! Pop Incorporated had a similar idea by  \
    using a suit of their own and giving it a Vim! inspired paint scheme  \
    to promote their drink"
  }
];

//grab dom objects & assign variables
var suitNumber = 0; //main iterator index
var ActiveElectricResistance = document.getElementById("electricLog");
var ActiveDamageResistance = document.getElementById("damageLog");
var ActiveRadioResistance = document.getElementById("radioLog");
var ActiveSuitImage = document.getElementById("actualSuit");
var ActiveSuitName = document.getElementById("suitNameSector");
var ActiveSuitHitPoints = document.getElementById("hpLog");
var ActiveSuitWeight = document.getElementById("weightLog");
var ActiveSuitHistory; //not showing this
var ActiveSuitLocationImagePath; //dont have yet
var previousSuitButton = document.getElementById("previousSuitButton");
var nextSuitButton = document.getElementById("nextSuitButton");

//assign event listeners
previousSuitButton.addEventListener("click", function() {
  suitNumber = suitNumber - 1;
  if(suitNumber < 0)
  suitNumber = suitContainer.length - 1;
  displayUIinformation();
  displayUINumbers();
}, false);
nextSuitButton.addEventListener("click", function() {
  suitNumber = suitNumber + 1;
  if(suitNumber > (suitContainer.length - 1))
  suitNumber = 0;
  displayUIinformation();
  displayUINumbers();
}, false);

//display to UI
function displayUIinformation()
{
  console.log("DisplayUI in suitNumber test is " + suitNumber);
  ActiveSuitWeight.innerHTML = 0;
  ActiveElectricResistance.innerHTML = 0;
  ActiveDamageResistance.innerHTML = 0;
  ActiveRadioResistance.innerHTML = 0;
  ActiveSuitHitPoints.innerHTML = 0;

  ActiveSuitName.innerHTML = suitContainer[suitNumber].name;
  ActiveSuitImage.style.backgroundImage = 'url(../ArmorIndex/Fallout/Suits/' +
  suitContainer[suitNumber].suitImagePath + '.png)';

  console.log('url(/ArmorIndex/Fallout/Suits/' +
  suitContainer[suitNumber].suitImagePath + '.png)');
}


var electricalBegin = 0;
var setElectricInterval;
var damageBegin = 0;
var setDamageInterval;
var radioBegin = 0;
var setRadioactiveInterval;
var heartBegin = 0;
var setHeartInterval;
var weightBegin = 0;
var setWeightInterval;

function displayUINumbers()
{
  clearAllIntervals();

  ActiveElectricResistance.innerHTML = electricalBegin;
  setElectricInterval = setInterval(setElectrical,.2);

  ActiveDamageResistance.innerHTML = damageBegin;
  setDamageInterval = setInterval(setDamage,.2);

  ActiveSuitWeight.innerHTML = weightBegin;
  setWeightInterval = setInterval(setWeight, .2);

  ActiveRadioResistance.innerHTML = radioBegin;
  setRadioactiveInterval = setInterval(setRadioactive, .2);

  ActiveSuitHitPoints.innerHTML = heartBegin;
  setHeartInterval = setInterval(setHeart, .2);
}
function setElectrical()
{
    electricalBegin++;
    ActiveElectricResistance.innerHTML = electricalBegin;
    if(electricalBegin === suitContainer[suitNumber].ElectricalResistance)
    {
    clearInterval(setElectricInterval);
    electricalBegin = 0;
    console.log("Electrical Done");
    }
}
function setDamage()
{
    damageBegin++;
    ActiveDamageResistance.innerHTML = damageBegin;
    if(damageBegin === suitContainer[suitNumber].DamageResistance)
    {
    clearInterval(setDamageInterval);
    damageBegin = 0;
    console.log("Damage Done");
    }
}
function setWeight()
{
    weightBegin++;
    ActiveSuitWeight.innerHTML = weightBegin;

    if(weightBegin === suitContainer[suitNumber].Weight)
    {
    clearInterval(setWeightInterval);
    weightBegin = 0;
    console.log("Weight Done");
    }
}
function setRadioactive()
{
    radioBegin++;
    ActiveRadioResistance.innerHTML = radioBegin;

    if(radioBegin === suitContainer[suitNumber].RadioactiveResistance)
    {
    clearInterval(setRadioactiveInterval);
    radioBegin = 0;
    console.log("RadioActive Done");
    }
}
function setHeart()
{
    heartBegin++;
    ActiveSuitHitPoints.innerHTML = heartBegin;

    if(heartBegin === suitContainer[suitNumber].HitPoints)
    {
    clearInterval(setHeartInterval);
    heartBegin = 0;
    console.log("HitPoints Done");
    }
}
function clearAllIntervals()
{
  console.log("Clearing All Intervals")
  electricalBegin = 0;
  damageBegin = 0;
  radioBegin = 0;
  heartBegin = 0;
  weightBegin = 0;
  clearInterval(setElectricInterval);
  clearInterval(setDamageInterval);
  clearInterval(setHeartInterval);
  clearInterval(setWeightInterval);
  clearInterval(setRadioactiveInterval);
}
