<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="ArmorIndex.aspx.cs" Inherits="Dungeons.ArmorIndex" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <meta charset="utf-8">
    <link rel="stylesheet" type="text/css" href="ArmorIndex/CSS/index.css">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link href="https://fonts.googleapis.com/css?family=Nunito" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css?family=Ubuntu" rel="stylesheet">
    <title>Suit Index</title>
</head>
<body>
    <form id="form1" runat="server">
    <div>
      <div class="backgroundContainer">
    <div class="background-image" style="background-image: url('ArmorIndex/Fallout/Images/HorizFallout.png')"></div>
  </div>
    <img id="naviButton" img src ="ArmorIndex/Fallout/Buttons/gear2_square.svg"></img>
    <img id="falloutIcon" img src ="ArmorIndex/Fallout/Icons/FalloutX01.svg"></img>
    <div id="mainMenu">

        <div id="suitInfo">
          <img id="exitMainMenu" img src ="ArmorIndex/Images/tXround.svg"></img>
          <div id="suitNameSector"></div>
        </div>

        <div id="suitRight">
        <div id="suitRightImage"></div>

          <div id="suitBottomBar">

              <div class="statContainer">
                <div id="electricLog" data-tooltip="Energy Resistance"
                  data-tooltip-position="resistanceTool"></div>
                <img id="electricIcon" img src="ArmorIndex/Fallout/Icons/electric.svg"></img>
              </div>
              <!--Damage-->
              <div class="statContainer">
                <div id="damageLog" data-tooltip="Damage Resistance"
                  data-tooltip-position="resistanceTool" ></div>
              <img id="damageIcon" img src="ArmorIndex/Fallout/Icons/shield.svg"
                title="Damage Resistance"></img>
              </div>
              <!--Radioactive-->
              <div class="statContainer">
                <div id="radioLog" data-tooltip="Radioactive Resistance"
                  data-tooltip-position="resistanceTool"></div>
              <img id="radioactiveIcon" img src="ArmorIndex/Fallout/Icons/radioactive.svg"></img>
              </div>
                <!--HitPoints-->
              <div class="statContainer">
                <div id="hpLog" data-tooltip="Hit Points"
                  data-tooltip-position="resistanceTool"></div>
              <img id="hpIcon" img src="ArmorIndex/Fallout/Icons/health.svg"></img>
              </div>
                <!--Weight-->
              <div class="statContainer">
                <div id="weightLog" data-tooltip="Weight"
                  data-tooltip-position="resistanceTool"></div>
              <img id="weightIcon" img src="ArmorIndex/Fallout/Icons/weight_1.svg"></img>
              </div>
          </div>
        </div>

        <div id="suitImage">
          <div id="actualSuit"></div>
        </div>

        <div id="suitBottomLeft">
          <div id="previousSuitButton" title="Previous Suit"></div>
          <div id="nextSuitButton" title="Next Suit"></div>
        </div>
        <!--<div style="clear: both;"></div>-->
      </div>


      <div id="footer">
          <img id="poweredIconJS" img src="ArmorIndex/Images/JavaScriptIcon.png"></img>
          <img id="poweredIconHTML" img src="ArmorIndex/Images/HTMLicon.png"></img>
          <img id="poweredIconCSS" img src="ArmorIndex/Images/CssIcon.png"></img>
      </div>
   
    </div>
        <!-- vanilla javascript attached at the bottom of body after DOM is loaded -->
    <script src="ArmorIndex/JS/suitLogic.js"></script>
    <script src="ArmorIndex/JS/naviSlide.js"></script>
    <script src="https://ajax.aspnetcdn.com/ajax/jQuery/jquery-3.1.1.min.js"></script>
    </form>
</body>
</html>
