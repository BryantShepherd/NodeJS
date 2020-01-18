function wait(timeout) {
    return new Promise(r => setTimeout(r, timeout));
}

async function runner() {
    await wait(2000);
    console.log("First quarter");
    await wait(2020);
    console.log("Second quarter");
    await wait(2040);
    console.log("Third quarter");
    throw new Error(2040);
}

async function main() {
    try {
        await runner();
        console.log("Finish");
    } catch (e) {
        console.error(e.message);
    }
}

main();