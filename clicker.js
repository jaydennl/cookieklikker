var num = 0;

// Upgrade counts en kosten
var grannyCount = 0;
var factoryCount = 0;
var farmCount = 0;
var robotCount = 0;
var cosmischeCount = 0;

var grannyCost = 30;
var factoryCost = 100;
var farmCost = 200;
var robotCost = 500;
var cosmischeCost = 1000;

// Cookie bonuses per upgrade
var grannyBonus = 3;    // Granny Upgrade voegt +3 cookies per click
var factoryBonus = 10;  // Factory Upgrade voegt +10 cookies per click
var farmBonus = 30;     // Farm Upgrade voegt +30 cookies per click
var robotBonus = 100;   // Robot Upgrade voegt +100 cookies per click
var cosmischeBonus = 200;   // cosmische Upgrade voegt +200 ckookies per click

var clickBonus = 0;  // Totale bonus van alle upgrades

window.onload = function () {
    var name = prompt("What is your name?");
    var space = document.getElementById("space");
    space.innerHTML = name + "'s Bakery";
};

function cookieClick() {
    num += 1 + clickBonus;  // Add base 1 cookie plus any bonuses from upgrades
    document.getElementById("numbers").innerHTML = num;

    // Enable buttons based on current cookie count
    if (num >= grannyCost) {
        document.getElementById("grannyUpgrade").disabled = false;
    } else {
        document.getElementById("grannyUpgrade").disabled = true;
    }

    if (num >= factoryCost) {
        document.getElementById("factoryUpgrade").disabled = false;
    } else {
        document.getElementById("factoryUpgrade").disabled = true;
    }

    if (num >= farmCost) {
        document.getElementById("farmUpgrade").disabled = false;
    } else {
        document.getElementById("farmUpgrade").disabled = true;
    }

    if (num >= robotCost) {
        document.getElementById("robotUpgrade").disabled = false;
    } else {
        document.getElementById("robotUpgrade").disabled = true;
    }

    if (num >= cosmischeCost) {
        document.getElementById("cosmischeUpgrade").disabled = false;
    } else {
        document.getElementById("cosmischeUpgrade").disabled = true;
    }
}

// Granny Upgrade
function activateGrannyUpgrade() {
    if (num >= grannyCost) {
        num -= grannyCost;  // Subtract the cost of the upgrade
        grannyCount++;
        grannyCost = Math.floor(grannyCost * 1.2);  // Increase the cost by 20%

        // Update the total click bonus with Granny's bonus
        clickBonus += grannyBonus;

        // Update cookie count and upgrade level
        document.getElementById("numbers").innerHTML = num;
        document.getElementById("grannyCount").innerHTML = grannyCount;
        document.getElementById("upgradeLevel").innerHTML = "Granny Level x" + grannyCount;
        document.getElementById("grannyUpgrade").innerHTML = "Granny Upgrade (" + grannyCost + " Cookies)";
    }
}

// Factory Upgrade
function activateFactoryUpgrade() {
    if (num >= factoryCost) {
        num -= factoryCost;  // Subtract the cost of the upgrade
        factoryCount++;
        factoryCost = Math.floor(factoryCost * 1.3);  // Increase the cost by 30%

        // Update the total click bonus with Factory's bonus
        clickBonus += factoryBonus;

        // Update cookie count and upgrade level
        document.getElementById("numbers").innerHTML = num;
        document.getElementById("factoryCount").innerHTML = factoryCount;
        document.getElementById("upgradeLevel").innerHTML = "Factory Level x" + factoryCount;
        document.getElementById("factoryUpgrade").innerHTML = "Factory Upgrade (" + factoryCost + " Cookies)";
    }
}

// Farm Upgrade
function activateFarmUpgrade() {
    if (num >= farmCost) {
        num -= farmCost;  // Subtract the cost of the upgrade
        farmCount++;
        farmCost = Math.floor(farmCost * 1.4);  // Increase the cost by 40%

        // Update the total click bonus with Farm's bonus
        clickBonus += farmBonus;

        // Update cookie count and upgrade level
        document.getElementById("numbers").innerHTML = num;
        document.getElementById("farmCount").innerHTML = farmCount;
        document.getElementById("upgradeLevel").innerHTML = "Farm Level x" + farmCount;
        document.getElementById("farmUpgrade").innerHTML = "Farm Upgrade (" + farmCost + " Cookies)";
    }
}

// Robot Upgrade
function activateRobotUpgrade() {
    if (num >= robotCost) {
        num -= robotCost;  // Subtract the cost of the upgrade
        robotCount++;
        robotCost = Math.floor(robotCost * 1.5);  // Increase the cost by 50%

        // Update the total click bonus with Robot's bonus
        clickBonus += robotBonus;

        // Update cookie count and upgrade level
        document.getElementById("numbers").innerHTML = num;
        document.getElementById("robotCount").innerHTML = robotCount;
        document.getElementById("upgradeLevel").innerHTML = "Robot Level x" + robotCount;
        document.getElementById("robotUpgrade").innerHTML = "Robot Upgrade (" + robotCost + " Cookies)";
    }
}

// Cosmische Upgrade
function activateCosmischeUpgrade() {
    if (num >= cosmischeCost) {
        num -= cosmischeCost;  // Subtract the cost of the upgrade
        cosmischeCount++;
        cosmischeCost = Math.floor(cosmischeCost * 1.6);  // Increase the cost by 60%

        // Update the total click bonus with Robot's bonus
        clickBonus += cosmischeBonus;

        // Update cookie count and upgrade level
        document.getElementById("numbers").innerHTML = num;
        document.getElementById("cosmischeCount").innerHTML = cosmischeCount;
        document.getElementById("upgradeLevel").innerHTML = "cosmische Level x" + cosmischeCount;
        document.getElementById("cosmischeUpgrade").innerHTML = "cosmische Upgrade (" + cosmischeCost + " Cookies)";
    }
}

