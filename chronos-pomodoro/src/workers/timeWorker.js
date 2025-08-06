self.onmessage = function (event) {
    console.log('WORKER recebeu', event.data)

    switch(event.data){
        case'FAVOR': {
            self.postMessage("sim, posso fazer um favor")
        }
        case'FALA_OI':{
            self.postMessage('OK: OI!')
            break
        }
        case 'FECHAR': {
            self.postMessage('Tá bom, vou fehcar')
            self.close()
            break
        }
        default: 
            self.postMessage('NÃO ENTENDI ')
    }
}