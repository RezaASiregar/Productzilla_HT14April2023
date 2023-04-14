//===================================
//console.log("====== Async =======")

function promisePenjumlahan(a,b){
    const p = new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject("Masukkan angka");
          } else {
            resolve(a + b);
          }
    })
    return p;
}

function promisePengurangan(a,b){
    const p = new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject("Masukkan angka");
          } else {
            resolve(a - b);
          }
    })
    return p;
}

function promisePengalian(a,b){
    const p = new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject("Masukkan angka");
          } else {
            resolve(a * b);
          }
    })
    return p;
}

function promisePembagian(a,b){
    const p = new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject("Masukkan angka");
          } else {
            resolve(a / b);
          }
    })
    return p;
}

function promisePemangkatan(a,b){
    const p = new Promise((resolve, reject) => {
        if (typeof a !== "number" || typeof b !== "number") {
            reject("Masukkan angka");
          } else {
            resolve(a ** b);
          }
    })
    return p;
}

// a. 375 / 125 * 3 ** 2 - 750 + 96 * 10 * 84 / 12 = 5997
async function soalA(){
    try{
      const hasilA = await promisePembagian(375, 125);
      hasilA1 = await promisePengalian(hasilA, 9);
      hasilA2 = await promisePengalian(96, 10);
      hasilA3 = await promisePengalian(hasilA2, 84);
      hasilA4 = await promisePembagian(hasilA3,12);
      hasilA5 = await promisePengurangan(hasilA1, 750)
      hasilA6 = await promisePenjumlahan(hasilA4, hasilA5)
      console.log('aA. Hasil = ', hasilA6);
    } catch (error){
      console.log(error);
    }
  }
  soalA();
  
  // b. 500 - (625 / 5) + (84 / 12 * 96 / 12) = 431
  async function soalB(){
    try{
      const hasilB = await promisePembagian(625, 5);
      hasilB1 = await promisePembagian(84, 12);
      hasilB2 = await promisePengalian(hasilB1, 96);
      hasilB3 = await promisePembagian(hasilB2, 12);
      hasilB4 = await promisePengurangan(500, hasilB);
      hasilB5 = await promisePenjumlahan(hasilB4, hasilB3);
      console.log('aB. Hasil = ', hasilB5);
    } catch (error){
      console.log(error);
    }
  }
  soalB()
  
  // c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84 = 32075 
  async function soalC(){
    try{
      const hasilC = await promisePembagian(750, 2);
      hasilC1 = await promisePembagian(125, 5);
      hasilC2 = await promisePengalian(hasilC1, 96);
      hasilC3 = await promisePembagian(hasilC2, 12);
      hasilC7 = await promisePengalian(375, 84);
      hasilC4 = await promisePenjumlahan(hasilC, hasilC3);
      hasilC5 = await promisePenjumlahan(hasilC4, hasilC7);
      console.log('aC. Hasil = ', hasilC5);
    } catch (error){
      console.log(error);
    }
  }
  soalC()
  
  // d. 1000 - (750 / 125) - 12 + (96 * 10 * 500 / 250) = 2902
  async function soalD(){
    try{
      const hasilD = await promisePembagian(750, 125);
      hasilD1 = await promisePengalian(96, 10);
      hasilD2 = await promisePengalian(hasilD1, 500);
      hasilD3 = await promisePembagian(hasilD2, 250);
      hasilD4 = await promisePengurangan(1000, hasilD);
      hasilD5 = await promisePengurangan(hasilD4, 12);
      hasilD6 = await promisePenjumlahan(hasilD5, hasilD3)
      console.log('aD. Hasil = ', hasilD6);
    } catch (error){
      console.log(error);
    }
  }
  soalD()
  
  // e. 36 ** 2 / 72 + 125 * 10 - 24 * 3 = 1196
  async function soalE(){
    try{
      const hasilE = await promisePemangkatan(36, 2);
      hasilE1 = await promisePembagian(hasilE, 72);
      hasilE2 = await promisePengalian(125, 10);
      hasilE3 = await promisePengalian(24, 3);
      hasilE4 = await promisePenjumlahan(hasilE1, hasilE2);
      hasilE5 = await promisePengurangan(hasilE4, hasilE3);
      console.log('aE. Hasil = ', hasilE5);
    } catch (error){
      console.log(error);
    }
  }
  soalE()
  
  // f. 500 / 100 * 20 + 84 * 2 - 125 / 5 = 243
  async function soalF(){
    try{
      const hasilF = await promisePembagian(500, 100);
      hasilF1 = await promisePengalian(hasilF, 20);
      hasilF2 = await promisePengalian(84, 2);
      hasilF3 = await promisePembagian(125, 5);
      hasilF4 = await promisePenjumlahan(hasilF1, hasilF2);
      hasilF5 = await promisePengurangan(hasilF4, hasilF3);
      console.log('aF. Hasil = ', hasilF5);
    } catch (error){
      console.log(error);
    }
  }
  soalF()
  
  // g. 375 * 2 - 750 / 25 + 1000 / 500 = 722
  async function soalG(){
    try{
      const hasilG = await promisePengalian(375, 2);
      hasilG1 = await promisePembagian(750, 25);
      hasilG2 = await promisePembagian(1000, 500);
      hasilG4 = await promisePengurangan(hasilG, hasilG1);
      hasilG5 = await promisePenjumlahan(hasilG4, hasilG2);
      console.log('aG. Hasil = ', hasilG5);
    } catch (error){
      console.log(error);
    }
  }
  soalG()
  
  // h. 12 * 12 * 2 - 84 + 96 ** 2 = 9420
  async function soalH(){
    try{
      const hasilH = await promisePengalian(12, 12);
      hasilH1 = await promisePengalian(hasilH, 2);
      hasilH2 = await promisePemangkatan(96, 2);
      hasilH4 = await promisePengurangan(hasilH1, 84);
      hasilH5 = await promisePenjumlahan(hasilH4, hasilH2);
      console.log('aH. Hasil = ', hasilH5);
    } catch (error){
      console.log(error);
    }
  }
  soalH()
  
  // i. (750 / 25 * 375 / 125 * 72 / 12) + (84 * 12) = 1548
  async function soalI(){
    try{
      const hasilI = await promisePembagian(750, 25);
      hasilI1 = await promisePengalian(hasilI, 375);
      hasilI2 = await promisePembagian(hasilI1, 125);
      hasilI3 = await promisePengalian(hasilI2, 72);
      hasilI4 = await promisePembagian(hasilI3,  12);
      hasilI5 = await promisePengalian(84, 12);
      hasilI6 = await promisePenjumlahan(hasilI4, hasilI5);
      console.log('aI. Hasil = ', hasilI6);
    } catch (error){
      console.log(error);
    }
  }
  soalI()

  // j. 96 / 12 ** 2 + 625 / 5 - 375 * 84 = -31374,33
  async function soalJ(){
    try{
      const hasilJ = await promisePemangkatan(12, 2);
      hasilJ1 = await promisePembagian(96, hasilJ);
      hasilJ2 = await promisePembagian(625, 5);
      hasilJ3 = await promisePengalian(375, 84);
      hasilJ4 = await promisePenjumlahan(hasilJ1, hasilJ2);
      hasilJ6 = await promisePengurangan(hasilJ4, hasilJ3);
      console.log('aJ. Hasil = ', hasilJ6);
    } catch (error){
      console.log(error);
    }
  }
  soalJ()

  // k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10 = -1132
  async function soalK(){
    try{
      const hasilK = await promisePemangkatan(36, 2);
      hasilK1 = await promisePembagian(250, 25);
      hasilK2 = await promisePengalian(hasilK1, 10);
      hasilK3 = await promisePembagian(hasilK, 72);
      hasilK4 = await promisePengalian(125, 10);
      hasilK6 = await promisePenjumlahan(hasilK2, hasilK3);
      hasilK7 = await promisePengurangan(hasilK6, hasilK4)
      console.log('aK. Hasil = ', hasilK7);
    } catch (error){
      console.log(error);
    }
  }
  soalK()

  // l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10 = -560
  async function soalL(){
    try{
      const hasilL = await promisePembagian(375, 125);
      hasilL1 = await promisePengalian(hasilL, 100);
      hasilL2 = await promisePembagian(500, 250);
      hasilL3 = await promisePengalian(hasilL2, 50);
      hasilL7 = await promisePengalian(96, 10);
      hasilL4 = await promisePenjumlahan(hasilL1, hasilL3);
      hasilL6 = await promisePengurangan(hasilL4, hasilL7);
      console.log('aL. Hasil = ', hasilL6);
    } catch (error){
      console.log(error);
    }
  }
  soalL()

  // m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2 = 91
  async function soalM(){
    try{
      const hasilM = await promisePembagian(750, 25);
      hasilM1 = await promisePembagian(375, 125);
      hasilM2 = await promisePemangkatan(96, 2);
      hasilM8 = await promisePemangkatan(12, 2);
      hasilM7 = await promisePembagian(hasilM2, hasilM8);
      hasilM4 = await promisePengurangan(hasilM, hasilM1);
      hasilM6 = await promisePenjumlahan(hasilM4, hasilM7);
      console.log('aM. Hasil = ', hasilM6);
    } catch (error){
      console.log(error);
    }
  }
  soalM()
  
  // n. (1000 / 500 * 375 / 125 * 72 / 12) - (84 * 12) = -972
  async function soalN(){
    try{
      const hasilN = await promisePembagian(1000, 500);
      hasilN1 = await promisePengalian(hasilN, 375);
      hasilN2 = await promisePembagian(hasilN1, 125);
      hasilN9 = await promisePengalian(hasilN2, 72);
      hasilN10 = await promisePembagian(hasilN9, 12)
      hasilN3 = await promisePengalian(84, 12);
      hasilN6 = await promisePengurangan(hasilN10, hasilN3);
      console.log('aN. Hasil = ', hasilN6);
    } catch (error){
      console.log(error);
    }
  }
  soalN()
  
  // o. (96 / 12 ** 2) - (500 / 250 * 375 / 125) + (84 * 2) = 162,66
  async function soalO(){
    try{
      const hasilO = await promisePemangkatan(12, 2);
      hasilO1 = await promisePembagian(96, hasilO);
      hasilO2 = await promisePembagian(500, 250);
      hasilO3 = await promisePengalian(hasilO2, 375);
      hasilO7 = await promisePembagian(hasilO3, 125);
      hasilO9 = await promisePengalian(84, 2);
      hasilO4 = await promisePengurangan(hasilO1, hasilO7);
      hasilO6 = await promisePenjumlahan(hasilO4, hasilO9);
      console.log('aO. Hasil = ', hasilO6);
    } catch (error){
      console.log(error);
    }
  }
  soalO()
  
  