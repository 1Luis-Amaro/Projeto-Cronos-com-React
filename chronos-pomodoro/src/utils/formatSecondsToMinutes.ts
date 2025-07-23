export function formatSecondsToMinutes (seconds : number) {
    const minutes = String(Math.floor(seconds / 60)).padStart(2, '0'); //aqui converto os segundos em minutos
    const secondsMod = String(Math.floor(seconds % 60)).padStart(2, '0');// e o resto da divisão pra pegar o restante dos segundos
    return `${minutes} : ${secondsMod}`
    
}