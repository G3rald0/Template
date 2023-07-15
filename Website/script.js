function calculatePrice() {
    const quantity = parseInt(document.getElementById("quantity").value);
    const size = document.getElementById("size").value;
    const color = document.getElementById("color").value;
    const sides = document.getElementById("sides").value;
    
    let price = 0;
    
    // A4 paper size prices
    if (size === "A4") {
      if (color === "Black and White") {
        if (sides === "Single-sided") {
          price = quantity * 0.05;
        } else {
          price = quantity * 0.08;
        }
      } else {
        if (sides === "Single-sided") {
          price = quantity * 0.1;
        } else {
          price = quantity * 0.18;
        }
      }
    }
    
    // A3 paper size prices
    if (size === "A3") {
      if (color === "Black and White") {
        if (sides === "Single-sided") {
          price = quantity * 0.1;
        } else {
          price = quantity * 0.16;
        }
      } else {
        if (sides === "Single-sided") {
          price = quantity * 0.2;
        } else {
          price = quantity * 0.36;
        }
      }
    }
    
    // A2 paper size prices
    if (size === "A2") {
      if (color === "Black and White") {
        if (sides === "Single-sided") {
          price = quantity * 0.2;
        } else {
          price = quantity * 0.32;
        }
      } else {
        if (sides === "Single-sided") {
          price = quantity * 0.4;
        } else {
          price = quantity * 0.72;
        }
      }
    }
    
    // A1 paper size prices
    if (size === "A1") {
      if (color === "Black and White") {
        if (sides === "Single-sided") {
          price = quantity * 0.4;
        } else {
          price = quantity * 0.64;
        }
      } else {
        if (sides === "Single-sided") {
          price = quantity * 0.8;
        } else {
          price = quantity * 1.44;
        }
      }
    }
    
    // Display price
    document.getElementById("price").value = "$" + price.toFixed(2);
  }
  