// Vanilla - start

    // common
    console.log("texto simples");
    console.warn("texto de aviso simples");
    console.assert();
    console.error("texto de erro simples");

    //extra
    for(i=0; i<3; i++){
        console.count('Counter 1')
    }
    console.countReset('Counter 1')

    // concat var
    let outro = "final";
    console.log("texto simples", outro);

    // concat var mode 2
    let middleText = "final";
    let endText = "final";
    console.log("texto % simples %", middleText, endText);

    // concat var mode 3
    let outro = "final";
    console.log(`texto simples ${outro}`);

// Vanilla - end

// Angular - start

    logIt(...it): void {
        console.log(it);
    }

// Angular - end

// React - start

function logIt(...it) {
    console.log(it);
}

// React - end

// Svelt - start

function logIt(...it) {
    console.log(it);
}

// Svelt - end

