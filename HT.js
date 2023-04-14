//nomor no.1 (callback)

function penjumlahan(a, b, penjumlahan){
    penjumlahan (a + b);
}

function pengurangan(a, b, pengurangan){
    pengurangan (a - b);
}
function pengalian(a, b, pengalian){
    pengalian (a * b);
}
function pembagian(a, b, pembagian){
    pembagian (a / b);
}
function pemangkatan(a, b, pemangkatan){
    pemangkatan (a ** b);
}

// Soal no.2 (promise)

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


// Soal no.3 (a,b,c)
console.log("====== CALLBACK =======")
// a. 375 / 125 * 3 ** 2 - 750 + (96 * 10 )* 84 / 12 = 5997 
    pembagian(375, 125, function(result1) {
            pemangkatan(3, 2, function(result2) {
                pengalian(result1, result2, function(result3){
                    pengurangan(result3, 750, function(result4) {
                      pengalian(96, 10, function(result5) {
                        pengalian(result5, 84, function(result6) {
                            pembagian(result6, 12, function(result7) {
                                penjumlahan(result4, result7, function(result8) {
                                    console.log("a. Hasil = "+result8);
                                });
                            });
                        });
                    });
                });
            });
        });
    });

// b. 500 - 625 / 5 + 84 / 12 * 96 / 12 = 431
pembagian(625, 5, function(result1) {
    pengurangan(500, result1, function(result2) {
      pembagian(84, 12, function(result3) {
        pembagian(96, 12, function(result4) {
          pengalian(result3, result4, function(result5) {
            penjumlahan(result2, result5, function(result6) {
              console.log("b. Hasil = "+result6);
            });
          });
        });
      });
    });
  });
  
// c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84 = 32075 
pembagian(750, 2, function(result1) {
  pembagian(125, 5, function(result2) {
    pembagian(96, 12, function(result3) {
      pengalian(result2, result3, function(result4) {
        pengalian(375, 84, function(result5) {
          penjumlahan(result1, result4, function(result6) {
            penjumlahan(result6, result5, function(result7) {
              console.log("c. Hasil = "+result7);
            });
          });
        });
      });
    });
  });
});
  
// d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250 = 2902
pembagian(750, 125, function(result1) {
  pengurangan(1000, result1, function(result2) {
    pengurangan(result2, 12, function(result3) {
      pengalian(96, 10, function(result4) {
        pengalian(result4, 500, function(result5){
          pembagian(result5, 250, function(result6) {
              penjumlahan(result3, result6, function(result7) {
                console.log("d. Hasil = "+result7);
            });
          });
        });
      });
    });
  });
});
  
// e. 36 ** 2 / 72 + 125 * 10 - 24 * 3 = 1196
pemangkatan(36, 2, function(result1) {
  pembagian(result1, 72, function(result2) {
    pengalian(125, 10, function(result3) {
      pengalian(24, 3, function(result4) {
        pengurangan(result2 + result3, result4, function(result5) {
          console.log("e. Hasil = "+result5);
        });
      });
    });
  });
});

// f. 500 / 100 * 20 + 84 * 2 - 125 / 5 = 243
pembagian(500, 100, function(result1) {
  pengalian(result1, 20, function(result2) {
    pengalian(84, 2, function(result3) {
      pembagian(125, 5, function(result4) {
        pengurangan(result2 + result3, result4, function(result5) {
          console.log("f. Hasil = "+result5);
        });
      });
    });
  });
});

// g. 375 * 2 - 750 / 25 + 1000 / 500 = 722
pengalian(375, 2, function(result1) {
  pembagian(750, 25, function(result2) {
    pembagian(1000, 500, function(result3) {
      penjumlahan(result1 - result2, result3, function(result4) {
        console.log("g. Hasil = "+result4);
      });
    });
  });
});

// h. 12 * 12 * 2 - 84 + 96 ** 2 = 9420
pengalian(12, 12, function(result1) {
  pemangkatan(96, 2, function(result2) {
    penjumlahan(result1 * 2, result2 - 84, function(result3) {
      console.log("h. Hasil = "+result3);
    });
  });
});

// i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12 = 1548
pembagian(750, 25, function(result1) {
  pembagian(375, 125, function(result2) {
    pembagian(72, 12, function(result3) {
      pengalian(result1, result2, function(result4) {
        pengalian(result4, result3, function(result5) {
          pengalian(84, 12, function(result6) {
            penjumlahan(result5, result6, function(result7) {
              console.log("i. Hasil = "+result7);
            });
          });
        });
      });
    });
  });
});

// j. 96 / 12 ** 2 + 625 / 5 - 375 * 84 = -31374,33
pemangkatan(12, 2, function(result1) {
  pembagian(96, result1, function(result2) {
    pembagian(625, 5, function(result3) {
      pengalian(375, 84, function(result4) {
        pengurangan(result2 + result3, result4, function(result5) {
          console.log("j. Hasil = "+result5);
        });
      });
    });
  });
});

// k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10 = -1132
pembagian(250, 25, function(result1) {
  pengalian(result1, 10, function(result2) {
    pemangkatan(36, 2, function(result3) {
      pembagian(result3, 72, function(result4) {
        pengalian(125, 10, function(result5) {
          pengurangan(result2 + result4, result5, function(result6) {
            console.log("k. Hasil = "+result6);
          });
        });
      });
    });
  });
});

// l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10 = -560
pembagian(375, 125, function(result1) {
  pengalian(result1, 100, function(result2) {
    pembagian(500, 250, function(result3) {
      pengalian(result3, 50, function(result4) {
        pengalian(96, 10, function(result5) {
          pengurangan(result2 + result4, result5, function(result6) {
            console.log("l. Hasil = "+result6);
          });
        });
      });
    });
  });
});

// m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2 = 91
pembagian(750, 25, function(result1) {
  pembagian(375, 125, function(result2) {
    pemangkatan(96, 2, function(result3) {
      pemangkatan(12, 2, function(result4) {
        pembagian(result3, result4, function(result5){
          pengurangan(result1, result2, function(result6){
            penjumlahan(result5, result6, function(result7){
              console.log("m. Hasil = "+result7);
            });
          });
        });
      });
    });
  });
})

// n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12 = -972
pembagian(1000, 500, function(result1) {
  pembagian(375, 125, function(result2) {
    pembagian(72, 12, function(result3) {
      pengalian(result1, result2, function(result4) {
        pengalian(result4, result3, function(result5) {
          pengalian(84, 12, function(result6) {
            pengurangan(result5, result6, function(result7) {
              console.log("n. Hasil = "+result7);
            });
          });
        });
      });
    });
  });
});

// o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2 = 162,66
pemangkatan(12, 2, function(result1) {
  pembagian(96, result1, function(result2) {
    pembagian(500, 250, function(result3) {
      pengalian(result3, 375, function(result4) {
        pembagian(result4, 125, function(result5){
          pengalian(84, 2, function(result6){
            pengurangan(result2, result5, function(result7){
              penjumlahan(result7, result6, function(result8){
                console.log("o. Hasil = "+result8);
              });
            });
          });
        });
      });
    });
  });
});

console.log("====== PROMISE =======")
// a. 375 / 125 * 3 ** 2 - 750 + (96 * 10 )* 84 / 12 = 5997 
promisePembagian(375, 125)
    .then((result1)=> promisePemangkatan(3,2)
    .then((result2)=> promisePengalian(result1,result2)
    .then((result3)=> promisePengurangan(result3,750)
    .then((result4)=> promisePengalian(96,10)
    .then((result5)=> promisePengalian(result5,84)
    .then((result6)=> promisePembagian(result6,12)
    .then((result7)=> promisePenjumlahan(result4,result7))))))))
    .then((hasil) => console.log("a. Hasil = ",hasil))
    .catch((err) => console.log(err));

// b. 500 - 625 / 5 + 84 / 12 * 96 / 12 = 431 
promisePembagian(625, 5)
.then((result1)=> promisePengurangan(500,result1)
.then((result2)=> promisePembagian(84,12)
.then((result3)=> promisePengalian(result3, 96)
.then((result4)=> promisePembagian(result4,12)
.then((result5)=> promisePenjumlahan(result2,result5))))))
.then((result6) => console.log("b. Hasil = ", result6))
.catch((err) => console.log(err));

// c. 750 / 2 + 125 / 5 * 96 / 12 + 375 * 84 = 32075 

promisePembagian(750, 2)
.then((result1) => promisePembagian(125, 5)
.then((result2) => promisePengalian(result2, 96)
.then((result3) => promisePembagian(result3, 12)
.then((result4) => promisePengalian(375, 84)
.then((result5) => promisePenjumlahan(result1, result4)
.then((result6) => promisePenjumlahan(result6, result5)))))))
.then((result7) => console.log("c. Hasil = ", result7))
.catch((err) => console.log(err));

// d. 1000 - 750 / 125 - 12 + 96 * 10 * 500 / 250 = 2902
promisePembagian(750, 125)
.then((result1) => promisePengalian(96, 10)
.then((result2) => promisePengalian(result2, 500)
.then((result3) => promisePembagian(result3, 250)
.then((result4) => promisePengurangan(1000, result1)
.then((result5) => promisePengurangan(result5, 12)
.then((result6) => promisePenjumlahan(result6, result4)))))))
.then((result7) => console.log("d. Hasil = ", result7))
.catch((err) => console.log(err));

// e. 36 ** 2 / 72 + 125 * 10 - 24 * 3 = 1196
promisePemangkatan(36, 2)
.then((result1) => promisePembagian(result1, 72)
.then((result2) => promisePengalian(125, 10)
.then((result3) => promisePengalian(24, 3)
.then((result4) => promisePenjumlahan(result2, result3)
.then((result5) => promisePengurangan(result5, result4))))))
.then((result6) => console.log("e. Hasil = ", result6))
.catch((err) => console.log(err));

// f. 500 / 100 * 20 + 84 * 2 - 125 / 5 = 243
promisePembagian(500, 100 )
.then((result1)=> promisePengalian(result1, 20)
.then((result2)=> promisePengalian(84, 2)
.then((result3)=> promisePembagian(125, 5)
.then((result4)=> promisePenjumlahan(result2, result3)
.then((result5)=> promisePengurangan(result5, result4))))))
.then((result6) => console.log("f. Hasil = ", result6))
.catch((err) => console.log(err));

// g. 375 * 2 - 750 / 25 + 1000 / 500 = 722
promisePengalian(375, 2)
.then((result1)=> promisePembagian(750, 25)
.then((result2)=> promisePembagian(1000, 500)
.then((result3)=> promisePengurangan(result1, result2)
.then((result4)=> promisePenjumlahan(result4, result3)
.then((result5)=> console.log("g. Hasil = ", result5))))))
.catch((err) => console.log(err));

// h. 12 * 12 * 2 - 84 + 96 ** 2 = 9420
promisePemangkatan(96, 2)
.then((result1)=> promisePengalian(12, 12)
.then((result2)=> promisePengalian(result2, 2)
.then((result3)=> promisePengurangan(result3,84)
.then((result4)=> promisePenjumlahan(result4, result1)
.then((result5)=> console.log("h. Hasil = ", result5))))))
.catch((err) => console.log(err));

// i. 750 / 25 * 375 / 125 * 72 / 12 + 84 * 12 = 1548
promisePembagian(750,25)
.then((result1)=> promisePengalian(result1, 375)
.then((result2)=> promisePembagian(result2, 125)
.then((result3)=> promisePengalian(result3, 72)
.then((result4)=> promisePembagian(result4, 12)
.then((result5)=> promisePengalian(84,12)
.then((result6)=> promisePenjumlahan(result5, result6)))))))
.then((result7) => console.log("i. Hasil = ", result7))
.catch((err) => console.log(err));

// j. 96 / 12 ** 2 + 625 / 5 - 375 * 84 = -31374,33
promisePemangkatan(12,2)
.then((result1)=> promisePembagian(96, result1)
.then((result2)=> promisePembagian(625, 5)
.then((result3)=> promisePengalian(375, 84)
.then((result4)=> promisePenjumlahan(result2, result3)
.then((result5)=> promisePengurangan(result5, result4)
.then((result6) => console.log("j. Hasil = ", result6)))))))
.catch((err) => console.log(err));

// k. 250 / 25 * 10 + 36 ** 2 / 72 - 125 * 10 = -1132
promisePembagian(250, 25)
.then((result1) => promisePengalian(result1, 10)
.then((result2) => promisePemangkatan(36, 2)
.then((result3) => promisePembagian(result3, 72)
.then((result4) => promisePengalian(125, 10)
.then((result5) => promisePenjumlahan(result2, result4)
.then((result6) => promisePengurangan(result6, result5)))))))
.then((result7) => console.log("k. Hasil = ", result7))
.catch((err) => console.log(err));

// l. 375 / 125 * 100 + 500 / 250 * 50 - 96 * 10 = -560
promisePembagian(375, 125)
.then((result1)=> promisePengalian(result1, 100)
.then((result2)=> promisePembagian(500, 250)
.then((result3)=> promisePengalian(result3, 50)
.then((result4)=> promisePengalian(96, 10)
.then((result5)=> promisePenjumlahan(result2, result4)
.then((result6)=> promisePengurangan(result6, result5)))))))
.then((result7) => console.log("l. Hasil = ", result7))
.catch((err) => console.log(err));

// m. 750 / 25 - 375 / 125 + 96 ** 2 / 12 ** 2 = 91
promisePembagian(750, 25)
.then((result1)=> promisePembagian(375, 125)
.then((result2)=> promisePemangkatan(96, 2)
.then((result3)=> promisePemangkatan(12, 2)
.then((result4)=> promisePembagian(result3, result4)
.then((result5)=> promisePengurangan(result1, result2)
.then((result6)=> promisePenjumlahan(result6, result5)))))))
.then((result7) => console.log("m. Hasil = ", result7))
.catch((err) => console.log(err));

// n. 1000 / 500 * 375 / 125 * 72 / 12 - 84 * 12 = -972
promisePembagian(1000, 500)
.then((result1)=> promisePengalian(result1, 375)
.then((result2)=> promisePembagian(result2, 125)
.then((result3)=> promisePengalian(result3, 72)
.then((result4)=> promisePembagian(result4, 12)
.then((result5)=> promisePengalian(84, 12)
.then((result6)=> promisePengurangan(result5, result6)))))))
.then((result7) => console.log("n. Hasil = ", result7))
.catch((err) => console.log(err));

// o. 96 / 12 ** 2 - 500 / 250 * 375 / 125 + 84 * 2 = 162,66
promisePemangkatan(12, 2)
.then((result1)=> promisePembagian(96, result1)
.then((result2)=> promisePembagian(500, 250)
.then((result3)=> promisePengalian(result3, 375)
.then((result4)=> promisePembagian(result4, 125)
.then((result5)=> promisePengalian(84, 2)
.then((result6)=> promisePengurangan(result2, result5)
.then((result7)=> promisePenjumlahan(result7, result6))))))))
.then((result8) => console.log("o. Hasil = ", result8))
.catch((err) => console.log(err));
