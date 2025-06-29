console.log('Request data...')

// setTimeout(() => {
//     console.log('preparring data');

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working',
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log('data received', backendData);
//     }, 2000)
// }, 2000);

// проблема много вложенностей

// const p = new Promise((resolve, reject) => {
//     console.log('preparring data');
//     setTimeout(() => {
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working',
//         }

//      resolve(backendData)
//     }, 2000)
// })

// p.then(data => {
//     const p2 = new Promise((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true
//         resolve(data)
//         }, 2000)
//     });

//     // p2.then(clientData => {
//     //     console.log('Data received', clientData);
//     // });
// })

// види что также код громоздкий, убираем p2
// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//         data.modified = true
//         resolve(data)
//         }, 2000)
//     });
// }).then(clientData => console.log(clientData))

// catch

// p.then(data => {
//     return new Promise((resolve, reject) => {
//         setTimeout(() => {
//             data.modified = true
//             reject(data)
//         }, 2000)
//     });
// })
//     .then(() => console.log('data'))
//     .catch(error => console.error(error))
//     .finally(() => 'finally')

//====================================================
const sleep = ms => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), ms)
    })
}

// sleep(2000).then(() => console.log('2 sec'))
// sleep(3000).then(() => console.log('3 sec'))

Promise.all([sleep(2000), sleep(5000)])
    .then(() => console.log('all promises'))

Promise.race([sleep(2000), sleep(5000)])
    .then(() => console.log('race promises'))