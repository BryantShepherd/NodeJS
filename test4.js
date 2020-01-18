function wait(ms) {
    return new Promise(r => setTimeout(r, ms));
}

async function main() {
    let w1 = wait(2000);
    let w2 = wait(1000);
    await w1;
    console.log("hello")
    await w2;
    console.log("hello again");
}

main();