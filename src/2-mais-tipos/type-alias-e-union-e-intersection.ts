type user = {
    name: string;
    lastName: string;
    birthday?: string;
    age: number;
}
// ? = deixa o campo opcional

// alias = pode declarar tanto os campos quanto os tipos dos campos
const raphael: object = {
    name: 'raphael',
    lastName: 'Moura',
    age: 24
}

//union type
// | (como se fosse o ||) 

type logLevel = 'info' | 'error' | 'debug';

function logMessage(message: string, level: logLevel) {
    console.log(`$[{level}] - ${message}`)
}

logMessage('Uma menssagem info', 'error')
logMessage('Uma menssagem info', 'info')
logMessage('Uma menssagem info', 'debug')
// logMessage('Uma menssagem info', 'erro')


//intersection type: &
// união dos tipos
type About = {
    bio: string;
    interests: string[]
}


//unindo o type user e o type about
type Profile = user & About
const userWithProfile: Profile = {
    name: 'raphael',
    lastName: 'Moura',
    age: 24,
    bio: 'Olá meu nome é raphael',
    interests: ['musica', 'jogos', 'pão doce']
}