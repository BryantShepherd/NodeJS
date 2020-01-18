function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function main() {
    console.time('wait2s');
    let w1 = wait(1000);
    let w2 = wait(2000);
    // await w1;
    // await w2;
    console.timeEnd('wait2s');
}

main();