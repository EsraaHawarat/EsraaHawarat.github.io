function calculateSizeAndCells() {
    // Get the amount of consumption entered by the user
    var consumption = parseInt(document.getElementById("consumption").value);
    
    // Calculate the size of the solar system based on the equation
    var systemSize = consumption / 130;
    
    // Calculate the number of cells based on the equation
    var singleCellCapacity = 550; // in Watts
    var numberOfCells = (systemSize * 1000) / singleCellCapacity;
    
    // Display the results
    document.getElementById("systemSizeResult").textContent = "The size of the solar system is approximately: " + systemSize.toLocaleString()+"KW";
    document.getElementById("numberOfCellsResult").textContent = "The number of cells needed is approximately: " + Math.ceil(numberOfCells)+"cells";

    // List of inverter sizes
    var inverterSizes = [3.6, 3.68, 4, 7, 8, 10 , 20 , 25 , 30 , 40];
    
    // Find the largest inverter size immediately after the system size
    var selectedInverterSize = findLargestInverterSize(systemSize, inverterSizes);
    
    // Display the selected inverter size
    document.getElementById("inverterSizeResult").textContent = "The size of the inverter needed is: " + selectedInverterSize + " K";
    // Calculate the monthly production of the system
    var monthlyProduction = systemSize * 140;
    
    // Display the monthly production
    document.getElementById("monthlyProductionResult").textContent = "The monthly production of the system is approximately: " + monthlyProduction.toLocaleString() + " kWh";
}

function findLargestInverterSize(systemSize, inverterSizes) {
    var selectedSize = null;
    
    // Sort the inverter sizes in ascending order
    inverterSizes.sort(function(a, b) {
        return a - b;
    });
    
    // Iterate through the sorted inverter sizes
    for (var i = 0; i < inverterSizes.length; i++) {
        // Check if the inverter size * 1.4 is equal or above the system size
        if (inverterSizes[i] * 1.4 >= systemSize) {
            selectedSize = inverterSizes[i];
            break;
        }
    }
    
    return selectedSize;
}