export function getNextCycle(currentCycle: number){
    return currentCycle === 0  || currentCycle === 8 ? 1 : currentCycle + 1
}

//se o current for 0 ai vai ser 1 se for outros valores vai somar com mais 1 e quando chegar no 8 vai voltar pro 1  