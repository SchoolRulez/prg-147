function dataWipe() {
    document.getElementById("name").value = "";
    document.getElementById("drinkamount").value = "";
    document.getElementById("sandamount").value = "";
    document.getElementById("sideamount").value = "";
}

function showScreen() {
    let num = document.getElementById("items").value;
    let drinks = document.getElementById("drinks");
    let sandwiches = document.getElementById("sandwiches");
    let sides = document.getElementById("sides");

    if (num == 1) {
        drinks.style.display = "block";
        sandwiches.style.display = "none";
        sides.style.display = "none";
    }

    if (num == 2) {
        drinks.style.display = "none";
        sandwiches.style.display = "block";
        sides.style.display = "none";
    }

    if (num == 3) {
        drinks.style.display = "none";
        sandwiches.style.display = "none";
        sides.style.display = "block";
    }

    if (num == 4) {
        drinks.style.display = "block";
        sandwiches.style.display = "block";
        sides.style.display = "none";
    }

    if (num == 5) {
        drinks.style.display = "block";
        sandwiches.style.display = "none";
        sides.style.display = "block";
    }

    if (num == 6) {
        drinks.style.display = "none";
        sandwiches.style.display = "block";
        sides.style.display = "block";
    }

    if (num == 7) {
        drinks.style.display = "block";
        sandwiches.style.display = "block";
        sides.style.display = "block";
    }
}

function sale() {
    let name = document.getElementById("name").value;

    const drinkprices = [0, 1.5, 2, 3, 5];
    const sandprices = [5, 5, 6, 6, 5];
    const sideprices = [1, 1.25, 2, 2.5, 3];

    const drinklist = ["Water", "Soda", "Tea", "Coffee", "Milkshake"]
    const sandlist = ["Turkey", "Ham", "Meatball", "Teriyaki", "Grilled Cheese"]
    const sidelist = ["Fries", "Wedges", "Chips", "Mac&Cheese", "Salad"]

    let num = document.getElementById("items").value;

    let num2 = document.getElementById("drinktype").value;
    let amt2 = document.getElementById("drinkamount").value;

    let num3 = document.getElementById("sandtype").value;
    let amt3 = document.getElementById("sandamount").value;

    let num4 = document.getElementById("sidetype").value;
    let amt4 = document.getElementById("sideamount").value;

    if (num == 1) {
        var price = drinkprices[(num2 - 1)];
        var item = drinklist[(num2 - 1)];

        var cost = price * amt2;
        document.getElementById("drinkcost").value = cost;

        document.getElementById("order").innerHTML = "You ordered " + amt2 + " " + item + " for $" + cost + ".";
        document.getElementById("total").innerHTML = name + ", your total is $" + cost + ".";
    }

    if (num == 2) {
        var price = sandprices[(num3 - 1)];
        var item = sandlist[(num3 - 1)];

        var cost = price * amt3;
        document.getElementById("sandcost").value = cost;

        document.getElementById("order").innerHTML = "You ordered " + amt3 + " " + item + " for $" + cost + ".";
        document.getElementById("total").innerHTML = name + ", your total is $" + cost + ".";
    }

    if (num == 3) {
        var price = sideprices[(num4 - 1)];
        var item = sidelist[(num4 - 1)];

        var cost = price * amt4;
        document.getElementById("sidecost").value = cost;

        document.getElementById("order").innerHTML = "You ordered " + amt4 + " " + item + " for $" + cost + ".";
        document.getElementById("total").innerHTML = name + ", your total is $" + cost + ".";
    }

    if (num == 4) {
        var price = drinkprices[(num2 - 1)];
        var price2 = sandprices[(num3 - 1)];
        var item = drinklist[(num2 - 1)];
        var item2 = sandlist[(num3 - 1)];

        var cost = price * amt2;
        var cost2 = price2 * amt3;

        document.getElementById("drinkcost").value = cost;
        document.getElementById("sandcost").value = cost2;
        
        var total = cost + cost2;
        document.getElementById("order").innerHTML = "You ordered " + amt2 + " " + item + " for $" + cost + " and " + amt3 + " " + item2 + " for $" + cost2 + ".";
        document.getElementById("total").innerHTML = name + ", your total is $" + total + ".";
    }

    if (num == 5) {
        var price = drinkprices[(num2 - 1)];
        var price2 = sideprices[(num4 - 1)];
        var item = drinklist[(num2 - 1)];
        var item2 = sidelist[(num4 - 1)];

        var cost = price * amt2;
        var cost2 = price2 * amt4;

        document.getElementById("drinkcost").value = cost;
        document.getElementById("sidecost").value = cost2;
        
        var total = cost + cost2;
        document.getElementById("order").innerHTML = "You ordered " + amt2 + " " + item + " for $" + cost + " and " + amt4 + " " + item2 + " for $" + cost2 + ".";
        document.getElementById("total").innerHTML = name + ", your total is $" + total + ".";
    }

    if (num == 6) {
        var price = sandprices[(num3 - 1)];
        var price2 = sideprices[(num4 - 1)];
        var item = sandlist[(num3 - 1)];
        var item2 = sidelist[(num4 - 1)];

        var cost = price * amt3;
        var cost2 = price2 * amt4;

        document.getElementById("sandcost").value = cost;
        document.getElementById("sidecost").value = cost2;
        
        var total = cost + cost2;
        document.getElementById("order").innerHTML = "You ordered " + amt3 + " " + item + " for $" + cost + " and " + amt4 + " " + item2 + " for $" + cost2 + ".";
        document.getElementById("total").innerHTML = name + ", your total is $" + total + ".";
    }

    if (num == 7) {
        var price = drinkprices[(num2 - 1)];
        var price2 = sandprices[(num3 - 1)];
        var price3 = sideprices[(num4 - 1)];
        var item = drinklist[(num2 - 1)];
        var item2 = sandlist[(num3 - 1)];
        var item3 = sidelist[(num4 - 1)];

        var cost = price * amt2;
        var cost2 = price2 * amt3;
        var cost3 = price3 * amt4;

        document.getElementById("drinkcost").value = cost;
        document.getElementById("sandcost").value = cost2;
        document.getElementById("sidecost").value = cost3;
        
        var total = cost + cost2 + cost3;
        document.getElementById("order").innerHTML = "You ordered " + amt2 + " " + item + " for $" + cost + ", " + amt3 + " " + item2 + " for $" + cost2 + ", and " + amt4 + " " + item3 + " for $" + cost3 + ".";
        document.getElementById("total").innerHTML = name + ", your total is $" + total + ".";
    }
}