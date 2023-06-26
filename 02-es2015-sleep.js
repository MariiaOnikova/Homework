async function Sleep(x) {
    return new Promise((resolve, reject) => {setTimeout(() => {resolve()}, x);});
}

async function fnc() {
    await Sleep(1000);
    console.log('Прошла одна секунда');
    }

fnc();